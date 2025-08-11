export default function Header() {
  return (
    <header className="site-header">
      <a href="#main" className="skip-link">Salta al contenuto</a>
      <div className="container">
        <h1 className="brand">My React Blog</h1>
        <nav aria-label="Principale">
          <ul className="nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">Articoli</a></li>
            <li><a href="#">Chi sono</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
