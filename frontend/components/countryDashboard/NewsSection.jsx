"use client";

export default function NewsSection({ news }) {
  return (
    <div className="section">
      <div className="section-header">News</div>

      <div className="news-grid">
        {news.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="news-card"
            onClick={() => window.open(item.url, "_blank")}
          >
            <img src={item.imageUrl} alt="news" />

            <div className="news-card-overlay">
              <span className="news-title">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}