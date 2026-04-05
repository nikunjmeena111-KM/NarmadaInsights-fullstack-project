"use client";

import useDashboard from "../../hooks/useDashboard";
import DashboardNavbar from "../layout/DashboardNavbar";
import Footer from "../layout/Footer";
import { useRouter } from "next/navigation";

const DashboardMain = () => {
  const { data, loading, error, selectedCountry,setSelectedCountry } = useDashboard();
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
      <div className="card calculator-card">
        <img src="/assets/calculator-bg.png" className="card-bg-img card-bg-1" />
        <div className="card-overlay"></div>
      </div>

      <div className="calculator-content">

        <button
          className="view-all-btn"
          onClick={() => router.push("/calculators")}
        >
          <span>View All</span>
        </button>

        <p className="exchange-rates-label">Exchange Rates</p>

        <div className="exchange-rate-display">
          {data?.exchange?.from} → {data?.exchange?.to} : {data?.exchange?.rate}
        </div>

        {/* Flags */}
        <img src="/assets/usa.png" className="flag-img usa-flag" />
        <img src="/assets/india.png" className="flag-img india-flag" />

        {/* Swap */}
        <div className="swap-icon">
          <img src="/assets/swap.png" />
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