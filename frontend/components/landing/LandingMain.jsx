"use client";

import { useRouter } from "next/navigation";
import "./landing.css";

export default function LandingMain() {
  const router = useRouter();

  return (
    <>
      {/* NAV */}
      <nav>
        <a className="logo" href="/">
          <img src="/assets/logo.png" alt="NarmadaInsights" style={{ height: "34px" }} />
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

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Simple Financial Insights, All in One Place</h1>
          <p>
            Access macro data, market trends, and powerful calculators — all in one place to simplify complex financial concepts and support smarter decision-making.
          </p>
          <button className="btn-hero" onClick={() => router.push("/register")}>
            Sign Up for free
          </button>
        </div>

        <div className="hero-visual">
          <div className="glass-card layer-1">
            <div className="mini-bar"></div>
            <div className="mini-bar green"></div>

            <div style={{ height: "60px", display: "flex", alignItems: "flex-end", gap: "6px", marginTop: "20px" }}>
              <div style={{ height: "40%", width: "20%", background: "var(--green)" }}></div>
              <div style={{ height: "80%", width: "20%", background: "var(--green)", opacity: "0.5" }}></div>
              <div style={{ height: "60%", width: "20%", background: "var(--green)" }}></div>
            </div>
          </div>

          <div className="glass-card layer-2">
            <div className="mini-bar" style={{ width: "40%" }}></div>
            <div style={{ fontFamily: "DM Serif Display", fontSize: "24px", color: "var(--green)", marginTop: "10px" }}>
              $ 1,240.00
            </div>
            <div className="mini-bar green" style={{ marginTop: "10px" }}></div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="quote-section">
        <div className="quote-content">
          <blockquote>
            "It ain’t about how hard you hit. It’s about how hard you can get hit and keep moving forward."
          </blockquote>
          <p className="quote-author">— Rocky Balboa</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-padding">
        <h2 style={{ fontFamily: "DM Serif Display", fontSize: "32px", marginBottom: "5px" }}>
          Simple Tools for Financial Insights
        </h2>
        <p style={{marginBottom:"60px"}}>Explore basic financial data, try calculators, and stay updated.</p>
        <div className="grid-3">
          <div className="card">
            <h3>Calculators</h3>
            <p>Try simple financial calculators to get quick estimates for common scenarios like investments, loans, and returns.</p>
          </div>

          <div className="card">
            <h3>Economic Data</h3>
            <p>View selected macroeconomic data by country and year to understand basic economic trends.</p>
          </div>

          <div className="card">
            <h3>Market Overview</h3>
            <p>Check key stock indices, exchange rates, and recent financial news in one place.</p>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section-padding">
        <h2 style={{ fontFamily: "DM Serif Display", fontSize: "32px", marginBottom: "40px" }}>
          Why Economic Data Matters
        </h2>

        <div className="grid-3">
          <div>
            <h4>Inflation</h4>
            <p>Inflation shows how prices change over time.     As it rises, money buys less. Tracking it helps understand real spending power.</p>
          </div>

          <div>
            <h4>Interest Rates</h4>
            <p>Rates affect borrowing and saving. Higher rates make loans expensive but increase returns on savings.</p>
          </div>

          <div>
            <h4>Global Trends</h4>
            <p>Economic events in one country impact others. Understanding trends helps you see the bigger financial picture.</p>
          </div>
        </div>

        <div className="guide-cta">
          For more insights, <a href="/guide">read our full guide</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <img src="/assets/logo.png" style={{ height: "32px" }} />
              <p style={{ fontSize: "12px", color: "var(--muted)", marginTop: "12px" }}>
                © 2026 NarmadaInsights. All rights reserved.
              </p>
            </div>

            <ul className="footer-links">
              <li><a href="/guide">About</a></li>
              <li><a href="/calculators">Calculators</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/support">Support</a></li>
            </ul>
          </div>

          <div className="footer-bottom">
            <div className="social-icons">
  <a href="#" target="_blank">
    <img src="/assets/icon-facebook.png" alt="Facebook" />
  </a>
  <a href="#" target="_blank">
    <img src="/assets/icon-instagram.png" alt="Instagram" />
  </a>
  <a href="#" target="_blank">
    <img src="/assets/icon-linkedin.png" alt="LinkedIn" />
  </a>
  <a href="#" target="_blank">
    <img src="/assets/icon-youtube.png" alt="YouTube" />
  </a>
</div>
            <div><p style={{ fontSize: "12px", color: "var(--muted)", marginTop: "12px",textAlign: "right" }}>
                                                       © Narmada Insights
                <br />
Data for informational purposes only.
              </p></div>
          </div>
        </div>
      </footer>
    </>
  );
}