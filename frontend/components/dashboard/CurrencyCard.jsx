"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CurrencyCard = ({ exchange }) => {
  const [amount, setAmount] = useState("");
  return (
    <div className="calculator-card card">

  <img src="/assets/calculator-bg.png" className="card-bg-img" />
  <div className="card-overlay"></div>

  <div className="exchange-rate-display">
    USD → INR : {exchange?.rate || "93.1258"}
  </div>

  <button className="view-all-btn">View All</button>

  <div className="currency-btn from-btn">USD</div>
  <div className="currency-btn to-btn">INR</div>

  <img src="/assets/usa.png" className="flag usa-flag" />
  <img src="/assets/india.png" className="flag india-flag" />

  <div className="swap-icon">⇄</div>

  <input
  type="number"
  className="amount-input"
  placeholder="Enter amount"
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
/>

<div className="converted-value">
  {amount && exchange?.rate
    ? (amount * exchange.rate).toFixed(2)
    : "Converted Value"}
</div>

</div>
  );
};

export default CurrencyCard;