"use client";

import Link from "next/link";

export default function HomePage() {
  const tools = [
    {
      title: "Image to Text OCR",
      description:
        "Convert image into editable text instantly.",
      color: "#4f46e5",
      bg: "#ede9fe",
      icon: "📝",
      link: "/ocr",
    },

    {
      title: "Compress PDF",
      description:
        "Reduce PDF file size without losing quality.",
      color: "#16a34a",
      bg: "#dcfce7",
      icon: "🗜️",
      link: "/compress-pdf",
    },

    {
      title: "JPG to PDF",
      description:
        "Convert JPG images into PDF instantly.",
      color: "#0f172a",
      bg: "#e2e8f0",
      icon: "🖼️",
      link: "/jpg-to-pdf",
    },

    {
      title: "AI PPT Generator",
      description:
        "Generate presentation slides using AI.",
      color: "#ea580c",
      bg: "#ffedd5",
      icon: "📊",
      link: "/ai-ppt-generator",
    },
  ];

  const faqs = [
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
  ];

  return (
    <main
      style={{
        background: "#f5f5f7",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 999,
          background: "white",
          borderBottom: "1px solid #eee",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              fontWeight: 900,
              color: "#4f46e5",
            }}
          >
            ToolPintar
          </h1>

          <div
            style={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <a href="#tools">Tools</a>
            <a href="#faq">FAQ</a>

            <Link href="/ocr">
              <button
                style={{
                  padding: "14px 24px",
                  borderRadius: "14px",
                  border: "none",
                  background: "#4f46e5",
                  color: "white",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Try OCR Tool
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg,#4338ca,#7c3aed)",
          color: "white",
          textAlign: "center",
          padding: "120px 20px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            top: "-80px",
            right: "-80px",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "260px",
            height: "260px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            bottom: "-100px",
            left: "-100px",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(60px,10vw,110px)",
              fontWeight: 900,
              marginBottom: "30px",
            }}
          >
            ToolPintar
          </h1>

          <p
            style={{
              fontSize: "clamp(20px,4vw,34px)",
              lineHeight: "1.7",
              opacity: 0.95,
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            Free online tools for PDF, OCR, AI, and
            productivity. Fast, secure, and easy to use.
          </p>

          <div
            style={{
              marginTop: "50px",
            }}
          >
            <Link href="/ocr">
              <button
                style={{
                  padding: "22px 42px",
                  borderRadius: "20px",
                  border: "none",
                  background: "white",
                  color: "#4f46e5",
                  fontWeight: 800,
                  fontSize: "20px",
                  cursor: "pointer",
                  boxShadow:
                    "0 20px 50px rgba(0,0,0,0.2)",
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
        id="tools"
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          padding: "100px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(50px,8vw,80px)",
            fontWeight: 900,
            marginBottom: "70px",
          }}
        >
          Popular Tools
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "35px",
          }}
        >
          {tools.map((tool, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "35px",
                padding: "35px",
                minHeight: "420px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow:
                  "0 15px 40px rgba(0,0,0,0.06)",
              }}
            >
              <div>
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "28px",
                    background: tool.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "40px",
                    marginBottom: "30px",
                  }}
                >
                  {tool.icon}
                </div>

                <h3
                  style={{
                    fontSize: "clamp(34px,5vw,48px)",
                    lineHeight: "1.2",
                    fontWeight: 900,
                    marginBottom: "25px",
                    minHeight: "120px",
                  }}
                >
                  {tool.title}
                </h3>

                <p
                  style={{
                    color: "#555",
                    fontSize: "clamp(18px,3vw,24px)",
                    lineHeight: "1.8",
                    minHeight: "110px",
                  }}
                >
                  {tool.description}
                </p>
              </div>

              <Link href={tool.link}>
                <button
                  style={{
                    marginTop: "30px",
                    width: "100%",
                    padding: "20px",
                    borderRadius: "18px",
                    border: "none",
                    background: tool.bg,
                    color: tool.color,
                    fontWeight: 800,
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                >
                  Use Tool →
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px 120px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(50px,8vw,80px)",
            fontWeight: 900,
            marginBottom: "60px",
          }}
        >
          Frequently Asked Questions
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "35px",
                borderRadius: "30px",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.04)",
              }}
            >
              <h3
                style={{
                  fontSize: "32px",
                  fontWeight: 800,
                  marginBottom: "15px",
                }}
              >
                {faq.q}
              </h3>

              <p
                style={{
                  color: "#666",
                  fontSize: "20px",
                  lineHeight: "1.8",
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
          padding: "40px 20px",
          color: "#777",
          fontSize: "18px",
        }}
      >
        © 2026 ToolPintar. All rights reserved.
      </footer>
    </main>
  );
}