"use client";

import { useState } from "react";

export default function FilterBar({ setResultData }) {
  const [country, setCountry] = useState("United kingdom");
  const [indicator, setIndicator] = useState("GDP");
  const [range, setRange] = useState("ALL");

  const handleFetch = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/v1/macro?country=${country}`
      );

      const json = await res.json();

      setResultData({
        fullData: json.data,
        indicator: indicator,
        range: range
      });

    } catch (err) {
      console.error(err);
      setResultData(null);
    }
  };

  return (
    <div className="filter-bar">

      <input
        className="input"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Country"
      />

      <select
        className="select"
        value={indicator}
        onChange={(e) => setIndicator(e.target.value)}
      >
        <option value="GDP">GDP</option>
        <option value="GDP_GROWTH">GDP Growth</option>
        <option value="INFLATION">Inflation</option>
        <option value="UNEMPLOYMENT">Unemployment</option>
      </select>

      {/* 🔥 NEW RANGE DROPDOWN */}
      <select
        className="select"
        value={range}
        onChange={(e) => setRange(e.target.value)}
      >
        <option value="ALL">All Years</option>
        <option value="10">Last 10 Years</option>
        <option value="20">Last 20 Years</option>
      </select>

      <button className="btn" onClick={handleFetch}>
        Fetch Data
      </button>

    </div>
  );
}