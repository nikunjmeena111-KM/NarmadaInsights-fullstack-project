"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

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

export default function HeroSection({ country, exchange }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleSelect = (code) => {
    setOpen(false);
    router.push(`/countryDashboard?country=${code}`);
  };

  return (
    <div className="hero">
      <div className="hero-left">

        {/* DROPDOWN BUTTON */}
        <div
          className="country-badge"
          onClick={() => setOpen(!open)}
        >
          <img
            src={country.flag}
            alt={country.name}
            style={{ width: "20px", height: "14px", objectFit: "cover" }}
          />
          {country.name} ▾
        </div>

        {/* DROPDOWN LIST */}
        {open && (
          <div className="country-dropdown">
            {countries.map((c) => (
              <div
                key={c.code}
                className="country-option"
                onClick={() => handleSelect(c.code)}
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

        <div className="country-name">{country.name}</div>

        <div className="fx-rate">
          <strong>{exchange.rate}</strong> {exchange.to} / {exchange.from}
        </div>

      </div>

      <div className="hero-desc">
        Monetary policy and economic data provide key insights into a country's financial stability and growth trends. Central banks use tools like interest rates and money supply to control inflation and support economic activity. Indicators such as inflation, policy rate, and industrial production help assess overall economic health. Together, these metrics guide investors, businesses, and policymakers in making informed financial decisions. Monitoring these trends is essential for understanding both short-term movements and long-term economic direction.
      </div>
    </div>
  );
}