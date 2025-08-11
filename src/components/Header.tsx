import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <a href="#main" className="skip-link">Salta al contenuto</a>
      <div className="container">
        <h1 className="brand">My React Blog</h1>
        <nav aria-label="Principale">
          <ul className="nav">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/">Articoli</NavLink></li>
            <li><a href="#">Chi sono</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
