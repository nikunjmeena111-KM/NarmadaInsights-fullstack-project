"use client";

import useDashboard from "../../hooks/useDashboard";
import DashboardNavbar from "../layout/DashboardNavbar";
import Footer from "../layout/Footer";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DashboardMain = () => {
  const { data, loading, error, selectedCountry,setSelectedCountry } = useDashboard();
  const [amount, setAmount] = useState("");
  const router = useRouter();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="dashboard-container">

      {/* Navbar */}
      <DashboardNavbar />

<div className="country-selector">

    <select
       className="country-dropdown"
       value={selectedCountry}
       onChange={(e) => setSelectedCountry(e.target.value)}
    >
         {data?.countries?.map((country) => (
      <option key={country.code} value={country.code}>
          {country.name}
      </option>
          ))}
    </select>

      {/* Custom arrow */}
    <div className="dropdown-arrow">▼</div>

</div>

      {/* ================= CALCULATOR ================= */}
    <div className="calculator-card card">

  <img src="/assets/calculator-bg.png" className="card-bg-img" />
  <div className="card-overlay"></div>

  {/* 🔥 TITLE */}
  <div className="calculator-title">
    Exchange Rate Calculator
  </div>

  {/* 🔥 EXCHANGE RATE (MOVED ABOVE INPUT) */}
  <div className="exchange-rate-display">
    USD → INR : {data?.exchange?.rate || "93.1258"}
  </div>

  {/* BUTTON */}
  <button className="view-all-btn">View All</button>

  {/* FROM / TO */}
  <div className="currency-btn from-btn">USD</div>
  <div className="currency-btn to-btn">INR</div>

  {/* FLAGS */}
  <img src="/assets/usa.png" className="flag usa-flag" />
  <img src="/assets/india.png" className="flag india-flag" />

  {/* SWAP */}
  <div className="swap-icon">⇄</div>

  {/* INPUT */}
  <input
    type="number"
    className="amount-input"
    placeholder="Enter amount"
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
  />

  {/* OUTPUT */}
  <div className="converted-value">
    {amount && data?.exchange?.rate
      ? (amount * data.exchange.rate).toFixed(2)
      : "Converted Value"}
  </div>

</div>

      {/* ================= CARDS ================= */}

      {/* Stock */}
      <div
        className="card stock-card"
        onClick={() => router.push("/stocks")}
      >
        <img src="/assets/stock-bg.png" className="card-bg-img stock-bg" />
        <div className="card-overlay card-overlay-2"></div>

        <h3 className="card-title stock-title">Stock Data</h3>
        <p className="card-description stock-desc">
          Check key stock indices, exchange rates, and market trends.
        </p>
      </div>

      {/* Macro */}
      <div
        className="card macro-card"
        onClick={() =>
          router.push(`/macro?country=${selectedCountry}`)
        }
      >
        <img src="/assets/macro-bg.png" className="card-bg-img macro-bg" />
        <div className="card-overlay card-overlay-3"></div>

        <h3 className="card-title macro-title">Macro Data</h3>
        <p className="card-description macro-desc">
          Explore key economic data and trends.
        </p>
      </div>

      {/* Country */}
      <div
        className="card country-card"
        onClick={() =>
          router.push(`/country?code=${selectedCountry}`)
        }
      >
        <img src="/assets/country-bg.png" className="card-bg-img country-bg" />
        <div className="card-overlay card-overlay-4"></div>

        <h3 className="card-title country-title">Country Dashboard</h3>
        <p className="card-description country-desc">
          View detailed data for selected country
        </p>
      </div>

      {/* ================= NEWS ================= */}

      <h2 className="news-title">News</h2>
      <div className="news-divider"></div>

      <div className="news-section">
             {data?.news?.news?.slice(0, 4).map((item, index) => (
      <div
            key={index}
            className={`news-card news-card-${index + 1}`}
            onClick={() => window.open(item.url)}
          >
            <img src={item.imageUrl} className="news-img" />

            {/* 🔥 TEXT INSIDE IMAGE */}
          <div className="news-overlay">
          <p className="news-text">{item.title}</p>
          </div>
    </div>
  ))}
</div>
      

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default DashboardMain;