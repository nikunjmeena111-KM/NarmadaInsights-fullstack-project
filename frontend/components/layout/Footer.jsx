const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-divider"></div>

      <div className="footer-logo">
        <img src="/assets/image-4.png" />
      </div>

      <nav className="footer-links">
        <button className="footer-link">About</button>
        <button className="footer-link">Calculators</button>
        <button className="footer-link">Macro Data</button>
        <button className="footer-link">Dashboard</button>
        <button className="footer-link">Support</button>
      </nav>

      <p className="copyright">
        © 2026 NarmadaInsights. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;