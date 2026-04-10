import Link from "next/link";

export default function NavbarCD() {
  return (
    <nav>
      <a className="logo" href="#">

        <img
          src="/assets/logo.png"
          alt="NarmadaInsights Logo"
          style={{ height: "36px", width: "auto", display: "block" }}
        />
      </a>

      <ul className="nav-links">
        <li><Link href="/dashboard">Home</Link></li>
        <li><a href="#">Calculators</a></li>
        <li><a href="#">Macro</a></li>
        <li><a href="#">Stocks</a></li>
        <li><a href="#">Support</a></li>
      </ul>

      <div className="nav-avatar">
        <svg viewBox="0 0 24 24">
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
        </svg>
      </div>
    </nav>
  );
}