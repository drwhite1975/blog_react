import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found" aria-labelledby="nf-title">
      <title>Pagina non trovata — My React Blog</title>
      <meta name="robots" content="noindex" />

      <h1 id="nf-title">Pagina non trovata</h1>
      <p>La risorsa che cerchi non esiste o è stata spostata.</p>
      <p><Link to="/">Torna alla home</Link></p>
    </section>
  );
}
