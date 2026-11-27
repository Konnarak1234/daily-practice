
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./MarkdownCotent.module.css";

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({
  content,
}: MarkdownContentProps) {
  return (
    <article className={styles.markdown}>
      <Markdown remarkPlugins={[remarkGfm]}>
        {content}
      </Markdown>
    </article>
  );
}
