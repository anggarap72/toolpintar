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
          padding: "100px 20px",
          background:
            "linear-gradient(135deg,#0f172a,#1e293b)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 800,
            marginBottom: "25px",
            letterSpacing: "-3px",
          }}
        >
          JPG to PDF Converter
        </h1>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            fontSize: "28px",
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
          maxWidth: "1300px",
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
            htmlFor="upload-images"
            style={{
              display: "block",
              border: "3px dashed #0f172a",
              borderRadius: "30px",
              padding: "80px 30px",
              textAlign: "center",
              background: "#f8fafc",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                fontSize: "70px",
                marginBottom: "20px",
              }}
            >
              🖼️
            </div>

            <h2
              style={{
                fontSize: "38px",
                color: "#0f172a",
                marginBottom: "15px",
                fontWeight: 800,
              }}
            >
              Upload JPG Images
            </h2>

            <p
              style={{
                color: "#555",
                fontSize: "22px",
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
                marginTop: "60px",
              }}
            >
              <h2
                style={{
                  fontSize: "40px",
                  marginBottom: "30px",
                  fontWeight: 800,
                }}
              >
                Image Preview
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(260px,1fr))",
                  gap: "25px",
                }}
              >
                {images.map((img, index) => (
                  <div
                    key={index}
                    style={{
                      background: "#fff",
                      borderRadius: "25px",
                      overflow: "hidden",
                      boxShadow:
                        "0 10px 30px rgba(0,0,0,0.08)",
                    }}
                  >
                    <img
                      src={img}
                      alt={`Preview ${index}`}
                      style={{
                        width: "100%",
                        height: "280px",
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
                  marginTop: "40px",
                  width: "100%",
                  padding: "24px",
                  borderRadius: "18px",
                  border: "none",
                  background:
                    "linear-gradient(135deg,#0f172a,#334155)",
                  color: "white",
                  fontSize: "24px",
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
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 20px 100px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "54px",
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
            "Fast PDF conversion",
            "Unlimited free usage",
            "Secure processing",
            "Works on mobile",
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
                fontSize: "24px",
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
          fontSize: "18px",
        }}
      >
        © 2026 ToolPintar. All rights reserved.
      </footer>
    </main>
  );
}