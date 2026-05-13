"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function SplitPDFPage() {
  const [file, setFile] = useState<File | null>(
    null
  );

  const [loading, setLoading] = useState(false);

  const [downloadUrl, setDownloadUrl] =
    useState("");

  const [startPage, setStartPage] =
    useState("");

  const [endPage, setEndPage] =
    useState("");

  const handleSplit = async () => {
    if (!file || !startPage || !endPage) {
      alert(
        "Please upload PDF and enter page range"
      );
      return;
    }

    try {
      setLoading(true);

      const arrayBuffer =
        await file.arrayBuffer();

      const pdf =
        await PDFDocument.load(
          arrayBuffer
        );

      const start =
        parseInt(startPage) - 1;

      const end =
        parseInt(endPage) - 1;

      if (
        start < 0 ||
        end >= pdf.getPageCount() ||
        start > end
      ) {
        alert("Invalid page range");
        setLoading(false);
        return;
      }

      const newPdf =
        await PDFDocument.create();

      const pageIndexes = [];

      for (
        let i = start;
        i <= end;
        i++
      ) {
        pageIndexes.push(i);
      }

      const copiedPages =
        await newPdf.copyPages(
          pdf,
          pageIndexes
        );

      copiedPages.forEach((page) => {
        newPdf.addPage(page);
      });

      const pdfBytes =
        await newPdf.save();

      const blob = new Blob(
        [pdfBytes as BlobPart],
        {
          type: "application/pdf",
        }
      );

      const url = URL.createObjectURL(blob);

      setDownloadUrl(url);
    } catch (error) {
      console.error(error);
      alert("Failed to split PDF");
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
          Split PDF
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "40px",
            fontSize: "18px",
          }}
        >
          Extract page ranges from PDF
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
              border: "3px dashed #9333ea",
              borderRadius: "25px",
              padding: "70px 20px",
              display: "block",
              textAlign: "center",
              cursor: "pointer",
              background: "#faf5ff",
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
                color: "#9333ea",
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
              Select PDF file
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

          {/* Range Input */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "1fr 1fr",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <input
              type="number"
              min="1"
              placeholder="Start page"
              value={startPage}
              onChange={(e) =>
                setStartPage(e.target.value)
              }
              style={{
                padding: "20px",
                borderRadius: "18px",
                border: "2px solid #ddd",
                fontSize: "18px",
                outline: "none",
              }}
            />

            <input
              type="number"
              min="1"
              placeholder="End page"
              value={endPage}
              onChange={(e) =>
                setEndPage(e.target.value)
              }
              style={{
                padding: "20px",
                borderRadius: "18px",
                border: "2px solid #ddd",
                fontSize: "18px",
                outline: "none",
              }}
            />
          </div>

          {/* Split Button */}
          <button
            onClick={handleSplit}
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
                  : "#9333ea",
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
              ? "Splitting PDF..."
              : "Split PDF"}
          </button>

          {/* Download */}
          {downloadUrl && (
            <div
              style={{
                marginTop: "35px",
                background: "#faf5ff",
                borderRadius: "25px",
                padding: "30px",
              }}
            >
              <h3
                style={{
                  fontSize: "32px",
                  fontWeight: 900,
                  color: "#9333ea",
                  marginBottom: "20px",
                }}
              >
                Split Complete
              </h3>

              <a
                href={downloadUrl}
                download="split.pdf"
              >
                <button
                  style={{
                    width: "100%",
                    padding: "20px",
                    borderRadius: "18px",
                    border: "none",
                    background: "#9333ea",
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