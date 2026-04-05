"use client";

const NewsSection = ({ news }) => {
  return (
    <div className="news-section">
      <h2 className="news-heading">News</h2>

      <div className="news-grid">
        {news?.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="news-card"
            onClick={() => window.open(item.url, "_blank")}
          >
            <img
              src={item.imageUrl}
              alt="news"
              className="news-image"
            />

            {/* Overlay */}
            <div className="news-overlay">
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;