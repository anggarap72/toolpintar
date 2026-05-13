"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";

export default function JpgToPdfPage() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;

    if (!files) return;

    const imageUrls = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    setImages(imageUrls);
  };

  const generatePdf = async () => {
    if (images.length === 0) return;

    setLoading(true);

    const pdf = new jsPDF();

    for (let i = 0; i < images.length; i++) {
      const img = new Image();

      img.src = images[i];

      await new Promise<void>((resolve) => {
        img.onload = () => {
          const width = pdf.internal.pageSize.getWidth();

          const height =
            (img.height * width) / img.width;

          if (i > 0) {
            pdf.addPage();
          }

          pdf.addImage(
            img,
            "JPEG",
            0,
            0,
            width,
            height
          );

          resolve();
        };
      });
    }

    pdf.save("toolpintar-converted.pdf");

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
          padding: "45px 20px",
          background:
            "linear-gradient(135deg,#0f172a,#1e293b)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: 800,
            marginBottom: "12px",
            letterSpacing: "-2px",
          }}
        >
          JPG to PDF Converter
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "16px",
            lineHeight: "1.8",
          }}
        >
          Convert JPG images into PDF documents instantly
          online for free.
        </p>
      </section>

      {/* TOOL */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "28px",
            padding: "35px",
            boxShadow:
              "0 20px 50px rgba(0,0,0,0.06)",
          }}
        >
          {/* UPLOAD */}
          <label
            htmlFor="upload-images"
            style={{
              display: "block",
              border: "2px dashed #0f172a",
              borderRadius: "24px",
              padding: "50px 20px",
              textAlign: "center",
              background: "#f8fafc",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                fontSize: "48px",
                marginBottom: "15px",
              }}
            >
              🖼️
            </div>

            <h2
              style={{
                fontSize: "28px",
                color: "#0f172a",
                marginBottom: "10px",
                fontWeight: 800,
              }}
            >
              Upload JPG Images
            </h2>

            <p
              style={{
                color: "#555",
                fontSize: "16px",
              }}
            >
              Click or drag images here
            </p>

            <input
              id="upload-images"
              type="file"
              accept="image/*"
              multiple
              onChange={handleUpload}
              style={{
                display: "none",
              }}
            />
          </label>

          {/* PREVIEW */}
          {images.length > 0 && (
            <div
              style={{
                marginTop: "35px",
              }}
            >
              <h2
                style={{
                  fontSize: "26px",
                  marginBottom: "20px",
                  fontWeight: 800,
                }}
              >
                Image Preview
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(220px,1fr))",
                  gap: "18px",
                }}
              >
                {images.map((img, index) => (
                  <div
                    key={index}
                    style={{
                      background: "#fff",
                      borderRadius: "18px",
                      overflow: "hidden",
                      boxShadow:
                        "0 8px 20px rgba(0,0,0,0.06)",
                    }}
                  >
                    <img
                      src={img}
                      alt={`Preview ${index}`}
                      style={{
                        width: "100%",
                        height: "220px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <button
                onClick={generatePdf}
                disabled={loading}
                style={{
                  marginTop: "30px",
                  width: "100%",
                  padding: "16px",
                  borderRadius: "16px",
                  border: "none",
                  background:
                    "linear-gradient(135deg,#0f172a,#334155)",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                {loading
                  ? "Generating PDF..."
                  : "Convert to PDF"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 20px 70px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "34px",
            marginBottom: "30px",
            fontWeight: 800,
          }}
        >
          Why Use ToolPintar?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "18px",
          }}
        >
          {[
            "Fast PDF conversion",
            "Unlimited free usage",
            "Secure processing",
            "Works on mobile",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "24px",
                borderRadius: "20px",
                boxShadow:
                  "0 8px 20px rgba(0,0,0,0.05)",
                textAlign: "center",
                fontSize: "18px",
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
          padding: "30px 20px",
          color: "#777",
          fontSize: "14px",
        }}
      >
        © 2026 ToolPintar. All rights reserved.
      </footer>
    </main>
  );
}