import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div>
        <h2>Articolo non trovato</h2>
        <p>L’articolo che cerchi non esiste.</p>
        <p><Link to="/">Torna alla home</Link></p>
      </div>
    );
  }

  return (
    <article>
      <header>
        <h2>{post.title}</h2>
        <p className="meta">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString()}
          </time>
          {" · "}
          <span>{post.tags.join(" • ")}</span>
        </p>
      </header>
      <p>{post.excerpt}</p>

      <p style={{ marginTop: "1rem" }}>
        <Link to="/">← Torna alla home</Link>
      </p>
    </article>
  );
}

