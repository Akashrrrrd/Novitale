import React, { useState } from "react";
import "./LocalNews.css";
import news_1 from "./../../assets/news_1.png";
import news_2 from "./../../assets/news_2.png";
import news_3 from "./../../assets/news_3.png";
import news_4 from "./../../assets/news_4.png";
import news_5 from "./../../assets/news_5.png";
import news_6 from "./../../assets/news_6.png";
import news_7 from "./../../assets/news_7.png";
import news_8 from "./../../assets/news_8.png";

const LocalNews = () => {
  // Manually set news data
  const newsArticles = [
    {
      image: news_1,
      title: "Community Park Renovation Completed",
      description:
        "The much-anticipated renovation of the community park has been completed, offering new amenities and a modernized space for residents.",
      url: "https://example.com/community-park-renovation",
    },
    {
      image: news_2,
      title: "Local Library Hosts Summer Reading Program",
      description:
        "The local library is inviting readers of all ages to join their summer reading program with exciting rewards.",
      url: "https://example.com/summer-reading-program",
    },
    {
      image: news_3,
      title: "Farmers Market Opens Downtown",
      description:
        "The weekly farmers market has opened downtown, showcasing fresh produce and handmade goods from local vendors.",
      url: "https://example.com/farmers-market",
    },
    {
      image: news_4,
      title: "New Art Exhibition at City Gallery",
      description:
        "A new art exhibition featuring local artists has opened at the city gallery, attracting art enthusiasts from across the region.",
      url: "https://example.com/art-exhibition",
    },
    {
      image: news_5,
      title: "City Marathon Scheduled for Next Month",
      description:
        "The annual city marathon is set to take place next month, encouraging fitness and community spirit.",
      url: "https://example.com/city-marathon",
    },
    {
      image: news_6,
      title: "Tech Workshop for Students Announced",
      description:
        "A hands-on tech workshop for students has been announced, aiming to inspire the next generation of innovators.",
      url: "https://example.com/tech-workshop",
    },
    {
      image: news_7,
      title: "Local High School Wins Championship",
      description:
        "The local high school soccer team has won the state championship, bringing pride to the community.",
      url: "https://example.com/high-school-championship",
    },
    {
      image: news_8,
      title: "Downtown Theater Reopens After Renovation",
      description:
        "The historic downtown theater has reopened after extensive renovations, offering a mix of classic and modern performances.",
      url: "https://example.com/theater-reopening",
    },
  ];

  return (
    <div className="local-news-container">
      <h1 className="local-news-title">Local News</h1>
      {newsArticles.length > 0 ? (
        <div className="news-grid">
          {newsArticles.map((article, index) => (
            <div key={index} className="news-card">
              <img
                src={article.image}
                alt={article.title}
                className="news-image"
              />
              <h2 className="news-heading">{article.title}</h2>
              <p className="news-description">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-link"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-news-message">No local news available right now.</p>
      )}
    </div>
  );
};

export default LocalNews;
