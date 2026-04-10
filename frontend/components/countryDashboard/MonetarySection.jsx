function formatInflation(value) {
  return (value * 100).toFixed(2) + "%";
}

function formatMoney(value) {
  if (!value) return "N/A";
  return (value / 1e12).toFixed(2) + " Trillion";
}

export default function MonetarySection({ monetary }) {
  return (
    <div className="section">
      <div className="section-header">
        Monetary Data &nbsp;<span className="info-icon">i</span>
      </div>

      <div className="monetary-grid">
        <div>
          <div className="data-table">
            <div className="data-row">
              <span className="data-label">Policy Rate</span>
              <span className="data-value">
                {monetary.policyRate?.toFixed(2)}
              </span>
            </div>

            <div className="data-row">
              <span className="data-label">Inflation</span>
              <span className="data-value">
                {formatInflation(monetary.inflation)}
              </span>
            </div>

            <div className="data-row">
              <span className="data-label">Bond Yield 10Y</span>
              <span className="data-value">
                {monetary.bondYield10Y?.toFixed(2)}
              </span>
            </div>

            <div className="data-row">
              <span className="data-label">Money Supply M2</span>
              <span className="data-value">
                {formatMoney(monetary.moneySupplyM2)}
              </span>
            </div>

            <div className="data-row">
              <span className="data-label">Industrial Production</span>
              <span className="data-value">
                {monetary.industrialProduction?.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="data-footnotes">
            <p>*Money supply M2 is in billion</p>
            <p>*Industrial Production is an index value</p>
            <p>*Remaining data is in %</p>
          </div>
        </div>

        <div className="definitions">
          <p>
            <strong>Inflation</strong>  –Measures the rate at which prices of goods and services increase over time. Used to assess purchasing power and guide monetary policy decisions.
          </p>
          <br />
          <p>
            <strong>Policy Rate</strong> –The interest rate set by the central bank to control money supply and inflation. Used to influence borrowing, spending, and overall economic activity.


          </p>
           <br />
          <p>
            <strong>Industrial Production</strong> – Measures the output of manufacturing, mining, and utilities sectors. Used to track economic growth and industrial performance.
          </p>
           <br />
          <p>
            <strong>Money Supply M2</strong> – Total amount of money in circulation including cash, savings, and deposits. Used to analyze liquidity and inflationary pressures in the economy.
          </p>
           <br />
          <p>
            <strong>Bond Yield 10Y</strong> – Represents the return earned on government bonds over a fixed period. Used as an indicator of market confidence and long-term interest rate trends.
          </p>
        </div>
      </div>
    </div>
  );
}