"use client";

import useDashboard from "../../hooks/useDashboard";
import { useRouter } from "next/navigation";
import { useState } from "react";

import NavbarNew from "./NavbarNew";
import FooterNew from "./FooterNew";

const CURRENCIES = {
  USD: {
    code: "USD",
    name: "US Dollar",
    flag: "/assets/usa.png",
  },
  INR: {
    code: "INR",
    name: "Indian Rupee",
    flag: "/assets/india.png",
  },
};

const DashboardMain = () => {
  const { data, loading, error, selectedCountry, setSelectedCountry } =
    useDashboard();

  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState(CURRENCIES.USD);
  const [to, setTo] = useState(CURRENCIES.INR);

  // 🔥 DROPDOWN STATE
  const [open, setOpen] = useState(false);

  const router = useRouter();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const baseRate = data?.exchange?.rate || 93.3;

  const getRate = () => {
    if (from.code === "USD" && to.code === "INR") return baseRate;
    if (from.code === "INR" && to.code === "USD") return 1 / baseRate;
    return 1;
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const selectedCountryData = data?.countries?.find(
    (c) => c.code === selectedCountry
  );

  return (
    <>
      <NavbarNew />

      {/* 🔥 CLICK OUTSIDE HANDLER (NO useEffect) */}
      <div onClick={() => setOpen(false)}>

        <div className="page">

          {/* HERO */}
          <div className="hero-row">
            <div>
              <h1 className="hero-title">NarmadaInsights</h1>
              <p className="hero-sub">
                Turning complex economic data into clear, actionable insights. Explore global economies through real-time macro indicators, trends, and analytics. Designed to help you understand markets with clarity and confidence.
              </p>
            </div>

            {/* 🔥 CUSTOM DROPDOWN */}
            <div
              className="country-dropdown-wrapper"
              onClick={(e) => e.stopPropagation()}
            >

              {/* BUTTON */}
              <div
                className="country-badge"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(!open);
                }}
              >
                <img
                  src={`https://flagcdn.com/w40/${selectedCountry.toLowerCase()}.png`}
                  alt={selectedCountryData?.name}
                />
                {selectedCountryData?.name} 
              </div>

              {/* LIST */}
              {open && (
                <div className="country-dropdown">
                  {data?.countries?.map((c) => (
                    <div
                      key={c.code}
                      className="country-option"
                      onClick={() => {
                        setSelectedCountry(c.code);
                        setOpen(false);
                      }}
                    >
                      <img
                        src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`}
                        alt={c.name}
                      />
                      {c.name}
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>

          {/* MAIN GRID */}
          <div className="main-grid">

            {/* EXCHANGE */}
            <div className="exchange-card">

              <div className="exchange-card-header">
                Exchange Rates
              </div>

              <button className="view-all-btn">View All</button>

              <div className="currency-row">

                <div className="currency-select-wrap">
                  <label>From</label>
                  <div className="currency-trigger">
                    <img src={from.flag} className="flag-img" />
                    <div>
                      <div className="cur-code">{from.code}</div>
                      <div className="cur-name">{from.name}</div>
                    </div>
                  </div>
                </div>

                <div className="swap-btn" onClick={swap}>⇄</div>

                <div className="currency-select-wrap">
                  <label>To</label>
                  <div className="currency-trigger">
                    <img src={to.flag} className="flag-img" />
                    <div>
                      <div className="cur-code">{to.code}</div>
                      <div className="cur-name">{to.name}</div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="amount-wrap">
                <label>Amount</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div className="fx-result">
                <span>{amount} {from.code} =</span>
                <span>{(amount * getRate()).toFixed(2)} {to.code}</span>
              </div>

            </div>

            {/* FEATURE CARDS */}
            <div className="feature-cards">

              <div
                className="feature-card"
                onClick={() => router.push("/stocks")}
              >
                <div className="feature-card-icon">📈</div>

                <div className="feature-card-body">
                  <div className="feature-card-title">Stock Data</div>
                  <div className="feature-card-desc">
                    Check key stock indices, exchange rates, and market trends.
                  </div>
                </div>

                <div className="feature-card-arrow">›</div>
              </div>

              <div
                className="feature-card"
                onClick={() =>
                  router.push(`/countryDashboard?country=${selectedCountry}`)
                }
              >
                <div className="feature-card-icon">🌍</div>

                <div className="feature-card-body">
                  <div className="feature-card-title">Country Dashboard</div>
                  <div className="feature-card-desc">
                    View detailed data for selected country,including monetory indicators,stock insights and more.
                  </div>
                </div>

                <div className="feature-card-arrow">›</div>
              </div>

              <div
                className="feature-card"
                onClick={() =>
                  router.push(`/macro?country=${selectedCountry}`)
                }
              >
                <div className="feature-card-icon">📊</div>

                <div className="feature-card-body">
                  <div className="feature-card-title">Macro Data</div>
                  <div className="feature-card-desc">
                    Explore key economic data and trends,including GDP,inflation and more.
                  </div>
                </div>

                <div className="feature-card-arrow">›</div>
              </div>

            </div>

          </div>

          {/* NEWS */}
          <div className="section">
            <div className="section-header">News</div>

            <div className="news-grid">
              {data?.news?.news?.slice(0, 4).map((item, i) => (
                <div
                  key={i}
                  className="news-card"
                  onClick={() => window.open(item.url, "_blank")}
                >
                  <img src={item.imageUrl} />

                  <div className="news-card-overlay">
                    <span className="news-title">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <FooterNew />
    </>
  );
};

export default DashboardMain;