import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>404 — Pagina non trovata</h2>
      <p>La risorsa richiesta non esiste.</p>
      <p><Link to="/">Torna alla home</Link></p>
    </div>
  );
}
