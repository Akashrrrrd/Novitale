import React, { useState } from "react";
import {
  MonitorSmartphone,
  Heart,
  BarChart,
  Tv,
  Trophy,
  Plane,
  GraduationCap,
  Microscope,
  Vote,
  Leaf,
  Scissors,
  Utensils,
  Gamepad2,
  Music,
  DollarSign,
} from "lucide-react";
import "./Categories.css";
import categories_1 from "./../../assets/categories_1.png";
import categories_2 from "./../../assets/categories_2.png";
import categories_3 from "./../../assets/categories_3.png";
import categories_4 from "./../../assets/categories_4.png";
import categories_5 from "./../../assets/categories_5.png";
import categories_6 from "./../../assets/categories_6.png";
import categories_7 from "./../../assets/categories_7.png";
import categories_8 from "./../../assets/categories_8.png";
import categories_9 from "./../../assets/categories_9.png";
import categories_10 from "./../../assets/categories_10.png";
import categories_11 from "./../../assets/categories_11.png";
import categories_12 from "./../../assets/categories_12.png";
import categories_13 from "./../../assets/categories_13.png";
import categories_14 from "./../../assets/categories_14.png";
import categories_15 from "./../../assets/categories_15.png";
import categories_16 from "./../../assets/categories_16.png";
import categories_17 from "./../../assets/categories_17.png";
import categories_18 from "./../../assets/categories_18.png";
import categories_19 from "./../../assets/categories_19.png";
import categories_20 from "./../../assets/categories_20.png";
import categories_21 from "./../../assets/categories_21.png";
import categories_22 from "./../../assets/categories_22.png";
import categories_23 from "./../../assets/categories_23.png";
import categories_24 from "./../../assets/categories_24.png";
import categories_25 from "./../../assets/categories_25.png";
import categories_26 from "./../../assets/categories_26.png";
import categories_27 from "./../../assets/categories_27.png";
import categories_28 from "./../../assets/categories_28.png";
import categories_29 from "./../../assets/categories_29.png";
import categories_30 from "./../../assets/categories_30.png";
import categories_31 from "./../../assets/categories_31.png";
import categories_32 from "./../../assets/categories_32.png";
import categories_33 from "./../../assets/categories_33.png";
import categories_34 from "./../../assets/categories_34.png";
import categories_35 from "./../../assets/categories_35.png";
import categories_36 from "./../../assets/categories_36.png";
import categories_37 from "./../../assets/categories_37.png";
import categories_38 from "./../../assets/categories_38.png";
import categories_39 from "./../../assets/categories_39.png";
import categories_40 from "./../../assets/categories_40.png";
import categories_41 from "./../../assets/categories_41.png";
import categories_42 from "./../../assets/categories_42.png";
import categories_43 from "./../../assets/categories_43.png";
import categories_44 from "./../../assets/categories_44.png";
import categories_45 from "./../../assets/categories_45.png";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    { id: 1, name: "Technology", icon: MonitorSmartphone },
    { id: 2, name: "Health", icon: Heart },
    { id: 3, name: "Business", icon: BarChart },
    { id: 4, name: "Entertainment", icon: Tv },
    { id: 5, name: "Sports", icon: Trophy },
    { id: 6, name: "Travel", icon: Plane },
    { id: 7, name: "Education", icon: GraduationCap },
    { id: 8, name: "Science", icon: Microscope },
    { id: 9, name: "Politics", icon: Vote },
    { id: 10, name: "Environment", icon: Leaf },
    { id: 11, name: "Fashion", icon: Scissors },
    { id: 12, name: "Food", icon: Utensils },
    { id: 13, name: "Gaming", icon: Gamepad2 },
    { id: 14, name: "Music", icon: Music },
    { id: 15, name: "Finance", icon: DollarSign },
  ];

  const newsData = {
    Technology: [
      {
        title: "AI Breakthroughs in 2025",
        description: "Discover the latest advancements in AI.",
        image: categories_1,
      },
      {
        title: "Top Tech Gadgets of the Year",
        description: "A roundup of the best gadgets.",
        image: categories_2,
      },
      {
        title: "How 5G is Changing the World",
        description: "Impacts of 5G on industries.",
        image: categories_3,
      },
    ],
    Health: [
      {
        title: "Fitness Trends for 2025",
        description: "The latest trends in health and fitness.",
        image: categories_4,
      },
      {
        title: "New Research on Mental Health",
        description: "Findings on mental well-being.",
        image: categories_5,
      },
      {
        title: "Tips for a Balanced Diet",
        description: "Easy ways to improve your diet.",
        image: categories_6,
      },
    ],
    Business: [
      {
        title: "Stock Market Trends",
        description: "The latest on the stock market.",
        image: categories_7,
      },
      {
        title: "The Rise of Startups",
        description: "How startups are disrupting industries.",
        image: categories_8,
      },
      {
        title: "Tips for Successful Investing",
        description: "Strategies for smart investments.",
        image: categories_9,
      },
    ],
    Entertainment: [
      {
        title: "Upcoming Blockbusters in 2025",
        description: "Movies to look out for this year.",
        image: categories_10,
      },
      {
        title: "Streaming Wars Update",
        description: "How platforms are competing for viewership.",
        image: categories_11,
      },
      {
        title: "Top Music Releases This Month",
        description: "The best new albums to check out.",
        image: categories_12,
      },
    ],
    Sports: [
      {
        title: "Highlights of the Football Season",
        description: "The best moments in football.",
        image: categories_13,
      },
      {
        title: "Tennis Grand Slam Winners",
        description: "Recap of the year's grand slam events.",
        image: categories_14,
      },
      {
        title: "Top Performances in Athletics",
        description: "Record-breaking performances in athletics.",
        image: categories_15,
      },
    ],
    Travel: [
      {
        title: "Top Destinations for 2025",
        description: "Explore the best places to visit this year.",
        image: categories_16,
      },
      {
        title: "Travel Tips for Solo Adventurers",
        description: "Make the most of your solo trips.",
        image: categories_17,
      },
      {
        title: "Budget-Friendly Travel Ideas",
        description: "Affordable travel destinations and tips.",
        image: categories_18,
      },
    ],
    Education: [
      {
        title: "Top Online Courses for 2025",
        description: "Learn new skills with these courses.",
        image: categories_19,
      },
      {
        title: "Study Abroad Opportunities",
        description: "Scholarship and study programs for students.",
        image: categories_20,
      },
      {
        title: "Innovations in E-Learning",
        description: "How technology is transforming education.",
        image: categories_21,
      },
    ],
    Science: [
      {
        title: "Space Exploration Updates",
        description: "Discoveries and missions in space exploration.",
        image: categories_22,
      },
      {
        title: "Breakthroughs in Renewable Energy",
        description: "Advancements in sustainable energy solutions.",
        image: categories_23,
      },
      {
        title: "The Future of Robotics",
        description: "How robots are shaping the future.",
        image: categories_24,
      },
    ],
    Politics: [
      {
        title: "Election Updates 2025",
        description: "The latest news from the political world.",
        image: categories_25,
      },
      {
        title: "New Policies and Their Impact",
        description: "Analyzing recent political decisions.",
        image: categories_26,
      },
      {
        title: "Global Political Alliances",
        description: "Changes in international relations.",
        image: categories_27,
      },
    ],
    Environment: [
      {
        title: "Efforts to Combat Climate Change",
        description: "Global initiatives for a sustainable future.",
        image: categories_28,
      },
      {
        title: "Protecting Endangered Species",
        description: "Steps being taken to save wildlife.",
        image: categories_29,
      },
      {
        title: "Advancements in Recycling",
        description: "Innovative recycling techniques.",
        image: categories_30,
      },
    ],
    Fashion: [
      {
        title: "Top Trends for 2025",
        description: "What's in and out this year.",
        image: categories_31,
      },
      {
        title: "Sustainable Fashion Choices",
        description: "How to dress stylishly and sustainably.",
        image: categories_32,
      },
      {
        title: "Accessories that Elevate Any Outfit",
        description: "The best accessories to own this year.",
        image: categories_33,
      },
    ],
    Food: [
      {
        title: "Top Culinary Trends of 2025",
        description: "Exciting new trends in food and cooking.",
        image: categories_34,
      },
      {
        title: "Best Restaurants to Try This Year",
        description: "A guide to must-visit dining spots.",
        image: categories_35,
      },
      {
        title: "Quick and Easy Recipes",
        description: "Delicious meals you can make in minutes.",
        image: categories_36,
      },
    ],
    Gaming: [
      {
        title: "Top Games Released in 2025",
        description: "A list of the most anticipated games this year.",
        image: categories_37,
      },
      {
        title: "The Rise of Esports",
        description: "How esports is becoming a global phenomenon.",
        image: categories_38,
      },
      {
        title: "VR Gaming: The Next Frontier",
        description: "How virtual reality is changing the gaming world.",
        image: categories_39,
      },
    ],
    Music: [
      {
        title: "Top Chartbusters of 2025",
        description: "The songs that are ruling the charts.",
        image: categories_40,
      },
      {
        title: "Behind the Scenes: Music Production",
        description: "How your favorite songs are made.",
        image: categories_41,
      },
      {
        title: "The Evolution of Music Genres",
        description: "How music genres have transformed over the years.",
        image: categories_42,
      },
    ],
    Finance: [
      {
        title: "Personal Finance Tips for 2025",
        description: "How to save and invest smarter.",
        image: categories_43,
      },
      {
        title: "Cryptocurrency Updates",
        description: "The latest trends in the crypto market.",
        image: categories_44,
      },
      {
        title: "Stock Market Predictions",
        description: "What experts are saying about this year's market.",
        image: categories_45,
      },
    ],
  };

  return (
    <div className="app-container">
      <div className="categories-container">
        <h1 className="main-title">Explore Categories</h1>

        <div className="categories-grid">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                className={`category-card ${
                  selectedCategory === category.name ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category.name)}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Icon className="category-icon" />
                <span className="category-name">{category.name}</span>
              </button>
            );
          })}
        </div>

        {selectedCategory && (
          <div className="news-section">
            <h2 className="news-section-title">{selectedCategory} News</h2>
            <div className="news-grid">
              {newsData[selectedCategory]?.map((news, index) => (
                <div key={index} className="news-card">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="news-image"
                  />
                  <div className="news-content">
                    <h3 className="news-title">{news.title}</h3>
                    <p className="news-description">{news.description}</p>
                    <button className="read-more-btn">Read More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
