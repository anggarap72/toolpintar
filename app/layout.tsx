import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {

  title: "ToolPintar - OCR, PDF & AI Tools",

  description:
    "ToolPintar adalah platform tools online gratis untuk OCR, PDF Tools, AI Tools, dan Template premium.",

  keywords: [
    "OCR online",
    "Image to Text",
    "PDF Tools",
    "AI Tools",
    "OCR gratis",
    "Convert Image to Text",
  ],

  icons: {
    icon: "/icon.png",
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}