"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CurrencyCard = ({ exchange }) => {
  const router = useRouter();
  const [amount, setAmount] = useState("");

  return (
    <div className="currency-card">
        <img src="/assets/calculator-bg.png" className="card-bg-img card-bg-1" />

      {/* 🔵 Top Button */}
      <button
        className="view-all-btn"
        onClick={() => router.push("/calculators")}
      >
        View All
      </button>

      {/* Title */}
      <p className="section-title">Exchange Rates</p>

      {/* Rate Box */}
      <div className="rate-box">
        1 {exchange?.from} = {exchange?.rate} {exchange?.to}
      </div>

      {/* From / To */}
      <div className="currency-row">

        <div className="currency-block">
          <p>From</p>
          <div className="currency-tag">{exchange?.from}</div>
        </div>

        <div className="currency-block">
          <p>To</p>
          <div className="currency-tag">{exchange?.to}</div>
        </div>

      </div>

      {/* Amount */}
      <div className="amount-section">
        <p>Amount</p>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {/* Result */}
      <div className="result-box">
        {amount
          ? `${amount} ${exchange?.from} = ${(amount * exchange?.rate).toFixed(2)} ${exchange?.to}`
          : "Enter amount to convert"}
      </div>

    </div>
  );
};

export default CurrencyCard;