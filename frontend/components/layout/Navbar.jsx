"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav__inner">

        {/* 🔹 Logo */}
        <img
          className="nav__logo"
          src="/images/logo.png"
          alt="NarmadaInsights"
        />

        {/* 🔹 Links */}
        <nav className="nav__links">
          <Link href="/about" className="nav__link">
            About
          </Link>

          <Link href="/calculator" className="nav__link">
            Calculators
          </Link>

          <Link href="/support" className="nav__link">
            Support
          </Link>
        </nav>

        {/* 🔹 Menu */}
        <button className="nav__menu">
          <img src="/assets/menu.png" alt="menu" />
        </button>
          

      </div>
    </header>
  );
}