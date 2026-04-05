"use client";

import { useRouter } from "next/navigation";

const FeatureCards = ({ selectedCountry }) => {
  const router = useRouter();

  return (
    <div className="feature-cards">

      {/* 📊 Stock */}
      <div
        className="feature-card"
        onClick={() => router.push("/stocks")}
      >
        <h3>Stock Data</h3>
        <p>
          Check key stock indices, exchange rates, and market trends.
        </p>
      </div>

      {/* 🌍 Macro */}
      <div
        className="feature-card"
        onClick={() =>
          router.push(`/macro?country=${selectedCountry}`)
        }
      >
        <h3>Macro Data</h3>
        <p>
          Explore key economic data and understand trends.
        </p>
      </div>

      {/* 🏳 Country */}
      <div
        className="feature-card"
        onClick={() =>
          router.push(`/country?code=${selectedCountry}`)
        }
      >
        <h3>Country Dashboard</h3>
        <p>
          View detailed insights for selected country.
        </p>
      </div>

    </div>
  );
};

export default FeatureCards;