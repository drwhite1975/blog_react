import type { Post } from "../types";

type Props = { post: Post };

export default function PostCard({ post }: Props) {
  return (
    <article className="post" aria-labelledby={`title-${post.id}`}>
      <header>
        <h2 id={`title-${post.id}`}>
          <a href="#" className="post-link">{post.title}</a>
        </h2>
        <p className="meta">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString()}
          </time>
          {" · "}
          <span>{post.tags.join(" • ")}</span>
        </p>
      </header>
      <p>{post.excerpt}</p>
    </article>
  );
}
