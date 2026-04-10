function getClass(value) {
  return value >= 0 ? "stock-card green" : "stock-card red";
}

function formatPercent(value) {
  return value.toFixed(2) + "%";
}

export default function StockSection({ stock }) {
  return (
    <div className="section">
      <div className="section-header">
        Stock Market Insight &nbsp;<span className="info-icon">i</span>
      </div>

      <div className="stock-cards">
        <div className={getClass(stock.sp500.changePercent)}>
          <div className="stock-name">S&P 500</div>
          <div className="stock-change">
            {formatPercent(stock.sp500.changePercent)}
          </div>
        </div>

        <div className={getClass(stock.nasdaq.changePercent)}>
          <div className="stock-name">Nasdaq</div>
          <div className="stock-change">
            {formatPercent(stock.nasdaq.changePercent)}
          </div>
        </div>

        <div className={getClass(stock.dow.changePercent)}>
          <div className="stock-name">Dow Jones</div>
          <div className="stock-change">
            {formatPercent(stock.dow.changePercent)}
          </div>
        </div>
      </div>

      <p className="stock-footnote">
        *Figures shown reflect the price action of major U.S. Market ETFs. While these are tradable instruments and not the "spot" index values themselves, they mirror the original market movements with high precision and are the standard industry proxy for technical and sentiment analysis.
      </p>
    </div>
  );
}