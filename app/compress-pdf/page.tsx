"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function CompressPdfPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [originalSize, setOriginalSize] = useState("");
  const [compressedSize, setCompressedSize] =
    useState("");

  const handleUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const uploadedFile = e.target.files?.[0];

    if (!uploadedFile) return;

    setFile(uploadedFile);

    const sizeMB = (
      uploadedFile.size /
      1024 /
      1024
    ).toFixed(2);

    setOriginalSize(sizeMB + " MB");
    setCompressedSize("");
  };

  const compressPdf = async () => {
    if (!file) return;

    setLoading(true);

    const bytes = await file.arrayBuffer();

    const pdfDoc = await PDFDocument.load(bytes);

    const compressedPdfBytes = await pdfDoc.save({
      useObjectStreams: false,
    });

    const blob = new Blob([compressedPdfBytes], {
      type: "application/pdf",
    });

    const compressedMB = (
      blob.size /
      1024 /
      1024
    ).toFixed(2);

    setCompressedSize(compressedMB + " MB");

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "compressed-toolpintar.pdf";

    a.click();

    setLoading(false);
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
            "linear-gradient(135deg,#166534,#16a34a)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(48px,10vw,72px)",
            fontWeight: 800,
            marginBottom: "24px",
            letterSpacing: "-3px",
          }}
        >
          Compress PDF
        </h1>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            fontSize: "clamp(18px,4vw,28px)",
            lineHeight: "1.8",
          }}
        >
          Reduce PDF file size online instantly without
          losing quality.
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
          <label
            htmlFor="upload-pdf"
            style={{
              display: "block",
              border: "3px dashed #16a34a",
              borderRadius: "30px",
              padding: "80px 30px",
              textAlign: "center",
              background: "#f0fdf4",
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
                color: "#166534",
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
              Click or drag PDF here
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
          </label>

          {/* FILE INFO */}
          {file && (
            <div
              style={{
                marginTop: "50px",
              }}
            >
              <div
                style={{
                  background: "#f8fafc",
                  padding: "30px",
                  borderRadius: "24px",
                  marginBottom: "30px",
                }}
              >
                <h3
                  style={{
                    fontSize: "28px",
                    marginBottom: "20px",
                    fontWeight: 800,
                  }}
                >
                  File Information
                </h3>

                <div
                  style={{
                    display: "grid",
                    gap: "15px",
                    fontSize: "20px",
                    color: "#444",
                  }}
                >
                  <p>
                    <strong>File:</strong> {file.name}
                  </p>

                  <p>
                    <strong>Original Size:</strong>{" "}
                    {originalSize}
                  </p>

                  {compressedSize && (
                    <p>
                      <strong>Compressed Size:</strong>{" "}
                      {compressedSize}
                    </p>
                  )}
                </div>
              </div>

              {/* BUTTON */}
              <button
                onClick={compressPdf}
                disabled={loading}
                style={{
                  width: "100%",
                  padding: "24px",
                  borderRadius: "18px",
                  border: "none",
                  background:
                    "linear-gradient(135deg,#166534,#16a34a)",
                  color: "white",
                  fontSize: "24px",
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                {loading
                  ? "Compressing PDF..."
                  : "Compress PDF"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 20px 100px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(40px,7vw,56px)",
            marginBottom: "45px",
            fontWeight: 800,
          }}
        >
          Why Use ToolPintar?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(260px,1fr))",
            gap: "25px",
          }}
        >
          {[
            "Fast PDF compression",
            "Secure processing",
            "Works on mobile",
            "Unlimited free usage",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "35px",
                borderRadius: "28px",
                boxShadow:
                  "0 12px 30px rgba(0,0,0,0.05)",
                textAlign: "center",
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              {item}
            </div>
          ))}
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