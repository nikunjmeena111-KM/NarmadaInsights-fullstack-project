"use client";

import Navbar from "@/components/layout/Navbar";
import usePageScale from "@/hooks/usePageScale";

export default function Home() {
  usePageScale();

  return (
    <div className="viewport">

      <Navbar />

      <div className="page" id="page">
        //{/* 🔥 Hero Images */}
<img className="img img--9" src="/assets/image-9.png" alt="" />
<img className="img img--5" src="/assets/image-5.png" alt="" />
<img className="img img--8" src="/assets/image-8.png" alt="" />

<div className="label label--calculator">Calculator</div>

{/* 🔥 Hero Text */}
<div className="hero__kicker">
  Simple Financial Insights, All in One Place
</div>

<div className="hero__sub">
  Access macro data, market trends, and powerful calculators — all in one place
</div>

<button className="cta">SignUp for free</button>

<div className="quote">
  
  <div className="quote__text">
    “It ain't about how hard you hit. 
    <br/>
    It's about how hard you can get hit and keep moving forward”
  </div>

  <div className="quote__author">
    - Rocky Balboa
  </div>

</div>


{/* 🔥 Section Title */}
<div className="section-title">
  Simple Tools for Financial Insights
</div>

<div className="section-sub">
  Explore basic financial data, try calculators, and stay updated.
</div>

<section className="cards">

  {/* 🔹 Card 1 */}
  <div className="card card--calc">
    <div className="card__title">Calculators</div>
    <div className="card__body">
      Try simple financial calculators to get quick estimates for common scenarios like investments, loans, and returns.
    </div>
  </div>

  {/* 🔹 Card 2 */}
  <div className="card card--econ">
    <div className="card__title">Economic Data</div>
    <div className="card__body">
      View selected macroeconomic data by country and year to understand basic economic trends.
    </div>
  </div>

  {/* 🔹 Card 3 */}
  <div className="card card--market">
    <div className="card__title">Market Overview</div>
    <div className="card__body">
      Check key stock indices, exchange rates, and recent financial news in one place.
    </div>
  </div>

</section>

<div className="why__title">
  Why Economic Data Matters
</div>

{/* 🔹 Inflation */}
<div className="why why--inflation">
  <div className="why__heading">Inflation</div>
  <br />
  <div className="why__text">
    Inflation shows how prices change over time. As it rises, the same money buys less than before.
    <br />
    Tracking it helps you understand real value and spending power.
  </div>
</div>

{/* 🔹 Interest Rates */}
<div className="why why--rates">
  <div className="why__heading">Interest Rates</div>
  <br />
  <div className="why__text">
    Interest rates affect borrowing and saving decisions.
    <br />
    Higher rates make loans expensive but increase returns on savings.
    <br />
    They also influence how markets and investments behave.
  </div>
</div>

{/* 🔹 Global Trends */}
<div className="why why--global">
  <div className="why__heading">Global Trends</div>
  <br />
  <div className="why__text">
    Economic events in one country can impact others.
    <br />
    Changes in growth, trade, or policy affect markets worldwide.
    <br />
    Understanding trends helps you see the bigger financial picture.
  </div>
</div>

{/* 🔥 Guide Link */}
<div className="guide-link">
  For more detailed insights,{" "}
  <a href="/guide" className="guide-link__highlight">
    read our full guide
  </a>{" "}
  on economics.
</div>

{/* 🔥 Footer */}
<footer className="footer">

  {/* Logo */}
  <img
    className="footer__logo"
    src="/assets/image-4.png"
    alt="NarmadaInsights"
  />

  {/* Navigation */}
  <div className="footer__nav">
    About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Calculators&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Macro Data&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Dashboard&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Support
  </div>

  {/* Divider */}
  <div className="footer__divider"></div>

  {/* Copyright */}
  <div className="footer__copy">
    © 2026 NarmadaInsights. All rights reserved.
  </div>

  {/* Social Icons */}
  <div className="social">

    <a className="social__btn" href="#">
      <img
        src="/assets/icon-facebook.png"
        alt="facebook"
        width="24"
        height="24"
      />
    </a>

    <a className="social__btn" href="#">
      <img
        src="/assets/icon-linkedin.png"
        alt="linkedin"
        width="24"
        height="24"
      />
    </a>

    <a className="social__btn" href="#">
      <img
        src="/assets/icon-youtube.png"
        alt="youtube"
        width="24"
        height="24"
      />
    </a>

    <a className="social__btn" href="#">
      <img
        src="/assets/icon-instagram.png"
        alt="instagram"
        width="24"
        height="24"
      />
    </a>

  </div>

</footer>

      </div>

    </div>
  );
}