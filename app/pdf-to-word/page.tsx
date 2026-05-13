"use client";

import { useState } from "react";
import Tesseract from "tesseract.js";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export default function PdfToWordPage() {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const uploadedFile = e.target.files?.[0];

    if (!uploadedFile) return;

    setFile(uploadedFile);
  };

  const extractText = async () => {
    if (!file) return;

    setLoading(true);
    setText("");

    try {
      const arrayBuffer = await file.arrayBuffer();

      const pdf = await pdfjsLib.getDocument({
        data: arrayBuffer,
      }).promise;

      let finalText = "";

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
        }).promise;

        const imageData =
          canvas.toDataURL("image/png");

        const result =
          await Tesseract.recognize(
            imageData,
            "eng"
          );

        finalText +=
          "\n\n--- PAGE " +
          pageNum +
          " ---\n\n";

        finalText += result.data.text;
      }

      setText(finalText);
    } catch (error) {
      console.error(error);
      alert("Failed to process PDF");
    }

    setLoading(false);
  };

  const downloadTxt = () => {
    if (!text) return;

    const blob = new Blob([text], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "toolpintar-result.txt";

    a.click();
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          padding: "100px 20px",
          background:
            "linear-gradient(135deg,#b91c1c,#ef4444)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(48px,10vw,72px)",
            fontWeight: 800,
            marginBottom: "24px",
          }}
        >
          PDF to Word OCR
        </h1>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            fontSize: "clamp(18px,4vw,28px)",
            lineHeight: "1.8",
          }}
        >
          Extract editable text from PDF files using
          AI OCR technology.
        </p>
      </section>

      {/* TOOL */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "35px",
            padding: "50px",
            boxShadow:
              "0 20px 50px rgba(0,0,0,0.08)",
          }}
        >
          {/* UPLOAD */}
          <div
            onClick={() =>
              document
                .getElementById("upload-pdf")
                ?.click()
            }
            style={{
              border: "3px dashed #ef4444",
              borderRadius: "30px",
              padding: "80px 30px",
              textAlign: "center",
              background: "#fef2f2",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                fontSize: "70px",
                marginBottom: "20px",
              }}
            >
              📄
            </div>

            <h2
              style={{
                fontSize: "clamp(32px,6vw,42px)",
                color: "#b91c1c",
                marginBottom: "15px",
                fontWeight: 800,
              }}
            >
              Upload PDF File
            </h2>

            <p
              style={{
                color: "#555",
                fontSize: "clamp(16px,3vw,22px)",
              }}
            >
              Click to upload PDF
            </p>

            <input
              id="upload-pdf"
              type="file"
              accept=".pdf"
              onChange={handleUpload}
              style={{
                display: "none",
              }}
            />
          </div>

          {/* FILE */}
          {file && (
            <div
              style={{
                marginTop: "40px",
              }}
            >
              <div
                style={{
                  background: "#f8fafc",
                  padding: "25px",
                  borderRadius: "20px",
                  marginBottom: "25px",
                }}
              >
                <h3
                  style={{
                    fontSize: "28px",
                    marginBottom: "15px",
                    fontWeight: 800,
                  }}
                >
                  Selected File
                </h3>

                <p
                  style={{
                    fontSize: "20px",
                    color: "#444",
                  }}
                >
                  {file.name}
                </p>
              </div>

              <button
                onClick={extractText}
                disabled={loading}
                style={{
                  width: "100%",
                  padding: "24px",
                  borderRadius: "18px",
                  border: "none",
                  background:
                    "linear-gradient(135deg,#b91c1c,#ef4444)",
                  color: "white",
                  fontSize: "24px",
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                {loading
                  ? "Processing PDF..."
                  : "Convert PDF"}
              </button>
            </div>
          )}

          {/* RESULT */}
          {text && (
            <div
              style={{
                marginTop: "50px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                  flexWrap: "wrap",
                  gap: "20px",
                }}
              >
                <h2
                  style={{
                    fontSize: "38px",
                    fontWeight: 800,
                  }}
                >
                  OCR Result
                </h2>

                <button
                  onClick={downloadTxt}
                  style={{
                    padding: "16px 24px",
                    borderRadius: "14px",
                    border: "none",
                    background: "#16a34a",
                    color: "white",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontSize: "18px",
                  }}
                >
                  Download TXT
                </button>
              </div>

              <textarea
                value={text}
                readOnly
                style={{
                  width: "100%",
                  minHeight: "400px",
                  padding: "30px",
                  borderRadius: "25px",
                  border: "2px solid #ddd",
                  fontSize: "18px",
                  lineHeight: "1.8",
                  resize: "vertical",
                  outline: "none",
                  background: "#fafafa",
                }}
              />
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "50px 20px",
          color: "#777",
          fontSize: "16px",
        }}
      >
        © 2026 ToolPintar. All rights reserved.
      </footer>
    </main>
  );
}