
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <section
        style={{
          paddingTop: "100px",
          paddingBottom: "60px",
        }}
      >
        <p className="muted">
          Welcome to my blog
        </p>

        <h1
          style={{
            fontSize: "3rem",
            lineHeight: 1.2,
            marginTop: "12px",
            maxWidth: "650px",
          }}
        >
          Ideas, experiences, and thoughts worth sharing.
        </h1>

        <p
          className="muted"
          style={{
            marginTop: "20px",
            maxWidth: "550px",
          }}
        >
          A personal blog powered by Next.js,
          TypeScript, and Supabase.
        </p>

        <div style={{ marginTop: "28px" }}>
          <Link
            href="/login"
            style={{
              display: "inline-block",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              padding: "12px 22px",
              borderRadius: "8px",
            }}
          >
            Get Started
          </Link>
        </div>
      </section>

      <section
        style={{
          borderTop: "1px solid #e2e8f0",
          paddingTop: "30px",
        }}
      >
        <h2>Latest Articles</h2>

        <p className="muted" style={{ marginTop: "8px" }}>
          Your published blog posts will appear here.
        </p>
      </section>
    </main>
  );
}
