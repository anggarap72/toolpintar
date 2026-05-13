"use client";

import Link from "next/link";

import { useRef, useState } from "react";

import Tesseract from "tesseract.js";

import { saveAs } from "file-saver";

import {
  Document,
  Packer,
  Paragraph,
} from "docx";

import jsPDF from "jspdf";

export default function OCRPage() {

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFile = (file: File) => {

    setImage(file);

    setPreview(
      URL.createObjectURL(file)
    );
  };

  const handleOCR = async () => {

    if (!image) return;

    setLoading(true);

    setProgress(0);

    const result = await Tesseract.recognize(
      image,
      "ind+eng",
      {
        logger: (m) => {

          if (m.status === "recognizing text") {

            setProgress(
              Math.floor(m.progress * 100)
            );
          }

        },
      }
    );

    setText(result.data.text);

    setLoading(false);
  };

  const downloadTXT = () => {

    const blob = new Blob([text], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "ocr-result.txt";

    a.click();
  };

  const downloadWord = async () => {

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph(text),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);

    saveAs(blob, "ocr-result.docx");
  };

  const downloadPDF = () => {

    const pdf = new jsPDF();

    pdf.setFontSize(12);

    const lines = pdf.splitTextToSize(
      text,
      180
    );

    pdf.text(lines, 10, 10);

    pdf.save("ocr-result.pdf");
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b bg-white rounded-2xl mb-10 shadow-sm">

        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          ToolPintar
        </Link>

        <div className="flex gap-6 font-medium">

          <Link href="/">
            Home
          </Link>

          <Link href="/image-to-text">
            OCR Tools
          </Link>

        </div>

      </nav>

      {/* Main Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-5xl font-bold text-center text-blue-600">
          Image to Text OCR
        </h1>

        <p className="text-center text-gray-500 mt-4">
          Upload gambar dan extract text otomatis menggunakan AI OCR.
        </p>

        {/* Hidden Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => {

            if (e.target.files?.[0]) {

              handleFile(
                e.target.files[0]
              );
            }

          }}
        />

        {/* Upload Area */}
        <div
          className="mt-10 border-2 border-dashed border-blue-300 rounded-3xl p-14 text-center bg-blue-50 hover:bg-blue-100 transition cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {

            e.preventDefault();

            if (e.dataTransfer.files?.[0]) {

              handleFile(
                e.dataTransfer.files[0]
              );
            }

          }}
        >

          <div className="text-6xl mb-4">
            📄
          </div>

          <p className="text-2xl font-bold text-blue-700">
            Upload Image
          </p>

          <p className="text-gray-500 mt-3 text-lg">
            Drag & drop atau klik area ini
          </p>

        </div>

        {/* Preview */}
        {preview && (
          <img
            src={preview}
            alt="preview"
            className="mt-8 rounded-3xl max-h-96 object-contain mx-auto border shadow"
          />
        )}

        {/* OCR Button */}
        {image && (
          <button
            onClick={handleOCR}
            className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold text-lg transition"
          >
            Extract Text
          </button>
        )}

        {/* Progress */}
        {loading && (
          <div className="mt-8">

            <div className="flex justify-between mb-2">

              <span className="text-blue-600 font-semibold">
                Processing OCR...
              </span>

              <span className="font-bold">
                {progress}%
              </span>

            </div>

            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">

              <div
                className="bg-blue-600 h-4 transition-all duration-300"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

          </div>
        )}

        {/* Result */}
        {text && (
          <div className="mt-10">

            <div className="flex items-center justify-between mb-4 flex-wrap gap-4">

              <h2 className="text-2xl font-bold">
                Result
              </h2>

              <div className="flex gap-3 flex-wrap">

                <button
                  onClick={() => navigator.clipboard.writeText(text)}
                  className="bg-black text-white px-4 py-2 rounded-xl"
                >
                  Copy Text
                </button>

                <button
                  onClick={downloadTXT}
                  className="bg-blue-600 text-white px-4 py-2 rounded-xl"
                >
                  TXT
                </button>

                <button
                  onClick={downloadWord}
                  className="bg-green-600 text-white px-4 py-2 rounded-xl"
                >
                  WORD
                </button>

                <button
                  onClick={downloadPDF}
                  className="bg-red-600 text-white px-4 py-2 rounded-xl"
                >
                  PDF
                </button>

              </div>

            </div>

            <textarea
              value={text}
              readOnly
              className="w-full h-80 border rounded-2xl p-4"
            />

          </div>
        )}

      </div>

    </main>
  );
}