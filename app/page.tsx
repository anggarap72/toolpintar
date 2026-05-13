"use client";

import Link from "next/link";
import {
  Sparkles,
  FileText,
  ImageIcon,
  Wand2,
  Type,
  LayoutGrid,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] overflow-hidden">
      {/* ========================= */}
      {/* NAVBAR */}
      {/* ========================= */}

      <header className="w-full bg-white border-b border-zinc-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
              <Sparkles className="text-white w-6 h-6" />
            </div>

            <div>
              <h1 className="text-3xl font-black tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ToolPintar
              </h1>

              <p className="text-sm text-zinc-500">
                Premium Productivity Tools
              </p>
            </div>
          </div>

          {/* MENU */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-zinc-600">
            <a href="#tools">Tools</a>
            <a href="#faq">FAQ</a>
          </nav>

          {/* BUTTON */}
          <Link
            href="/pdf-to-jpg"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
          >
            Open PDF Tool
          </Link>
        </div>
      </header>

      {/* ========================= */}
      {/* HERO PREMIUM */}
      {/* ========================= */}

      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg,#312e81 0%,#6d28d9 45%,#9333ea 100%)",
        }}
      >

        {/* GLOW */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "-120px",
            width: "320px",
            height: "320px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.12)",
            filter: "blur(40px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "-100px",
            top: "-60px",
            width: "260px",
            height: "260px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.10)",
            filter: "blur(30px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-140px",
            right: "20%",
            width: "320px",
            height: "320px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.08)",
            filter: "blur(50px)",
          }}
        />

        {/* CONTENT */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "120px 20px 110px",
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            color: "white",
          }}
        >

          {/* BADGE */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 22px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.12)",
              marginBottom: "35px",
              fontWeight: 700,
              fontSize: "15px",
            }}
          >
            ✨ Premium Productivity Platform
          </div>

          {/* TITLE */}
          <h1
            style={{
              fontSize: "72px",
              lineHeight: "1.05",
              fontWeight: 900,
              letterSpacing: "-3px",
              marginBottom: "30px",
            }}
          >
            Modern Online Tools
            <br />
            For Everyday Productivity
          </h1>

          {/* DESC */}
          <p
            style={{
              maxWidth: "850px",
              margin: "0 auto",
              fontSize: "24px",
              lineHeight: "1.8",
              color: "rgba(255,255,255,0.88)",
              marginBottom: "45px",
            }}
          >
            Fast, secure, and easy-to-use tools for PDF,
            OCR, AI, and productivity — all in one place.
          </p>

          {/* BUTTON */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#tools"
              style={{
                padding: "18px 34px",
                borderRadius: "18px",
                background: "white",
                color: "#5b21b6",
                fontWeight: 800,
                fontSize: "18px",
                textDecoration: "none",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.18)",
              }}
            >
              Explore Tools
            </a>

            <a
              href="/image-to-text"
              style={{
                padding: "18px 34px",
                borderRadius: "18px",
                background: "rgba(255,255,255,0.10)",
                color: "white",
                fontWeight: 800,
                fontSize: "18px",
                textDecoration: "none",
                border:
                  "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
              }}
            >
              OCR Tool
            </a>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* TOOLS */}
      {/* ========================= */}

      <section
        id="tools"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-5xl font-black text-zinc-900 mb-2">
              Popular Tools
            </h2>

            <p className="text-zinc-500 text-lg">
              Fast and modern tools for daily work.
            </p>
          </div>

          <div className="text-zinc-400 font-semibold">
            5 Tools
          </div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {/* OCR */}
          <Link
            href="/image-to-text"
            className="bg-white rounded-3xl border border-zinc-200 p-6 hover:shadow-xl transition"
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-5">
              <Wand2 className="w-7 h-7 text-purple-600" />
            </div>

            <h3 className="text-3xl font-black text-zinc-900 mb-3">
              Image to Text OCR
            </h3>

            <p className="text-zinc-500 text-lg leading-relaxed mb-6">
              Convert image into editable text instantly.
            </p>

            <div className="text-purple-600 font-bold">
              Open Tool →
            </div>
          </Link>

          {/* COMPRESS PDF */}
          <Link
            href="/compress-pdf"
            className="bg-white rounded-3xl border border-zinc-200 p-6 hover:shadow-xl transition"
          >
            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-5">
              <FileText className="w-7 h-7 text-green-600" />
            </div>

            <h3 className="text-3xl font-black text-zinc-900 mb-3">
              Compress PDF
            </h3>

            <p className="text-zinc-500 text-lg leading-relaxed mb-6">
              Reduce PDF file size without losing quality.
            </p>

            <div className="text-green-600 font-bold">
              Open Tool →
            </div>
          </Link>

          {/* JPG TO PDF */}
          <Link
            href="/jpg-to-pdf"
            className="bg-white rounded-3xl border border-zinc-200 p-6 hover:shadow-xl transition"
          >
            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-5">
              <ImageIcon className="w-7 h-7 text-orange-600" />
            </div>

            <h3 className="text-3xl font-black text-zinc-900 mb-3">
              JPG to PDF
            </h3>

            <p className="text-zinc-500 text-lg leading-relaxed mb-6">
              Convert JPG images into PDF instantly.
            </p>

            <div className="text-zinc-900 font-bold">
              Open Tool →
            </div>
          </Link>

          {/* AI PPT */}
          <Link
            href="/ai-ppt-generator"
            className="bg-white rounded-3xl border border-zinc-200 p-6 hover:shadow-xl transition"
          >
            <div className="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center mb-5">
              <LayoutGrid className="w-7 h-7 text-yellow-600" />
            </div>

            <h3 className="text-3xl font-black text-zinc-900 mb-3">
              AI PPT Generator
            </h3>

            <p className="text-zinc-500 text-lg leading-relaxed mb-6">
              Generate presentation slides using AI.
            </p>

            <div className="text-orange-600 font-bold">
              Open Tool →
            </div>
          </Link>

          {/* PDF CONVERTER */}
          <Link
            href="/pdf-to-jpg"
            className="bg-white rounded-3xl border border-zinc-200 p-6 hover:shadow-xl transition"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-5">
              <Type className="w-7 h-7 text-blue-600" />
            </div>

            <h3 className="text-3xl font-black text-zinc-900 mb-3">
              PDF Converter
            </h3>

            <p className="text-zinc-500 text-lg leading-relaxed mb-6">
              Convert PDF ke JPG / PNG HD dengan fitur premium.
            </p>

            <div className="text-blue-600 font-bold">
              Open Tool →
            </div>
          </Link>
        </div>
      </section>

      {/* ========================= */}
      {/* FAQ */}
      {/* ========================= */}

      <section
        id="faq"
        className="max-w-4xl mx-auto px-6 pb-24"
      >
        <div className="text-center mb-10">
          <h2 className="text-5xl font-black text-zinc-900 mb-3">
            Frequently Asked Questions
          </h2>

          <p className="text-zinc-500 text-lg">
            Everything you need to know.
          </p>
        </div>

        <div className="space-y-5">

          <div className="bg-white border border-zinc-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-3">
              Is ToolPintar free?
            </h3>

            <p className="text-zinc-500 text-lg">
              Yes, all tools are free to use online.
            </p>
          </div>

          <div className="bg-white border border-zinc-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-3">
              Are uploaded files secure?
            </h3>

            <p className="text-zinc-500 text-lg">
              Yes, your files are processed securely and privately.
            </p>
          </div>

          <div className="bg-white border border-zinc-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-3">
              Can I use ToolPintar on mobile?
            </h3>

            <p className="text-zinc-500 text-lg">
              Yes, ToolPintar works perfectly on desktop and mobile devices.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-zinc-400">
            © 2026 ToolPintar. All rights reserved.
          </p>

          <div className="flex gap-6 text-zinc-400">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}