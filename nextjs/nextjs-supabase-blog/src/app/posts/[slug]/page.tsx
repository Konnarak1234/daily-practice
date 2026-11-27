
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { getPostBySlug } from "@/lib/posts";
import MarkdownContent from "@/components/posts/MarkdownContent";

import styles from "./page.module.css";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const metadata: Metadata = {
  title: "Blog Article",
};

export default async function PostPage({
  params,
}: PostPageProps) {
  // Retrieve the dynamic route parameter.
  const { slug } = await params;

  // Retrieve the matching post from Supabase.
  const post = await getPostBySlug(slug);

  // Display a 404 page if the post doesn't exist.
  if (!post) {
    notFound();
  }

  return (
    <main className="container">
      <article className={styles.article}>
        <Link href="/" className={styles.backLink}>
          ← Back to articles
        </Link>

        <header className={styles.header}>
          <time
            dateTime={post.created_at}
            className={styles.date}
          >
            {new Intl.DateTimeFormat("en", {
              dateStyle: "long",
              timeZone: "UTC",
            }).format(new Date(post.created_at))}
          </time>

          <h1 className={styles.title}>
            {post.title}
          </h1>
        </header>

        <div className={styles.content}>
          <MarkdownContent content={post.content} />
        </div>
      </article>
    </main>
  );
}
