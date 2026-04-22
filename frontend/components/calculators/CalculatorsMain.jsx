"use client";

import { useState } from "react";
import NavbarCalculators from "./NavbarCalculators";
import FooterCalculators from "./FooterCalculators";

export default function CalculatorsMain() {

  // RESULTS
  const [countryResult, setCountryResult] = useState(null);
  const [investmentResult, setInvestmentResult] = useState(null);
  const [manualResult, setManualResult] = useState(null);
  const [ciResult, setCiResult] = useState(null);
  const [emiResult, setEmiResult] = useState(null);
  const [exchangeResult, setExchangeResult] = useState(null);

  // STATES
  const [countryData, setCountryData] = useState({ amount: "", rate: 0.06, start: 2024, target: 2034 });
  const [investmentData, setInvestmentData] = useState({ investmentType: "equity", residency: "resident", amount: 200000, expectedReturn: 12, years: 2 });
  const [manualData, setManualData] = useState({ amount: "", rate: "", years: "" });
  const [ciData, setCiData] = useState({ p: "", r: "", t: "" });
  const [emiData, setEmiData] = useState({ p: "", r: "", n: "" });
  const [exchangeData, setExchangeData] = useState({ amount: 100, from: "USD", to: "INR" });

  // 🔥 API FUNCTIONS

  const calcCountry = async () => {
    const res = await fetch("http://localhost:8000/api/v1/calculators/inflation/country", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        country: "india",
        amount: Number(countryData.amount),
        years: countryData.target - countryData.start,
        targetYear: Number(countryData.target),
      }),
    });
    const json = await res.json();
    setCountryResult(json?.data || json?.result);
  };

  const calcManual = async () => {
    const res = await fetch("http://localhost:8000/api/v1/calculators/inflation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: Number(manualData.amount),
        rate: Number(manualData.rate),
        years: Number(manualData.years),
      }),
    });
    const json = await res.json();
    setManualResult(json?.data || json?.result);
  };

  const calcInvestment = async () => {
  try {
    const res = await fetch(
      "http://localhost:8000/api/v1/calculators/investment",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          investmentType: investmentData.investmentType,
          residency: investmentData.residency,
          amount: Number(investmentData.amount),
          expectedReturn: Number(investmentData.expectedReturn),
          years: Number(investmentData.years),
          transactionType: "buy",
        }),
      }
    );

    const json = await res.json();

    // 🔥 extract only what UI needs
    setInvestmentResult({
      finalValue: json.data.returns.finalValue,
      netProfit: json.data.final.netProfitAfterTax,
      charges: json.data.totalCharges,
    });

  } catch (err) {
    console.error(err);
  }
};

  const calcCI = () => {
    const res = Number(ciData.p) * Math.pow(1 + Number(ciData.r) / 100, Number(ciData.t));
    setCiResult(res);
  };

  const calcEMI = () => {
    const p = Number(emiData.p);
    const r = Number(emiData.r) / 12 / 100;
    const n = Number(emiData.n);
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmiResult(emi);
  };

  const calcEx = async () => {
    const res = await fetch("http://localhost:8000/api/v1/dashboard?country=IN");
    const json = await res.json();
    const rate = json?.data?.exchange?.rate || 83.5;

    const result =
      exchangeData.to === "INR"
        ? exchangeData.amount * rate
        : exchangeData.amount / rate;

    setExchangeResult(result);
  };

  return (
    <>
      <NavbarCalculators />

      <div className="page">
        <div className="page-header">
          <h1>Financial Tools</h1>
          <p>
            Explore powerful financial tools designed to simplify complex calculations and support smarter decision-making.
            From currency conversion to economic insights, access accurate and real-time data in one place.
            Understand financial trends, compare values, and make informed choices with ease.
            Built for clarity, speed, and practical use in everyday financial analysis.
          </p>
        </div>

        <div className="calc-grid">

          {/* COUNTRY */}
          <div className="calc-card">
            <h2>Country Inflation</h2>

            <div className="form-row">
              <div className="form-group">
                <label>Country</label>
                <select onChange={(e)=>setCountryData({...countryData,rate:e.target.value})}>
                  <option value="0.06">India (~6%)</option>
                  <option value="0.02">USA (~2%)</option>
                </select>
              </div>

              <div className="form-group">
                <label>Amount</label>
                <input type="number" onChange={(e)=>setCountryData({...countryData,amount:e.target.value})}/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Current Year</label>
                <input type="number" defaultValue={2024} onChange={(e)=>setCountryData({...countryData,start:e.target.value})}/>
              </div>

              <div className="form-group">
                <label>Target Year</label>
                <input type="number" defaultValue={2034} onChange={(e)=>setCountryData({...countryData,target:e.target.value})}/>
              </div>
            </div>

            <button className="btn-calc" onClick={calcCountry}>Calculate Impact</button>

            {countryResult && (
              <div className="result-display">
                <div className="result-val">${Number(countryResult).toLocaleString(undefined,{minimumFractionDigits:2})}</div>
              </div>
            )}
          </div>

          {/* INVESTMENT */}
          <div className="calc-card">
            <h2>Investment Fee</h2>

            <div className="form-row">
              <div className="form-group">
                <label>Investment Type</label>
                <select
  value={investmentData.investmentType}
  onChange={(e) =>
    setInvestmentData({
      ...investmentData,
      investmentType: e.target.value,
    })
  }
>
  <option value="equity">Equity</option>
  <option value="fno">F&O</option>
  <option value="mutualFund">Mutual Fund</option>
  <option value="fixedIncome">Fixed Income</option>
  <option value="gold">Gold</option>
</select>
              </div>

              <div className="form-group">
                <label>Residency</label>
                <select onChange={(e)=>setInvestmentData({...investmentData,residency:e.target.value})}>
                  <option value="resident">Resident</option>
                  <option value="nri">NRI</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Amount</label>
                <input type="number" defaultValue={200000} onChange={(e)=>setInvestmentData({...investmentData,amount:e.target.value})}/>
              </div>

              <div className="form-group">
                <label>Return (%)</label>
                <input type="number" defaultValue={12} onChange={(e)=>setInvestmentData({...investmentData,expectedReturn:e.target.value})}/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Years</label>
                <input type="number" defaultValue={2} onChange={(e)=>setInvestmentData({...investmentData,years:e.target.value})}/>
              </div>

              <div className="form-group">
                <label>Transaction</label>
                <select
  value={investmentData.transactionType || "buy"}
  onChange={(e) =>
    setInvestmentData({
      ...investmentData,
      transactionType: e.target.value,
    })
  }
>
  <option value="buy">Buy</option>
  <option value="sell">Sale</option>
</select>
              </div>
            </div>

            <button className="btn-calc" onClick={calcInvestment}>Calculate Net Outcome</button>

            {investmentResult && (
  <div className="result-display">

    <div className="result-val">
      {investmentResult.finalValue.toLocaleString()}
    </div>

    <p style={{ fontSize: "12px", marginTop: "8px" }}>
      Net Profit: {investmentResult.netProfit.toLocaleString()}
    </p>

    <p style={{ fontSize: "12px", color: "#666" }}>
      Charges: {investmentResult.charges}
    </p>

  </div>
)}
          </div>

          {/* MANUAL */}
          <div className="calc-card">
            <h2>Manual Inflation</h2>

            <div className="form-group">
              <label>Initial Amount</label>
              <input type="number" onChange={(e)=>setManualData({...manualData,amount:e.target.value})}/>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Inflation Rate (%)</label>
                <input type="number" onChange={(e)=>setManualData({...manualData,rate:e.target.value})}/>
              </div>

              <div className="form-group">
                <label>Years</label>
                <input type="number" onChange={(e)=>setManualData({...manualData,years:e.target.value})}/>
              </div>
            </div>

            <button className="btn-calc" onClick={calcManual}>Calculate Future Value</button>

            {manualResult && (
              <div className="result-display">
                <div className="result-val">${Number(manualResult).toLocaleString(undefined,{minimumFractionDigits:2})}</div>
              </div>
            )}
          </div>

          {/* COMPOUND */}
          <div className="calc-card">
            <h2>Compound Interest</h2>

            <div className="form-group">
              <label>Principal Amount</label>
              <input type="number" onChange={(e)=>setCiData({...ciData,p:e.target.value})}/>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Rate (%)</label>
                <input type="number" onChange={(e)=>setCiData({...ciData,r:e.target.value})}/>
              </div>

              <div className="form-group">
                <label>Time (Years)</label>
                <input type="number" onChange={(e)=>setCiData({...ciData,t:e.target.value})}/>
              </div>
            </div>

            <button className="btn-calc" onClick={calcCI}>Calculate Interest</button>

            {ciResult && (
              <div className="result-display">
                <div className="result-val">${Number(ciResult).toLocaleString(undefined,{minimumFractionDigits:2})}</div>
              </div>
            )}
          </div>

          {/* EMI */}
          <div className="calc-card">
            <h2>EMI Calculator</h2>

            <div className="form-group">
              <label>Loan Amount</label>
              <input type="number" onChange={(e)=>setEmiData({...emiData,p:e.target.value})}/>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Rate (%)</label>
                <input type="number" onChange={(e)=>setEmiData({...emiData,r:e.target.value})}/>
              </div>

              <div className="form-group">
                <label>Tenure (Months)</label>
                <input type="number" onChange={(e)=>setEmiData({...emiData,n:e.target.value})}/>
              </div>
            </div>

            <button className="btn-calc" onClick={calcEMI}>Calculate EMI</button>

            {emiResult && (
              <div className="result-display">
                <div className="result-val">${Number(emiResult).toLocaleString(undefined,{minimumFractionDigits:2})} /mo</div>
              </div>
            )}
          </div>

          {/* EXCHANGE */}
          <div className="calc-card">
            <h2>Exchange Rate</h2>

            <div className="form-group">
              <label>Amount</label>
              <input type="number" defaultValue={100} onChange={(e)=>setExchangeData({...exchangeData,amount:e.target.value})}/>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>From</label>
                <select onChange={(e)=>setExchangeData({...exchangeData,from:e.target.value})}>
                  <option>USD</option>
                  <option>INR</option>
                </select>
              </div>

              <div className="form-group">
                <label>To</label>
                <select onChange={(e)=>setExchangeData({...exchangeData,to:e.target.value})}>
                  <option>INR</option>
                  <option>USD</option>
                </select>
              </div>
            </div>

            <button className="btn-calc" onClick={calcEx}>Convert Currency</button>

            {exchangeResult && (
              <div className="result-display">
                <div className="result-val">
                  {Number(exchangeResult).toLocaleString(undefined,{maximumFractionDigits:2})} {exchangeData.to}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      <FooterCalculators />
    </>
  );
}