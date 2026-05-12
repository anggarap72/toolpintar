"use client";

import { useState } from "react";
import Tesseract from "tesseract.js";

export default function OCRPage() {

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOCR = async () => {

    if (!image) return;

    setLoading(true);

    const result = await Tesseract.recognize(
      image,
      "eng"
    );

    setText(result.data.text);

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-5xl font-bold text-center text-blue-600">
          Image to Text OCR
        </h1>

        <p className="text-center text-gray-500 mt-4">
          Upload gambar dan extract text otomatis menggunakan AI OCR.
        </p>

        <div className="mt-10">

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {

              if (e.target.files?.[0]) {

                setImage(e.target.files[0]);

                setPreview(
                  URL.createObjectURL(e.target.files[0])
                );
              }

            }}
            className="w-full border p-4 rounded-2xl"
          />

          {preview && (
            <img
              src={preview}
              alt="preview"
              className="mt-6 rounded-2xl max-h-96 object-contain mx-auto border"
            />
          )}

          <button
            onClick={handleOCR}
            className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold text-lg transition"
          >
            Extract Text
          </button>

        </div>

        {loading && (
          <div className="mt-8 text-center text-blue-600 font-semibold text-lg animate-pulse">
            Processing OCR...
          </div>
        )}

        {text && (
          <div className="mt-10">

            <div className="flex items-center justify-between mb-4">

              <h2 className="text-2xl font-bold">
                Result
              </h2>

              <button
                onClick={() => navigator.clipboard.writeText(text)}
                className="bg-black text-white px-4 py-2 rounded-xl"
              >
                Copy Text
              </button>

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