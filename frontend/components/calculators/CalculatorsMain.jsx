"use client";

import { useState, useEffect } from "react";
import NavbarCalculators from "./NavbarCalculators";
import FooterCalculators from "./FooterCalculators";

export default function CalculatorsMain() {

  // ================= STATES =================
  const [countryResult, setCountryResult] = useState(null);
  const [investmentResult, setInvestmentResult] = useState(null);
  const [manualResult, setManualResult] = useState(null);
  const [ciResult, setCiResult] = useState(null);
  const [emiResult, setEmiResult] = useState(null);
  const [exchangeResult, setExchangeResult] = useState(null);

  const [countryData, setCountryData] = useState({
    country: "india",
    amount: "",
    years: "",
    targetYear: "",
  });

  const [investmentData, setInvestmentData] = useState({
    investmentType: "equity",
    residency: "resident",
    amount: 200000,
    expectedReturn: 12,
    years: 2,
    transactionType: "buy",
  });

  const [manualData, setManualData] = useState({
    amount: "",
    rate: "",
    years: "",
  });

  const [ciData, setCiData] = useState({ p: "", r: "", t: "" });
  const [emiData, setEmiData] = useState({ p: "", r: "", n: "" });

  const [exchangeData, setExchangeData] = useState({
    amount: 100,
    from: "USD",
    to: "INR",
  });

  // ================= DROPDOWN STATES =================
  const [openCountry, setOpenCountry] = useState(false);
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);

  const countries = [
  { code: "US", name: "United States" },
  { code: "CN", name: "China" },
  { code: "JP", name: "Japan" },
  { code: "DE", name: "Germany" },
  { code: "IN", name: "India" },
  { code: "GB", name: "United Kingdom" },
  { code: "FR", name: "France" },
  { code: "IT", name: "Italy" },
  { code: "BR", name: "Brazil" },
  { code: "CA", name: "Canada" },
  { code: "KR", name: "South Korea" },
  { code: "RU", name: "Russia" },
  { code: "AU", name: "Australia" },
  { code: "ES", name: "Spain" },
  { code: "MX", name: "Mexico" },
  { code: "NL", name: "Netherlands" },
  { code: "TR", name: "Turkey" },
  { code: "CH", name: "Switzerland" },
  { code: "SG", name: "Singapore" },
  { code: "ZA", name: "South Africa" }
];

 const currencies = [
  { code: "USD", name: "US Dollar", country: "us" },
  { code: "CNY", name: "Chinese Yuan", country: "cn" },
  { code: "JPY", name: "Japanese Yen", country: "jp" },
  { code: "EUR", name: "Euro", country: "eu" },
  { code: "INR", name: "Indian Rupee", country: "in" },
  { code: "GBP", name: "British Pound", country: "gb" },
  { code: "AUD", name: "Australian Dollar", country: "au" },
  { code: "CAD", name: "Canadian Dollar", country: "ca" },
  { code: "KRW", name: "South Korean Won", country: "kr" },
  { code: "RUB", name: "Russian Ruble", country: "ru" },
  { code: "BRL", name: "Brazilian Real", country: "br" },
  { code: "MXN", name: "Mexican Peso", country: "mx" },
  { code: "IDR", name: "Indonesian Rupiah", country: "id" },
  { code: "TRY", name: "Turkish Lira", country: "tr" },
  { code: "SAR", name: "Saudi Riyal", country: "sa" },
  { code: "CHF", name: "Swiss Franc", country: "ch" },
  { code: "ZAR", name: "South African Rand", country: "za" },
  { code: "SEK", name: "Swedish Krona", country: "se" },
  { code: "NOK", name: "Norwegian Krone", country: "no" },
  { code: "DKK", name: "Danish Krone", country: "dk" },
  { code: "PLN", name: "Polish Zloty", country: "pl" },
  { code: "THB", name: "Thai Baht", country: "th" },
  { code: "SGD", name: "Singapore Dollar", country: "sg" },
  { code: "MYR", name: "Malaysian Ringgit", country: "my" },
  { code: "AED", name: "UAE Dirham", country: "ae" },
  { code: "ARS", name: "Argentine Peso", country: "ar" },
  { code: "CLP", name: "Chilean Peso", country: "cl" },
  { code: "COP", name: "Colombian Peso", country: "co" },
  { code: "VND", name: "Vietnamese Dong", country: "vn" },
  { code: "EGP", name: "Egyptian Pound", country: "eg" },
];

