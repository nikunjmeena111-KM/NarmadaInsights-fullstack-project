export default function NavbarNew() {
  return (
    <nav>
      <a className="logo" href="/dashboard">
        <img src="/assets/logo.png" style={{ height: "36px" }} />
      </a>

      <ul className="nav-links">
        <li><a className="active">Dashboard</a></li>
        <li><a>Calculators</a></li>
        <li><a>Macro</a></li>
        <li><a>Stocks</a></li>
        <li><a>Support</a></li>
      </ul>

      <div className="nav-avatar">👤</div>
    </nav>
  );
}