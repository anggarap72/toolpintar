"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function MergePDFPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] =
    useState("");

  const handleMerge = async () => {
    if (files.length < 2) {
      alert("Upload at least 2 PDF files");
      return;
    }

    try {
      setLoading(true);

      const mergedPdf =
        await PDFDocument.create();

      for (const file of files) {
        const arrayBuffer =
          await file.arrayBuffer();

        const pdf =
          await PDFDocument.load(
            arrayBuffer
          );

        const copiedPages =
          await mergedPdf.copyPages(
            pdf,
            pdf.getPageIndices()
          );

        copiedPages.forEach((page) => {
          mergedPdf.addPage(page);
        });
      }

      const mergedPdfBytes =
        await mergedPdf.save();

      const blob = new Blob(
        [mergedPdfBytes as BlobPart],
        {
          type: "application/pdf",
        }
      );

      const url = URL.createObjectURL(blob);

      setDownloadUrl(url);
    } catch (error) {
      console.error(error);
      alert("Failed to merge PDF");
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
          Merge PDF
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "40px",
            fontSize: "18px",
          }}
        >
          Combine multiple PDF files into one
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
              border: "3px dashed #2563eb",
              borderRadius: "25px",
              padding: "70px 20px",
              display: "block",
              textAlign: "center",
              cursor: "pointer",
              background: "#eff6ff",
            }}
          >
            <input
              type="file"
              accept="application/pdf"
              multiple={true}
              hidden
              onChange={(e) => {
                const selectedFiles =
                  Array.from(
                    e.target.files || []
                  );

                setFiles(selectedFiles);

                setDownloadUrl("");
              }}
            />

            <h2
              style={{
                fontSize: "36px",
                fontWeight: 900,
                color: "#2563eb",
                marginBottom: "15px",
              }}
            >
              Upload PDF Files
            </h2>

            <p
              style={{
                color: "#666",
                fontSize: "18px",
              }}
            >
              Select multiple PDF files
            </p>
          </label>

          {/* File List */}
          {files.length > 0 && (
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
                Selected Files
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {files.map((file, index) => (
                  <p
                    key={index}
                    style={{
                      color: "#555",
                      wordBreak:
                        "break-word",
                    }}
                  >
                    {index + 1}. {file.name}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Merge Button */}
          <button
            onClick={handleMerge}
            disabled={
              files.length < 2 || loading
            }
            style={{
              width: "100%",
              marginTop: "30px",
              padding: "22px",
              borderRadius: "18px",
              border: "none",
              background:
                loading ||
                files.length < 2
                  ? "#9ca3af"
                  : "#2563eb",
              color: "white",
              fontWeight: 800,
              fontSize: "20px",
              cursor:
                loading ||
                files.length < 2
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            {loading
              ? "Merging PDFs..."
              : "Merge PDF"}
          </button>

          {/* Download */}
          {downloadUrl && (
            <div
              style={{
                marginTop: "35px",
                background: "#eff6ff",
                borderRadius: "25px",
                padding: "30px",
              }}
            >
              <h3
                style={{
                  fontSize: "32px",
                  fontWeight: 900,
                  color: "#2563eb",
                  marginBottom: "20px",
                }}
              >
                Merge Complete
              </h3>

              <a
                href={downloadUrl}
                download="merged.pdf"
              >
                <button
                  style={{
                    width: "100%",
                    padding: "20px",
                    borderRadius: "18px",
                    border: "none",
                    background: "#2563eb",
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