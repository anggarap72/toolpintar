"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function CompressPDFPage() {
  const [file, setFile] = useState<File | null>(null);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [originalSize, setOriginalSize] = useState("");
  const [compressedSize, setCompressedSize] =
    useState("");

  const handleCompress = async () => {
    if (!file) return;

    try {
      setLoading(true);

      const arrayBuffer = await file.arrayBuffer();

      const pdfDoc = await PDFDocument.load(
        arrayBuffer
      );

      const compressedPdfBytes =
        await pdfDoc.save({
          useObjectStreams: true,
        });

      const blob = new Blob(
        [compressedPdfBytes as BlobPart],
        {
          type: "application/pdf",
        }
      );

      const url = URL.createObjectURL(blob);

      setDownloadUrl(url);

      setOriginalSize(
        `${(file.size / 1024 / 1024).toFixed(
          2
        )} MB`
      );

      setCompressedSize(
        `${(blob.size / 1024 / 1024).toFixed(
          2
        )} MB`
      );
    } catch (error) {
      console.error(error);
      alert("Failed to compress PDF");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f5f7",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "48px",
            fontWeight: 900,
            marginBottom: "15px",
          }}
        >
          Compress PDF
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "40px",
            fontSize: "18px",
          }}
        >
          Reduce PDF file size online instantly
        </p>

        <div
          style={{
            background: "white",
            borderRadius: "30px",
            padding: "35px",
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.05)",
          }}
        >
          {/* Upload */}
          <label
            style={{
              border: "3px dashed #16a34a",
              borderRadius: "25px",
              padding: "70px 20px",
              display: "block",
              textAlign: "center",
              cursor: "pointer",
              background: "#f0fdf4",
            }}
          >
            <input
              type="file"
              accept="application/pdf"
              hidden
              onChange={(e) => {
                const selected =
                  e.target.files?.[0];

                if (selected) {
                  setFile(selected);
                  setDownloadUrl("");
                }
              }}
            />

            <h2
              style={{
                fontSize: "36px",
                fontWeight: 900,
                color: "#16a34a",
                marginBottom: "15px",
              }}
            >
              Upload PDF File
            </h2>

            <p
              style={{
                color: "#666",
                fontSize: "18px",
              }}
            >
              Click to upload PDF
            </p>
          </label>

          {/* File Info */}
          {file && (
            <div
              style={{
                marginTop: "30px",
                background: "#f9fafb",
                padding: "25px",
                borderRadius: "20px",
              }}
            >
              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  marginBottom: "15px",
                }}
              >
                Selected File
              </h3>

              <p
                style={{
                  color: "#555",
                  wordBreak: "break-word",
                }}
              >
                {file.name}
              </p>
            </div>
          )}

          {/* Compress Button */}
          <button
            onClick={handleCompress}
            disabled={!file || loading}
            style={{
              width: "100%",
              marginTop: "30px",
              padding: "22px",
              borderRadius: "18px",
              border: "none",
              background:
                loading || !file
                  ? "#9ca3af"
                  : "#16a34a",
              color: "white",
              fontWeight: 800,
              fontSize: "20px",
              cursor:
                loading || !file
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            {loading
              ? "Compressing PDF..."
              : "Compress PDF"}
          </button>

          {/* Result */}
          {downloadUrl && (
            <div
              style={{
                marginTop: "35px",
                background: "#f0fdf4",
                borderRadius: "25px",
                padding: "30px",
              }}
            >
              <h3
                style={{
                  fontSize: "32px",
                  fontWeight: 900,
                  color: "#16a34a",
                  marginBottom: "20px",
                }}
              >
                Compression Complete
              </h3>

              <p
                style={{
                  marginBottom: "10px",
                  fontSize: "18px",
                }}
              >
                <strong>Original Size:</strong>{" "}
                {originalSize}
              </p>

              <p
                style={{
                  marginBottom: "25px",
                  fontSize: "18px",
                }}
              >
                <strong>Compressed Size:</strong>{" "}
                {compressedSize}
              </p>

              <a
                href={downloadUrl}
                download="compressed.pdf"
              >
                <button
                  style={{
                    width: "100%",
                    padding: "20px",
                    borderRadius: "18px",
                    border: "none",
                    background: "#16a34a",
                    color: "white",
                    fontWeight: 800,
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                >
                  Download PDF
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}