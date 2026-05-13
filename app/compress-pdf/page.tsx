export const metadata = {
  title: "Compress PDF Online Free - ToolPintar",
  description:
    "Compress PDF files online for free without losing quality using ToolPintar.",
};

export default function CompressPdfPage() {
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
          Compress PDF Online
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}
        >
          Reduce PDF file size online for free while maintaining quality.
          Fast, secure, and easy to use.
        </p>

        <div
          style={{
            border: "2px dashed #16a34a",
            borderRadius: "20px",
            padding: "50px",
            textAlign: "center",
            background: "#f0fdf4",
            cursor: "pointer",
          }}
        >
          <h2
            style={{
              color: "#16a34a",
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
            Features
          </h2>

          <ul
            style={{
              lineHeight: "2",
              color: "#444",
              fontSize: "17px",
            }}
          >
            <li>Compress PDF without losing quality</li>
            <li>Fast online processing</li>
            <li>Secure and private</li>
            <li>No software installation</li>
            <li>Free unlimited usage</li>
          </ul>
        </div>
      </div>
    </main>
  );
}