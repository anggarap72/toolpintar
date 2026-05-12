import Link from "next/link";

import {
  FileText,
  Sparkles,
  ScanText,
  LayoutTemplate,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b bg-white sticky top-0 z-50">

        <h1 className="text-2xl font-bold text-blue-600">
          ToolPintar
        </h1>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#">PDF Tools</a>
          <a href="#">AI Tools</a>
          <a href="#">OCR Tools</a>
          <a href="#">Template</a>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-sm font-medium transition">
          Mulai Gratis
        </button>

      </nav>

      {/* Hero Section */}
      <section className="px-8 py-28 text-center bg-gradient-to-b from-blue-50 to-white">

        <h1 className="text-6xl font-bold leading-tight">
          Semua Tools Produktivitas
          <br />
          dalam <span className="text-blue-600">Satu Website</span>
        </h1>

        <p className="mt-6 text-gray-600 text-xl max-w-3xl mx-auto">
          PDF Tools, AI Tools, OCR, dan Template GRATIS
          untuk membantu kerja lebih cepat dan lebih mudah.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transition">
            Mulai Gratis
          </button>

          <button className="border border-gray-300 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold transition">
            Jelajahi Tools
          </button>

        </div>

      </section>

      {/* Categories */}
      <section className="px-8 py-20">

        <h2 className="text-4xl font-bold text-center mb-14">
          Categories Tools
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {/* PDF */}
          <div className="border rounded-3xl p-8 shadow-sm hover:shadow-xl transition bg-white cursor-pointer">

            <FileText className="text-red-500 mb-4" size={40} />

            <h3 className="text-2xl font-bold text-red-500">
              PDF Tools
            </h3>

            <p className="mt-4 text-gray-600">
              Convert, merge, compress PDFs easily.
            </p>

          </div>

          {/* AI */}
          <div className="border rounded-3xl p-8 shadow-sm hover:shadow-xl transition bg-white cursor-pointer">

            <Sparkles className="text-purple-500 mb-4" size={40} />

            <h3 className="text-2xl font-bold text-purple-500">
              AI Tools
            </h3>

            <p className="mt-4 text-gray-600">
              Use AI to help your work.
            </p>

          </div>

          {/* OCR LINK */}
          <Link href="/image-to-text">

            <div className="border rounded-3xl p-8 shadow-sm hover:shadow-xl transition bg-white cursor-pointer">

              <ScanText className="text-green-500 mb-4" size={40} />

              <h3 className="text-2xl font-bold text-green-500">
                OCR Tools
              </h3>

              <p className="mt-4 text-gray-600">
                Scan images and convert to automatic text.
              </p>

            </div>

          </Link>

          {/* Template */}
          <div className="border rounded-3xl p-8 shadow-sm hover:shadow-xl transition bg-white cursor-pointer">

            <LayoutTemplate className="text-orange-500 mb-4" size={40} />

            <h3 className="text-2xl font-bold text-orange-500">
              Templates
            </h3>

            <p className="mt-4 text-gray-600">
              Download premium PPT and CV templates.
            </p>

          </div>

        </div>

      </section>

      {/* Popular Tools */}
      <section className="px-8 pb-24">

        <h2 className="text-4xl font-bold text-center mb-14">
          Popular Tools
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="border rounded-3xl p-8 shadow-sm hover:shadow-xl transition bg-white">

            <h3 className="text-2xl font-bold">
              PDF to Word
            </h3>

            <p className="mt-4 text-gray-600">
              Convert PDF to Word quickly.
            </p>

          </div>

          <div className="border rounded-3xl p-8 shadow-sm hover:shadow-xl transition bg-white">

            <h3 className="text-2xl font-bold">
              Compress PDF
            </h3>

            <p className="mt-4 text-gray-600">
              Reduce the size of PDFs without compromising quality.
            </p>

          </div>

          {/* OCR POPULAR */}
          <Link href="/image-to-text">

            <div className="border rounded-3xl p-8 shadow-sm hover:shadow-xl transition bg-white cursor-pointer">

              <h3 className="text-2xl font-bold">
                Image to Text OCR
              </h3>

              <p className="mt-4 text-gray-600">
                Scan images into automatic text.
              </p>

            </div>

          </Link>

          <div className="border rounded-3xl p-8 shadow-sm hover:shadow-xl transition bg-white">

            <h3 className="text-2xl font-bold">
              AI PPT Generator
            </h3>

            <p className="mt-4 text-gray-600">
              Create automated presentations with AI.
            </p>

          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="px-8 pb-24">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-blue-50 rounded-3xl p-8 text-center">

            <h3 className="text-4xl font-bold text-blue-600">
              250K+
            </h3>

            <p className="mt-2 text-gray-600">
              Active Users
            </p>

          </div>

          <div className="bg-green-50 rounded-3xl p-8 text-center">

            <h3 className="text-4xl font-bold text-green-600">
              100+
            </h3>

            <p className="mt-2 text-gray-600">
              Free Tools
            </p>

          </div>

          <div className="bg-purple-50 rounded-3xl p-8 text-center">

            <h3 className="text-4xl font-bold text-purple-600">
              1.2M+
            </h3>

            <p className="mt-2 text-gray-600">
              Files Processed
            </p>

          </div>

          <div className="bg-orange-50 rounded-3xl p-8 text-center">

            <h3 className="text-4xl font-bold text-orange-600">
              4.9/5
            </h3>

            <p className="mt-2 text-gray-600">
              User Rating
            </p>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-8 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>

            <h3 className="text-2xl font-bold text-blue-400">
              ToolPintar
            </h3>

            <p className="mt-4 text-gray-400">
              Platform tools produktivitas modern untuk membantu pekerjaan lebih cepat dan efisien.
            </p>

          </div>

          <div>

            <h4 className="font-semibold mb-4">
              Products
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>PDF Tools</li>
              <li>AI Tools</li>
              <li>OCR Tools</li>
              <li>Templates</li>
            </ul>

          </div>

          <div>

            <h4 className="font-semibold mb-4">
              Company
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>

          </div>

          <div>

            <h4 className="font-semibold mb-4">
              Legal
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Disclaimer</li>
            </ul>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          © 2026 ToolPintar. All rights reserved.
        </div>

      </footer>

    </main>
  );
}