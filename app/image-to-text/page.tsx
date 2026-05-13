"use client";

import { useState } from "react";
import Tesseract from "tesseract.js";

export default function ImageToTextPage() {
  const [image, setImage] = useState<string | null>(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setImage(imageUrl);
    setText("");
  };

  const extractText = async () => {
    if (!image) return;

    setLoading(true);
    setProgress(0);

    const result = await Tesseract.recognize(image, "eng", {
      logger: (m) => {
        if (m.status === "recognizing text") {
          setProgress(Math.floor((m.progress || 0) * 100));
        }
      },
    });

    setText(result.data.text);
    setLoading(false);
  };

  const copyText = async () => {
    if (!text) return;

    await navigator.clipboard.writeText(text);

    alert("Text copied!");
  };

  const downloadTxt = () => {
    if (!text) return;

    const blob = new Blob([text], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "ocr-result.txt";

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
          padding: "45px 20px",
          background:
            "linear-gradient(135deg,#4338ca,#7c3aed)",
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
          Image to Text OCR
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "16px",
            lineHeight: "1.8",
          }}
        >
          Convert images into editable text instantly using
          AI OCR technology.
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
          {/* UPLOAD BOX */}
          <label
            htmlFor="upload-image"
            style={{
              display: "block",
              border: "2px dashed #4f46e5",
              borderRadius: "24px",
              padding: "50px 20px",
              textAlign: "center",
              background: "#eef2ff",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                fontSize: "48px",
                marginBottom: "15px",
              }}
            >
              📤
            </div>

            <h2
              style={{
                fontSize: "28px",
                color: "#4f46e5",
                marginBottom: "10px",
                fontWeight: 800,
              }}
            >
              Upload Image
            </h2>

            <p
              style={{
                color: "#555",
                fontSize: "16px",
              }}
            >
              Click or drag image here
            </p>

            <input
              id="upload-image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{
                display: "none",
              }}
            />
          </label>

          {/* IMAGE PREVIEW */}
          {image && (
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

              <img
                src={image}
                alt="Preview"
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  maxHeight: "500px",
                  objectFit: "contain",
                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.08)",
                }}
              />

              {/* BUTTON */}
              <button
                onClick={extractText}
                disabled={loading}
                style={{
                  marginTop: "25px",
                  width: "100%",
                  padding: "16px",
                  borderRadius: "16px",
                  border: "none",
                  background:
                    "linear-gradient(135deg,#4f46e5,#7c3aed)",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                {loading
                  ? `Scanning ${progress}%`
                  : "Extract Text"}
              </button>
            </div>
          )}

          {/* LOADING BAR */}
          {loading && (
            <div
              style={{
                marginTop: "25px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "14px",
                  background: "#ddd",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${progress}%`,
                    height: "100%",
                    background:
                      "linear-gradient(135deg,#4f46e5,#7c3aed)",
                    transition: "0.2s",
                  }}
                />
              </div>
            </div>
          )}

          {/* RESULT */}
          {text && (
            <div
              style={{
                marginTop: "45px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
                <h2
                  style={{
                    fontSize: "26px",
                    fontWeight: 800,
                  }}
                >
                  OCR Result
                </h2>

                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                  }}
                >
                  <button
                    onClick={copyText}
                    style={{
                      padding: "14px 20px",
                      borderRadius: "12px",
                      border: "none",
                      background: "#16a34a",
                      color: "white",
                      fontWeight: 700,
                      cursor: "pointer",
                      fontSize: "15px",
                    }}
                  >
                    Copy Text
                  </button>

                  <button
                    onClick={downloadTxt}
                    style={{
                      padding: "14px 20px",
                      borderRadius: "12px",
                      border: "none",
                      background: "#ea580c",
                      color: "white",
                      fontWeight: 700,
                      cursor: "pointer",
                      fontSize: "15px",
                    }}
                  >
                    Download TXT
                  </button>
                </div>
              </div>

              <textarea
                value={text}
                readOnly
                style={{
                  width: "100%",
                  minHeight: "250px",
                  padding: "20px",
                  borderRadius: "18px",
                  border: "2px solid #ddd",
                  fontSize: "16px",
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

      {/* FAQ */}
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
          Frequently Asked Questions
        </h2>

        <div
          style={{
            display: "grid",
            gap: "18px",
          }}
        >
          {[
            {
              q: "Is this OCR tool free?",
              a: "Yes, ToolPintar OCR is completely free.",
            },
            {
              q: "Can I scan screenshots?",
              a: "Yes, screenshots and photos are supported.",
            },
            {
              q: "Does it work on mobile?",
              a: "Yes, the OCR tool works on desktop and mobile devices.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "20px",
                boxShadow:
                  "0 8px 20px rgba(0,0,0,0.05)",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  marginBottom: "10px",
                  fontWeight: 700,
                }}
              >
                {faq.q}
              </h3>

              <p
                style={{
                  color: "#555",
                  lineHeight: "1.8",
                  fontSize: "15px",
                  margin: 0,
                }}
              >
                {faq.a}
              </p>
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