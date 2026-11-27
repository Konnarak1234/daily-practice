
import type { Metadata } from "next";
import { getPosts } from "@/lib/posts";
import PostCard from "@/components/posts/PostCard";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Home",
  description: "Explore the latest articles on My Blog.",
};

export default async function HomePage() {
  const posts = await getPosts();

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
          Explore articles about technology,
          programming, and personal experiences.
        </p>
      </section>

      <section className={styles.articles}>
        <div className={styles.sectionHeading}>
          <h2>Latest Articles</h2>

          <span className={styles.postCount}>
            {posts.length} articles
          </span>
        </div>

        {posts.length === 0 ? (
          <div className={styles.emptyState}>
            <h3>No articles yet</h3>

            <p>
              Check back later for new blog posts.
            </p>
          </div>
        ) : (
          <div className={styles.postGrid}>
            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
