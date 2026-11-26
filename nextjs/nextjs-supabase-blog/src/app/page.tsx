
import Link from "next/link";
import styles from "./page.module.css";


export default function HomePage() {
  return (
    <main className="container">
      <section className={styles.hero}>
        <p className={styles.eyebrow}>
          Welcome to my blog
        </p>

        <h1 className={styles.title}>
          Ideas, experiences, and thoughts worth sharing.
        </h1>

        <p className={styles.description}>
          A personal blog powered by Next.js,
          TypeScript, and Supabase.
        </p>

        <div className={styles.actions}>
          <Link
            href="/login"
            className={styles.primaryButton}
          >
            Get Started
          </Link>
        </div>
      </section>

      <section className={styles.articles}>
        <h2>Latest Articles</h2>
        <p className={styles.emptyMessage}>
          Your published blog posts will appear here.
        </p>
      </section>
    </main>
  );
}
