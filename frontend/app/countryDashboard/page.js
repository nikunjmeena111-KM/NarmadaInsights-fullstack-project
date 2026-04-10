import "./countryDashboard.css";

import NavbarCD from "@/components/countryDashboard/NavbarCD";
import FooterCD from "@/components/countryDashboard/FooterCD";

import HeroSection from "@/components/countryDashboard/HeroSection";
import MonetarySection from "@/components/countryDashboard/MonetarySection";
import StockSection from "@/components/countryDashboard/StockSection";
import NewsSection from "@/components/countryDashboard/NewsSection";

async function getCountryData(country) {
  const res = await fetch(
    `http://localhost:8000/api/v1/dashboard?country=${country}`,
    { cache: "no-store" }
  );

  const json = await res.json();
  return json.data.data;
}

export default async function CountryDashboard(props) {
  // ✅ FIX: unwrap searchParams
  const searchParams = await props.searchParams;

  const country = searchParams?.country || "IT";

  const data = await getCountryData(country);

  const staticData = data.static;
  const dynamicData = data.dynamic;

  return (
    <>
      <NavbarCD />

      <HeroSection
        country={staticData.country}
        exchange={staticData.exchange}
      />

      <MonetarySection monetary={staticData.monetary} />

      <StockSection stock={dynamicData.stock} />

      <NewsSection news={staticData.news.news} />

      <FooterCD />
    </>
  );
}