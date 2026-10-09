export default function About() {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        background: "#f4f5f8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          maxWidth: "600px",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ color: "#2b2b3d", marginBottom: "16px" }}>About HBC</h1>
        <p style={{ color: "#555", lineHeight: 1.7, marginBottom: "14px" }}>
          HBC is an educational institution that trains students in modern
          digital skills including Web Development, Data Analytics, Digital
          Marketing, AI Fundamentals, and E-Commerce.
        </p>
        <p style={{ color: "#555", lineHeight: 1.7, marginBottom: "14px" }}>
          This admin panel is being developed as a final course project. It
          allows HBC staff to manage students, instructors, programs, and
          projects from one central dashboard.
        </p>

        <h2
          style={{
            fontSize: "1.1rem",
            margin: "20px 0 10px",
            color: "#2b2b3d",
          }}
        >
          What this panel includes
        </h2>
        <ul style={{ marginLeft: "20px", color: "#555", lineHeight: 1.8 }}>
          <li>Student and instructor management</li>
          <li>Program tracking and analytics</li>
          <li>Project and graduate records</li>
          <li>Real-time dashboard statistics</li>
        </ul>

        <a
          href="/"
          style={{
            display: "inline-block",
            marginTop: "24px",
            color: "#8a2be2",
            textDecoration: "none",
          }}
        >
          <i className="fa-solid fa-arrow-left"></i> Back to Sign In
        </a>
      </div>
    </div>
  );
}
