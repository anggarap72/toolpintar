export const metadata = {
  title: "PDF to Word Converter Online Free - ToolPintar",
  description:
    "Convert PDF to editable Word document online for free with ToolPintar.",
};

export default function PdfToWordPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "40px 20px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "20px",
            color: "#111",
          }}
        >
          PDF to Word Converter
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}
        >
          Convert PDF files into editable Word documents online for free.
          Fast, secure, and easy to use with ToolPintar.
        </p>

        <div
          style={{
            border: "2px dashed #4f46e5",
            borderRadius: "20px",
            padding: "50px",
            textAlign: "center",
            background: "#eef2ff",
            cursor: "pointer",
          }}
        >
          <h2
            style={{
              color: "#4f46e5",
              marginBottom: "10px",
            }}
          >
            Upload PDF File
          </h2>

          <p style={{ color: "#666" }}>
            Drag & drop your PDF here
          </p>
        </div>

        <div
          style={{
            marginTop: "50px",
          }}
        >
          <h2
            style={{
              marginBottom: "15px",
              fontSize: "28px",
            }}
          >
            Why Use ToolPintar PDF to Word?
          </h2>

          <ul
            style={{
              lineHeight: "2",
              color: "#444",
              fontSize: "17px",
            }}
          >
            <li>Free online PDF converter</li>
            <li>Fast and secure processing</li>
            <li>Editable Word output</li>
            <li>No registration required</li>
            <li>Works on desktop and mobile</li>
          </ul>
        </div>
      </div>
    </main>
  );
}