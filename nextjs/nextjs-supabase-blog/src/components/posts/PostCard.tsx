
import Link from "next/link";
import type { PostSummary } from "@/lib/types/database";
import styles from "./PostCard.module.css";

interface PostCardProps {
  post: PostSummary;
}

function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeZone: "UTC",
  }).format(new Date(date));
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className={styles.card}>
      <time
        className={styles.date}
        // ISO time format
        dateTime={post.created_at}
      >
        {formatDate(post.created_at)}
      </time>

      <h2 className={styles.title}>
        <Link href={`/posts/${post.slug}`}>
          {post.title}
        </Link>
      </h2>

      <Link
        href={`/posts/${post.slug}`}
        className={styles.readMore}
      >
        Read article
        <span aria-hidden="true"> →</span>
      </Link>
    </article>
  );
}
