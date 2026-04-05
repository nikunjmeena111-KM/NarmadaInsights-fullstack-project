"use client";

import { useRouter } from "next/navigation";

const DashboardNavbar = () => {
  const router = useRouter();

  return (
    <header className="navbar">

      <button className="logo-btn" onClick={() => router.push("/")}>
        <img src="/assets/logo.png" className="logo-img" />
      </button>

      <nav className="nav-links">
        <button className="nav-link" onClick={() => router.push("/dashboard")}>Dashboard</button>
        <button className="nav-link" onClick={() => router.push("/calculators")}>Calculators</button>
        <button className="nav-link" onClick={() => router.push("/macro")}>Macro</button>
        <button className="nav-link" onClick={() => router.push("/stocks")}>Stocks</button>
        <button className="nav-link">Support</button>
      </nav>

      <div className="user-avatar">
        <img src="/assets/profile.png" />
      </div>

    </header>
  );
};

export default DashboardNavbar;