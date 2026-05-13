"use client";

import { useEffect, useState } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

type ImageItem = {
  page: number;
  image: string;
  rotation: number;
};

export default function PdfToJpgPage() {

  const [allImages, setAllImages] = useState<ImageItem[]>([]);

  const [selectedPages, setSelectedPages] =
    useState<number[]>([]);

  const [filteredImages, setFilteredImages] =
    useState<ImageItem[]>([]);

  const [loading, setLoading] = useState(false);

  const [progress, setProgress] = useState(0);

  const [dragActive, setDragActive] =
    useState(false);

  const [format, setFormat] =
    useState<"jpeg" | "png">("jpeg");

  const [quality, setQuality] = useState(1);

  const [dragIndex, setDragIndex] =
    useState<number | null>(null);

  // =========================
  // FILTER
  // =========================
  useEffect(() => {

    const filtered = allImages.filter((item) =>
      selectedPages.includes(item.page)
    );

    setFilteredImages(filtered);

  }, [selectedPages, allImages]);

  // =========================
  // PROCESS PDF
  // =========================
  const processPdf = async (file: File) => {

    setLoading(true);

    setProgress(0);

    try {

      const pdfjsLib = await import("pdfjs-dist");

      pdfjsLib.GlobalWorkerOptions.workerSrc =
        "/pdf.worker.min.mjs";

      const arrayBuffer = await file.arrayBuffer();

      const pdf = await pdfjsLib.getDocument({
        data: arrayBuffer,
      }).promise;

      const outputImages: ImageItem[] = [];

      for (
        let pageNum = 1;
        pageNum <= pdf.numPages;
        pageNum++
      ) {

        const page = await pdf.getPage(pageNum);

        const viewport = page.getViewport({
          scale: 2,
        });

        const canvas =
          document.createElement("canvas");

        const context = canvas.getContext("2d");

        if (!context) continue;

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({
          canvasContext: context,
          viewport,
          canvas: canvas as any,
        }).promise;

        const mimeType =
          format === "png"
            ? "image/png"
            : "image/jpeg";

        const imageData = canvas.toDataURL(
          mimeType,
          quality
        );

        outputImages.push({
          page: pageNum,
          image: imageData,
          rotation: 0,
        });

        const percent = Math.round(
          (pageNum / pdf.numPages) * 100
        );

        setProgress(percent);
      }

      setAllImages(outputImages);

      setSelectedPages(
        outputImages.map((item) => item.page)
      );

    } catch (error) {

      console.error(error);

      alert("Gagal convert PDF");
    }

    setLoading(false);
  };

  // =========================
  // FILE INPUT
  // =========================
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = event.target.files?.[0];

    if (!file) return;

    processPdf(file);
  };

  // =========================
  // DROP
  // =========================
  const handleDrop = async (
    event: React.DragEvent<HTMLDivElement>
  ) => {

    event.preventDefault();

    setDragActive(false);

    const file = event.dataTransfer.files[0];

    if (!file) return;

    processPdf(file);
  };

  // =========================
  // TOGGLE
  // =========================
  const togglePage = (page: number) => {

    if (selectedPages.includes(page)) {

      setSelectedPages(
        selectedPages.filter(
          (p) => p !== page
        )
      );

    } else {

      setSelectedPages([
        ...selectedPages,
        page,
      ]);
    }
  };

  // =========================
  // SELECT ALL
  // =========================
  const selectAllPages = () => {

    setSelectedPages(
      allImages.map((item) => item.page)
    );
  };

  // =========================
  // UNSELECT ALL
  // =========================
  const unselectAllPages = () => {

    setSelectedPages([]);
  };

  // =========================
  // ROTATE SINGLE
  // =========================
  const rotatePage = (
    page: number
  ) => {

    setAllImages((prev) =>
      prev.map((item) => {

        if (item.page === page) {

          return {
            ...item,
            rotation:
              (item.rotation + 90) % 360,
          };
        }

        return item;
      })
    );
  };

  // =========================
  // ROTATE ALL
  // =========================
  const rotateAllPages = () => {

    setAllImages((prev) =>
      prev.map((item) => ({
        ...item,
        rotation:
          (item.rotation + 90) % 360,
      }))
    );
  };

  // =========================
  // DRAG SORT
  // =========================
  const handleDragStart = (
    index: number
  ) => {

    setDragIndex(index);
  };

  const handleDragEnter = (
    index: number
  ) => {

    if (dragIndex === null) return;

    const newList = [...allImages];

    const draggedItem =
      newList[dragIndex];

    newList.splice(dragIndex, 1);

    newList.splice(index, 0, draggedItem);

    setDragIndex(index);

    setAllImages(newList);
  };

  // =========================
  // DOWNLOAD ZIP
  // =========================
  const downloadAllZip = async () => {

    const zip = new JSZip();

    filteredImages.forEach((item, index) => {

      const base64Data =
        item.image.split(",")[1];

      zip.file(
        `${index + 1}.${format}`,
        base64Data,
        {
          base64: true,
        }
      );
    });

    const content = await zip.generateAsync({
      type: "blob",
    });

    saveAs(
      content,
      `pdf-to-${format}.zip`
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black p-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold mb-3">
            PDF Converter
          </h1>

          <p className="text-gray-600">
            Premium PDF to JPG / PNG
          </p>

        </div>

        {/* CONTROL */}
        <div className="bg-white border border-gray-200 rounded-3xl p-10 mb-10 shadow-sm">

          {/* FORMAT */}
          <div className="mb-6">

            <label className="block mb-2 font-semibold">
              Format Output
            </label>

            <select
              value={format}
              onChange={(e) =>
                setFormat(
                  e.target.value as
                    | "jpeg"
                    | "png"
                )
              }
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            >
              <option value="jpeg">
                JPG
              </option>

              <option value="png">
                PNG
              </option>

            </select>

          </div>

          {/* QUALITY */}
          <div className="mb-8">

            <div className="flex justify-between mb-2">

              <label className="font-semibold">
                Quality
              </label>

              <span>
                {Math.round(quality * 100)}%
              </span>

            </div>

            <input
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              value={quality}
              onChange={(e) =>
                setQuality(
                  Number(e.target.value)
                )
              }
              className="w-full"
            />

          </div>

          {/* DROP */}
          <div
            onDrop={handleDrop}
            onDragOver={(e) => {
              e.preventDefault();
              setDragActive(true);
            }}
            onDragLeave={() =>
              setDragActive(false)
            }
            className={`border-2 border-dashed rounded-2xl p-16 text-center transition ${
              dragActive
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300"
            }`}
          >

            <p className="text-2xl font-semibold mb-3">
              Drag & Drop PDF
            </p>

            <p className="text-gray-500 mb-6">
              atau klik tombol dibawah
            </p>

            <label className="cursor-pointer">

              <div className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition">
                Pilih File PDF
              </div>

              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="hidden"
              />

            </label>

          </div>

          {/* PROGRESS */}
          {loading && (

            <div className="mt-8">

              <div className="flex justify-between mb-2">

                <span className="font-medium">
                  Sedang convert PDF...
                </span>

                <span>
                  {progress}%
                </span>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">

                <div
                  className="bg-blue-600 h-4 transition-all"
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>

            </div>

          )}

        </div>

        {/* ACTION */}
        {allImages.length > 0 && (
          <>

            <div className="flex flex-wrap gap-3 mb-8">

              <button
                onClick={selectAllPages}
                className="bg-gray-800 hover:bg-black text-white px-5 py-3 rounded-xl font-semibold"
              >
                Select All
              </button>

              <button
                onClick={unselectAllPages}
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl font-semibold"
              >
                Unselect All
              </button>

              <button
                onClick={rotateAllPages}
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-semibold"
              >
                Rotate All
              </button>

              <button
                onClick={downloadAllZip}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-semibold"
              >
                Download ZIP
              </button>

            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

              {allImages.map((item, index) => {

                const isSelected =
                  selectedPages.includes(
                    item.page
                  );

                return (

                  <div
                    key={item.page}
                    draggable
                    onDragStart={() =>
                      handleDragStart(index)
                    }
                    onDragEnter={() =>
                      handleDragEnter(index)
                    }
                    className={`bg-white rounded-2xl overflow-hidden shadow-sm transition border-4 ${
                      isSelected
                        ? "border-blue-500"
                        : "border-transparent"
                    }`}
                  >

                    <div
                      onClick={() =>
                        togglePage(item.page)
                      }
                      className="cursor-pointer"
                    >

                      <img
                        src={item.image}
                        alt={`Page ${item.page}`}
                        className="w-full transition"
                        style={{
                          transform: `rotate(${item.rotation}deg)`,
                        }}
                      />

                    </div>

                    <div className="p-4">

                      <div className="flex items-center justify-between mb-3">

                        <p className="font-medium">
                          Halaman {item.page}
                        </p>

                        <div
                          className={`w-5 h-5 rounded-full ${
                            isSelected
                              ? "bg-blue-600"
                              : "bg-gray-300"
                          }`}
                        />

                      </div>

                      <button
                        onClick={() =>
                          rotatePage(item.page)
                        }
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl font-semibold"
                      >
                        Rotate
                      </button>

                    </div>

                  </div>

                );
              })}

            </div>

          </>
        )}

      </div>

    </div>
  );
}