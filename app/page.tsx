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
      link: "/image-to-text",
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

    {
      title: "PDF Converter",
      description:
        "Convert PDF ke JPG / PNG HD dengan fitur premium.",
      color: "#2563eb",
      bg: "#dbeafe",
      icon: "📄",
      link: "/pdf-to-jpg",
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
    <main className="min-h-screen bg-[#f5f7fb] text-black">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">

        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">

          <div>

            <h1 className="text-2xl font-bold text-indigo-600">
              ToolPintar
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Premium Productivity Tools
            </p>

          </div>

          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">

            <a
              href="#tools"
              className="hover:text-black transition"
            >
              Tools
            </a>

            <a
              href="#faq"
              className="hover:text-black transition"
            >
              FAQ
            </a>

            <Link href="/pdf-to-jpg">

              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-semibold transition">
                Open PDF Tool
              </button>

            </Link>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-violet-600 to-purple-600" />

        <div className="absolute top-[-120px] right-[-120px] w-[280px] h-[280px] rounded-full bg-white/10" />

        <div className="absolute bottom-[-120px] left-[-120px] w-[260px] h-[260px] rounded-full bg-white/10" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 py-24 md:py-32 text-center text-white">

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">

            Modern Online Tools
            <br />
            For Everyday Productivity

          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-xl text-white/90 leading-relaxed">

            Fast, secure, and easy-to-use tools for PDF,
            OCR, AI, and productivity — all in one place.

          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link href="/pdf-to-jpg">

              <button className="bg-white text-indigo-700 hover:bg-gray-100 px-6 py-3 rounded-2xl font-bold shadow-lg transition">
                Try PDF Converter
              </button>

            </Link>

            <Link href="/ocr">

              <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-2xl font-bold transition">
                OCR Tool
              </button>

            </Link>

          </div>

        </div>

      </section>

      {/* TOOLS */}
      <section
        id="tools"
        className="max-w-6xl mx-auto px-5 py-16"
      >

        <div className="flex items-center justify-between mb-8">

          <div>

            <h2 className="text-3xl font-bold mb-2">
              Popular Tools
            </h2>

            <p className="text-gray-500">
              Fast and modern tools for daily work.
            </p>

          </div>

          <div className="text-sm text-gray-500">
            {tools.length} Tools
          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {tools.map((tool, index) => (

            <Link
              href={tool.link}
              key={index}
            >

              <div className="group bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full">

                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5"
                  style={{
                    background: tool.bg,
                  }}
                >
                  {tool.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 leading-snug">

                  {tool.title}

                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">

                  {tool.description}

                </p>

                <div
                  className="mt-6 font-semibold text-sm"
                  style={{
                    color: tool.color,
                  }}
                >
                  Open Tool →
                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="max-w-4xl mx-auto px-5 pb-20"
      >

        <div className="text-center mb-10">

          <h2 className="text-3xl font-bold mb-3">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-500">
            Everything you need to know.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
            >

              <h3 className="text-lg font-bold mb-3">

                {faq.q}

              </h3>

              <p className="text-gray-600 leading-relaxed">

                {faq.a}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white">

        <div className="max-w-6xl mx-auto px-5 py-6 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-3">

          <p>
            © 2026 ToolPintar. All rights reserved.
          </p>

          <div className="flex gap-5">

            <a
              href="#"
              className="hover:text-black transition"
            >
              Privacy
            </a>

            <a
              href="#"
              className="hover:text-black transition"
            >
              Terms
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}