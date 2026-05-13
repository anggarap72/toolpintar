"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const tools = [
    {
      title: "Image to Text OCR",
      desc: "Convert image into editable text instantly.",
      color: "#4f46e5",
      buttonBg: "#ede9fe",
      buttonText: "#4f46e5",
      link: "/image-to-text",
      icon: "📝",
    },
    {
      title: "PDF to Word",
      desc: "Convert PDF files into editable Word documents.",
      color: "#ef4444",
      buttonBg: "#fee2e2",
      buttonText: "#ef4444",
      link: "/pdf-to-word",
      icon: "📄",
    },
    {
      title: "Compress PDF",
      desc: "Reduce PDF file size without losing quality.",
      color: "#16a34a",
      buttonBg: "#dcfce7",
      buttonText: "#16a34a",
      link: "/compress-pdf",
      icon: "🗜️",
    },
    {
      title: "JPG to PDF",
      desc: "Convert JPG images into PDF instantly.",
      color: "#0f172a",
      buttonBg: "#e2e8f0",
      buttonText: "#0f172a",
      link: "/jpg-to-pdf",
      icon: "🖼️",
    },
    {
      title: "AI PPT Generator",
      desc: "Generate presentation slides using AI.",
      color: "#f97316",
      buttonBg: "#ffedd5",
      buttonText: "#f97316",
      link: "#",
      icon: "📊",
    },
  ];

  const filteredTools = tools.filter((tool) =>
    tool.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backdropFilter: "blur(14px)",
          background: "rgba(255,255,255,0.85)",
          borderBottom: "1px solid #ececec",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "20px 30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px,5vw,34px)",
              fontWeight: 800,
              color: "#4f46e5",
              margin: 0,
            }}
          >
            ToolPintar
          </h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              color: "#444",
              fontWeight: 600,
              fontSize: "15px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <span>Tools</span>
            <span>Features</span>
            <span>FAQ</span>
            <span>About</span>
          </div>

          <Link href="/image-to-text">
            <button
              style={{
                padding: "14px 24px",
                borderRadius: "14px",
                border: "none",
                background:
                  "linear-gradient(135deg,#4f46e5,#7c3aed)",
                color: "white",
                fontWeight: 700,
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              Try OCR Tool
            </button>
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "120px 20px",
          textAlign: "center",
          background:
            "linear-gradient(135deg,#4338ca 0%,#7c3aed 100%)",
          color: "white",
        }}
      >
        {/* DECOR */}
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            left: "-100px",
            bottom: "-150px",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            right: "100px",
            top: "40px",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <h1
            style={{
              fontSize: "clamp(48px,10vw,92px)",
              fontWeight: 800,
              marginBottom: "24px",
              letterSpacing: "-4px",
              lineHeight: "1.1",
            }}
          >
            ToolPintar
          </h1>

          <p
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              fontSize: "clamp(18px,4vw,30px)",
              lineHeight: "1.7",
              opacity: 0.96,
              padding: "0 10px",
            }}
          >
            Free online tools for PDF, OCR, AI, and
            productivity. Fast, secure, and easy to use.
          </p>

          {/* SEARCH */}
          <div
            style={{
              marginTop: "45px",
              display: "flex",
              justifyContent: "center",
              padding: "0 10px",
            }}
          >
            <input
              type="text"
              placeholder="Search tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                maxWidth: "560px",
                padding: "20px 24px",
                borderRadius: "18px",
                border: "none",
                outline: "none",
                fontSize: "16px",
                boxShadow:
                  "0 15px 35px rgba(0,0,0,0.15)",
              }}
            />
          </div>

          <div
            style={{
              marginTop: "35px",
            }}
          >
            <Link href="/image-to-text">
              <button
                style={{
                  padding: "18px 34px",
                  borderRadius: "18px",
                  border: "none",
                  background: "white",
                  color: "#4f46e5",
                  fontWeight: 800,
                  fontSize: "18px",
                  cursor: "pointer",
                  boxShadow:
                    "0 15px 35px rgba(0,0,0,0.15)",
                }}
              >
                Try OCR Tool →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section
        style={{
          maxWidth: "1450px",
          margin: "0 auto",
          padding: "90px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(42px,8vw,72px)",
            marginBottom: "70px",
            color: "#111",
            fontWeight: 800,
            letterSpacing: "-3px",
            lineHeight: "1.1",
          }}
        >
          Popular Tools
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >
          {filteredTools.map((tool, index) => (
            <Link
              key={index}
              href={tool.link}
              style={{
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.82)",
                  backdropFilter: "blur(14px)",
                  borderRadius: "34px",
                  padding: "35px",
                  minHeight: "520px",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow:
                    "0 15px 35px rgba(0,0,0,0.06)",
                  transition: "all 0.25s ease",
                  border:
                    "1px solid rgba(255,255,255,0.6)",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 25px 50px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 35px rgba(0,0,0,0.06)";
                }}
              >
                {/* ICON */}
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "28px",
                    background: tool.color,
                    marginBottom: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "40px",
                  }}
                >
                  {tool.icon}
                </div>

                {/* TITLE */}
                <h3
                  style={{
                    fontSize: "clamp(28px,5vw,38px)",
                    lineHeight: "1.2",
                    color: "#111",
                    fontWeight: 800,
                    marginBottom: "24px",
                    letterSpacing: "-1px",
                    minHeight: "100px",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  {tool.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  style={{
                    color: "#5c5c5c",
                    lineHeight: "1.8",
                    fontSize: "clamp(16px,3vw,22px)",
                    minHeight: "110px",
                    margin: 0,
                  }}
                >
                  {tool.desc}
                </p>

                {/* BUTTON */}
                <div
                  style={{
                    marginTop: "auto",
                  }}
                >
                  <button
                    style={{
                      width: "100%",
                      padding: "18px",
                      borderRadius: "18px",
                      border: "none",
                      background: tool.buttonBg,
                      color: tool.buttonText,
                      fontWeight: 800,
                      fontSize: "18px",
                      cursor: "pointer",
                    }}
                  >
                    Use Tool →
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "20px 20px 110px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(38px,7vw,58px)",
            marginBottom: "50px",
            fontWeight: 800,
            letterSpacing: "-2px",
            lineHeight: "1.1",
          }}
        >
          Frequently Asked Questions
        </h2>

        <div
          style={{
            display: "grid",
            gap: "24px",
          }}
        >
          {[
            {
              q: "Is ToolPintar free?",
              a: "Yes, all tools are free to use online.",
            },
            {
              q: "Are uploaded files secure?",
              a: "Yes, your files are processed securely and privately.",
            },
            {
              q: "Can I use ToolPintar on mobile?",
              a: "Yes, ToolPintar works perfectly on desktop and mobile devices.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "32px",
                borderRadius: "28px",
                boxShadow:
                  "0 12px 30px rgba(0,0,0,0.05)",
              }}
            >
              <h3
                style={{
                  marginBottom: "14px",
                  fontSize: "clamp(24px,5vw,30px)",
                  color: "#111",
                  fontWeight: 700,
                  lineHeight: "1.3",
                }}
              >
                {faq.q}
              </h3>

              <p
                style={{
                  color: "#555",
                  lineHeight: "1.8",
                  fontSize: "clamp(16px,3vw,20px)",
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