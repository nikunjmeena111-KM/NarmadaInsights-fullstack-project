export default function FooterCD() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-logo">
              <img
                src="/assets/logo.png"
                alt="NarmadaInsights Logo"
                style={{ height: "32px", width: "auto", display: "block" }}
              />
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
  <a href="#" title="Facebook">
    <img src="/assets/icon-facebook.png" alt="facebook" />
  </a>

  <a href="#" title="LinkedIn">
    <img src="/assets/icon-linkedin.png" alt="linkedin" />
  </a>

  <a href="#" title="YouTube">
    <img src="/assets/icon-youtube.png" alt="youtube" />
  </a>

  <a href="#" title="Instagram">
    <img src="/assets/icon-instagram.png" alt="instagram" />
  </a>
</div>


          <div className="footer-legal">
            <div>© Narmada Insights</div>
            <div>
              Data is for informational purposes only and may not be fully accurate or real-time.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}