const currencyMeta = {
  USD: { code: "us", symbol: "$" },
  INR: { code: "in", symbol: "₹" },
  EUR: { code: "eu", symbol: "€" },
  GBP: { code: "gb", symbol: "£" },
  JPY: { code: "jp", symbol: "¥" },
};

  useEffect(() => {
    const close = () => {
      setOpenCountry(false);
      setOpenFrom(false);
      setOpenTo(false);
    };
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  // ================= API =================

  const calcCountry = async () => {
    const res = await fetch("http://localhost:8000/api/v1/calculators/inflation/country", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        country: countryData.country,
        amount: Number(countryData.amount),
        years: Number(countryData.years),
        targetYear: Number(countryData.targetYear),
      }),
    });
    const json = await res.json();
    setCountryResult(json?.data?.futureValue || json?.data || 0);
  };

  const calcInvestment = async () => {
    const res = await fetch("http://localhost:8000/api/v1/calculators/investment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        investmentType: investmentData.investmentType,
        residency: investmentData.residency,
        amount: Number(investmentData.amount),
        expectedReturn: Number(investmentData.expectedReturn),
        years: Number(investmentData.years),
        transactionType: investmentData.transactionType,
      }),
    });

    const json = await res.json();
    const data = json.data;

    setInvestmentResult({
      finalValue: data.returns.finalValue,
      netProfit: data.final.netProfitAfterTax,
      charges: data.totalCharges,
    });
  };

  const calcManual = async () => {
  try {
    const res = await fetch(
      "http://localhost:8000/api/v1/calculators/inflation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: Number(manualData.amount),
          rate: Number(manualData.rate),
          years: Number(manualData.years),
        }),
      }
    );

    const json = await res.json();

    const data = json?.data;

    setManualResult({
      futureValue: data?.futureValue || 0,
      loss: data?.purchasingPowerLoss || 0,
    });

  } catch (err) {
    console.error("Manual Inflation Error:", err);
  }
};

  const calcCI = () => {
    const res =
      Number(ciData.p) *
      Math.pow(1 + Number(ciData.r) / 100, Number(ciData.t));
    setCiResult(res);
  };

  const calcEMI = () => {
    const p = Number(emiData.p);
    const r = Number(emiData.r) / 12 / 100;
    const n = Number(emiData.n);

    const emi =
      (p * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    setEmiResult(emi);
  };

 const calcEx = async () => {
  try {
    const res = await fetch(
      `http://localhost:8000/api/v1/exchangerates?from=${exchangeData.from}&to=${exchangeData.to}`
    );

    const json = await res.json();

    const rate = json?.data?.rate?.rate;

    if (!rate) {
      console.error("No rate found");
      return;
    }

    const result = Number(exchangeData.amount) * rate;

    setExchangeResult(result);

  } catch (err) {
    console.error("Exchange Error:", err);
  }
};

  // ================= UI =================

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

          {/* ================= COUNTRY ================= */}
          <div className="calc-card">
            <h2>Country Inflation</h2>

            <div className="form-row">

              {/* DROPDOWN */}
             <div className="form-group" style={{ position: "relative" }}>
  <label>Country</label>

  {/* BUTTON */}
  <div
    className="country-select-btn"
    onClick={(e) => {
      e.stopPropagation();
      setOpenCountry(!openCountry);
    }}
  >
    <div className="country-left">
      <img
        src={`https://flagcdn.com/w40/${
          countries.find(c => c.name === countryData.country)?.code.toLowerCase() || "in"
        }.png`}
        alt="flag"
      />
      <span>
        {countryData.country || "India"}
      </span>
    </div>

    <span className="dropdown-arrow">▾</span>
  </div>

  {/* DROPDOWN */}
  {openCountry && (
    <div className="country-dropdown-panel">
      {countries.map((c) => (
        <div
          key={c.code}
          className="country-item"
          onClick={() => {
            setCountryData({
              ...countryData,
              country: c.name, // ✅ important (backend expects name)
            });
            setOpenCountry(false);
          }}
        >
          <img
            src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`}
            alt={c.name}
          />
          <span>{c.name}</span>
        </div>
      ))}
    </div>
  )}
</div>

              <div className="form-group">
                <label>Amount</label>
                <input type="number" onChange={(e)=>setCountryData({...countryData,amount:e.target.value})}/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Years</label>
                <input type="number" onChange={(e)=>setCountryData({...countryData,years:e.target.value})}/>
              </div>

              <div className="form-group">
                <label>Target Year</label>
                <input type="number" onChange={(e)=>setCountryData({...countryData,targetYear:e.target.value})}/>
              </div>
            </div>

            <button className="btn-calc" onClick={calcCountry}>Calculate Impact</button>

            {countryResult && (
              <div className="result-display">
                <div className="result-val">{Number(countryResult).toLocaleString()}</div>
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
      ₹{investmentResult.finalValue.toLocaleString()}
    </div>

    <p style={{ fontSize: "12px", marginTop: "8px" }}>
      Net Profit: ₹{investmentResult.netProfit.toLocaleString()}
    </p>

    <p style={{ fontSize: "12px", color: "#666" }}>
      Charges: ₹{investmentResult.charges}
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
    <div className="result-val">
      ₹{manualResult.futureValue.toLocaleString()}
    </div>

    <p style={{ fontSize: "13px", marginTop: "8px" }}>
      Purchasing Power Loss: ₹{manualResult.loss.toLocaleString()}
    </p>
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
                <div className="result-val">₹{Number(ciResult).toLocaleString(undefined,{minimumFractionDigits:2})}</div>
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
                <div className="result-val">₹{Number(emiResult).toLocaleString(undefined,{minimumFractionDigits:2})} /mo</div>
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
                <div className="form-group" style={{ position: "relative" }}>
  <label>From</label>

  <div
    className="country-select-btn"
    onClick={(e) => {
      e.stopPropagation();
      setOpenFrom(!openFrom);
    }}
  >
    <div className="country-left">
      <img
        src={`https://flagcdn.com/w40/${
          currencies.find(c => c.code === exchangeData.from)?.country || "us"
        }.png`}
      />
      <span>{exchangeData.from}</span>
    </div>

    <span className="dropdown-arrow">▾</span>
  </div>

  {openFrom && (
    <div className="country-dropdown-panel">
      {currencies.map((c) => (
        <div
          key={c.code}
          className="country-item"
          onClick={() => {
            setExchangeData({
              ...exchangeData,
              from: c.code,
            });
            setOpenFrom(false);
          }}
        >
          <img src={`https://flagcdn.com/w40/${c.country}.png`} />
          <span>{c.name}</span>
        </div>
      ))}
    </div>
  )}
</div>
              </div>

              <div className="form-group">
                <div className="form-group" style={{ position: "relative" }}>
  <label>To</label>

  <div
    className="country-select-btn"
    onClick={(e) => {
      e.stopPropagation();
      setOpenTo(!openTo);
    }}
  >
    <div className="country-left">
      <img
        src={`https://flagcdn.com/w40/${
          currencies.find(c => c.code === exchangeData.to)?.country || "us"
        }.png`}
      />
      <span>{exchangeData.to}</span>
    </div>

    <span className="dropdown-arrow">▾</span>
  </div>

  {openTo && (
    <div className="country-dropdown-panel">
      {currencies.map((c) => (
        <div
          key={c.code}
          className="country-item"
          onClick={() => {
            setExchangeData({
              ...exchangeData,
              to: c.code,
            });
            setOpenTo(false);
          }}
        >
          <img src={`https://flagcdn.com/w40/${c.country}.png`} />
          <span>{c.name}</span>
        </div>
      ))}
    </div>
  )}
</div>
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