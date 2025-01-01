import React, { useState, useEffect } from "react";
import "./Home.css";
import home_1 from "./../../assets/home_1.png";
import home_2 from "./../../assets/home_2.png";
import home_3 from "./../../assets/home_3.png";

const Home = () => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setNewsData([
        {
          id: 1,
          title: "Local Economy Shows Positive Growth",
          description:
            "The local economy is showing positive signs of recovery as businesses re-open and new opportunities emerge in various sectors.",
          source: "City News",
          category: "Economy",
          readTime: "5 min read",
          imageUrl: home_1,
        },
        {
          id: 2,
          title: "Community Initiative Improves Local Parks",
          description:
            "A new community initiative aims to make local parks more accessible and enjoyable for all residents through innovative design and sustainable practices.",
          source: "Local Gazette",
          category: "Community",
          readTime: "4 min read",
          imageUrl: home_2,
        },
        {
          id: 3,
          title: "New Technology Hub Opens Downtown",
          description:
            "A state-of-the-art tech hub has opened in the heart of downtown, bringing more innovation and job opportunities to the area.",
          source: "Tech Daily",
          category: "Technology",
          readTime: "6 min read",
          imageUrl: home_3,
        },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Stay Informed, Stay Connected with{" "}
            <span class="web-name">Novitale</span>
          </h1>

          <p>
            Discover the stories that matter to your community. Local news
            curated for global citizens.
          </p>
          <div className="hero-buttons">
            <button className="cta-button primary">Get Started</button>
            <button className="cta-button secondary">Learn More</button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Local Sources</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Updates</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Readers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="featured-news">
        <div className="section-header">
          <h2>Featured Stories</h2>
          <button className="view-all-button">View All</button>
        </div>
        <div className="news-cards">
          {isLoading
            ? Array(3)
                .fill(null)
                .map((_, index) => (
                  <div key={index} className="news-card skeleton"></div>
                ))
            : newsData.map((news) => (
                <div key={news.id} className="news-card">
                  <div className="news-card-image">
                    <img src={news.imageUrl} alt={news.title} />
                    <span className="category-tag">{news.category}</span>
                  </div>
                  <div className="news-card-content">
                    <h3>{news.title}</h3>
                    <p>{news.description}</p>
                    <div className="news-card-footer">
                      <span className="source">{news.source}</span>
                      <span className="read-time">{news.readTime}</span>
                    </div>
                    <button className="read-more-button">Read More</button>
                  </div>
                </div>
              ))}
        </div>
      </section>

      {/* Topics Section */}
      {/* <section className="topics-section">
        <h2>Popular Topics</h2>
        <div className="topics-grid">
          {[
            "Technology",
            "Community",
            "Business",
            "Culture",
            "Sports",
            "Health",
          ].map((topic) => (
            <button key={topic} className="topic-button">
              {topic}
            </button>
          ))}
        </div>
      </section> */}

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Stay Updated</h2>
          <p>Get the latest news delivered to your inbox daily</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
