"use client";

export default function FooterCalculators() {
  return (
    <footer>
      <div className="footer-inner">

        <div className="footer-top">
          <div>
            <div className="footer-logo">
              <img src="/assets/logo.png" style={{ height: "32px" }} />
            </div>
            <p className="footer-copyright">
              © 2026 NarmadaInsights. All rights reserved.
            </p>
          </div>

          <ul className="footer-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Calculators</a></li>
            <li><a href="#">Macro Data</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <img src="/assets/icon-facebook.png" />
            <img src="/assets/icon-linkedin.png" />
          </div>

          <div className="footer-legal">
            <div>© Narmada Insights</div>
            <div>Data is for informational purposes only and may not be fully accurate.</div>
          </div>
        </div>

      </div>
    </footer>
  );
}