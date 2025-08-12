import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import { posts } from "../data/posts";

export default function PostList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [q, setQ] = useState(searchParams.get("q") ?? "");

  useEffect(() => {
    const id = setTimeout(() => {
      const next = new URLSearchParams(searchParams);
      if (q.trim()) next.set("q", q.trim());
      else next.delete("q");
      setSearchParams(next, { replace: true });
    }, 300);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  const filtered = useMemo(() => {
    const term = q.toLowerCase().trim();
    if (!term) return posts;
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(term) ||
        p.excerpt.toLowerCase().includes(term) ||
        p.tags.some((t) => t.toLowerCase().includes(term))
    );
  }, [q]);

  return (
    <>
      {/* React 19: questi tag verranno spostati nell'<head> */}
      <title>My React Blog — Ultimi articoli</title>
      <meta
        name="description"
        content="Articoli su React, TypeScript e sviluppo front-end."
      />

      <form role="search" aria-label="Cerca articoli" className="search">
        <label htmlFor="q" className="sr-only">Cerca</label>
        <input
          id="q"
          type="search"
          placeholder="Cerca per titolo, tag, testo…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          autoComplete="off"
        />
      </form>

      <section aria-labelledby="latest">
        <h2 id="latest">Ultimi articoli</h2>
        <div className="grid">
          {filtered.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
        {filtered.length === 0 && <p>Nessun risultato.</p>}
      </section>
    </>
  );
}
