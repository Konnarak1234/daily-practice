
import Link from "next/link";

export default function PostNotFound() {
  return (
    <main className="container">
      <section
        style={{
          padding: "100px 0",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem" }}>
          Article Not Found
        </h1>

        <p
          className="muted"
          style={{ marginTop: "12px" }}
        >
          Sorry, we couldn't find the article you requested.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-block",
            marginTop: "25px",
            padding: "11px 20px",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            borderRadius: "7px",
          }}
        >
          Return Home
        </Link>
      </section>
    </main>
  );
}
