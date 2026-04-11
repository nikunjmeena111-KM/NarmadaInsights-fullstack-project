"use client";

import "./macro.css";

import NavbarMacro from "@/components/macro/NavbarMacro";
import FooterMacro from "@/components/macro/FooterMacro";
import FilterBar from "@/components/macro/FilterBar";
import ResultsSection from "@/components/macro/ResultsSection";

import { useState } from "react";

export default function MacroPage() {
  const [resultData, setResultData] = useState(null);

  return (
    <>
      <NavbarMacro />

      <div className="container">
        <div className="macro-header">
  <h1 className="macro-title">Macro Data</h1>
  <p className="macro-subtitle">
    Explore historical macroeconomic indicators by country — GDP, inflation,
    unemployment, and growth — sourced and updated regularly.
  </p>
</div>

        <FilterBar setResultData={setResultData} />

        <ResultsSection resultData={resultData} />
      </div>

      <FooterMacro />
    </>
  );
}