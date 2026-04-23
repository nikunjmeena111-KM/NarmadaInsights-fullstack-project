export default function FooterLanding() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <img src="/assets/logo.png" style={{ height: 32 }} />
            <p className="copyright">
              © 2026 NarmadaInsights
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
          <div>Follow us on LinkedIn</div>
          <div>Data for informational purposes only.</div>
        </div>
      </div>
    </footer>
  );
}