"use client";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function ResultsSection({ resultData }) {

  if (!resultData) {
    return (
      <div className="empty-state">
        Select filters and click Fetch Data
      </div>
    );
  }

  const macroData =
    resultData.fullData?.macro?.[resultData.indicator] || [];

  if (!macroData.length) {
    return (
      <div className="empty-state">
        No data available
      </div>
    );
  }

  // 🔹 SORT
  const sorted = [...macroData].sort((a, b) => a.year - b.year);

  // 🔥 RANGE FILTER
  let filtered = sorted;

  if (resultData.range === "10") {
    filtered = sorted.slice(-10);
  } else if (resultData.range === "20") {
    filtered = sorted.slice(-20);
  }

  // 🔥 CHECK TYPE
  const isGDP = resultData.indicator === "GDP";

  // 🔥 FORMAT FUNCTION
  const formatValue = (val) => {
    if (isGDP) {
      return (val / 1_000_000_000).toFixed(2) + " B$";
    } else {
      return val.toFixed(2) + " %";
    }
  };

  const formatRaw = (val) => {
    return isGDP ? val / 1_000_000_000 : val;
  };

  // 🔹 SUMMARY
  const latest = filtered[filtered.length - 1];
  const prev = filtered[filtered.length - 2] || latest;

  const change = latest.value - prev.value;
  const percent =
    prev.value !== 0
      ? ((change / prev.value) * 100).toFixed(2)
      : 0;


 

  // 🔥 CHART DATA
  const chartData = {
    labels: filtered.map((item) => item.year),
    datasets: [
      {
        label: resultData.indicator,
        data: filtered.map((item) => formatRaw(item.value)),
        borderWidth: 2,
        tension: 0.3
      }
    ]
  };

  return (
    <div className="results-section">

      {/* SUMMARY */}
      <div className="summary-cards">

        <div className="card">
          <div className="label">Latest</div>
          <div className="value">
            {formatValue(latest.value)}
          </div>
        </div>

        <div className="card">
          <div className="label">Change</div>
          <div className="value">
            {formatValue(change)}
          </div>
        </div>

        <div className="card">
          <div className="label">% Change</div>
          <div className="value">
            {percent}%
          </div>
        </div>

      </div>

      {/* 🔥 DATA NOTE (PUT EXACTLY HERE) */}
  {resultData.indicator === "GDP" && (
    <div className="data-note">
      *The GDP data is nominal GDP
    </div>
  )}

  {resultData.indicator === "GDP_GROWTH" && (
    <div className="data-note">
      *The GDP growth is for real GDP
    </div>
  )}

      {/* CHART */}
      <div className="chart-section">
        <Line data={chartData} />
      </div>

      {/* TABLE */}
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Value</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((item) => (
              <tr key={item._id}>
                <td>{item.year}</td>
                <td>{formatValue(item.value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}