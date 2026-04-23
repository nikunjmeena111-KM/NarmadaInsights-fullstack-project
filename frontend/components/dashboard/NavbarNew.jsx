export default function NavbarNew() {
  return (
    <nav>
      <a className="logo" href="/dashboard">
        <img src="/assets/logo.png" style={{ height: "36px" }} />
      </a>

      <ul className="nav-links">
        <li><a className="active" href="/dashboard">Dashboard</a></li>
        <li><a href="/calculators">Calculators</a></li>
        <li><a href="/macro">Macro</a></li>
        <li><a href="/stocks">Stocks</a></li>
        <li><a href="/support">Support</a></li>
      </ul>

      <div className="nav-avatar">👤</div>
    </nav>
  );
}