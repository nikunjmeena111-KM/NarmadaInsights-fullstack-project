"use client";

import { useRouter } from "next/navigation";

export default function NavbarLanding() {
  const router = useRouter();

  return (
    <nav>
      <a className="logo" href="/">
        <img src="/assets/logo.png" alt="NarmadaInsights" style={{ height: 34 }} />
      </a>

      <ul className="nav-links">
        <li><a href="/guide">About</a></li>
        <li><a href="/calculators">Calculators</a></li>
        <li><a href="/support">Support</a></li>
      </ul>

      <div className="nav-right">
        <button className="menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}