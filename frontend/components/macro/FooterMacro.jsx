export default function FooterMacro() {
  return (
    <footer>
      <div className="footer-inner">

        <div className="footer-top">
          <div>
            <div className="footer-logo">
              <img
                src="/assets/logo.png"
                alt="Logo"
                style={{ height: "30px" }}
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
            <a href="#"><img src="/assets/icon-facebook.png" /></a>
            <a href="#"><img src="/assets/icon-linkedin.png" /></a>
            <a href="#"><img src="/assets/icon-youtube.png" /></a>
            <a href="#"><img src="/assets/icon-instagram.png" /></a>
          </div>

          <div className="footer-legal">
            <div><p style={{textAlign:"right"}}>© Narmada Insights</p></div>
            <div>
              Data is for informational purposes only and may not be fully accurate.
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}