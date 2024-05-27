import React, { useEffect, useState } from "react";
import businessData from '../Data/SampleBussiness.json';
import generalData from '../Data/SampleGeneral.json';
import technologyData from '../Data/SampleTechnology.json';
import scienceData from '../Data/SampleScience.json';
import sportsData from '../Data/SampleSport.json';
import healthData from '../Data/SampleHealth.json';
import NewsItem from "./NewsItem";
import entertainmentData from '../Data/SampleEntertainment.json'

export const Practice = ({ setProgress, pageSize, countryCode, category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Set initial progress
    setProgress(0);

    // Simulate progress increment
    const timeout = setTimeout(() => {
      setProgress(100);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [setProgress]);

  useEffect(() => {
    let data;
    switch (category.toLowerCase()) {
      case 'business':
        data = businessData;
        break;
      case 'general':
        data = generalData;
        break;
      case 'technology':
        data = technologyData;
        break;
      case 'science':
        data = scienceData;
        break;
      case 'sports':
        data = sportsData;
        break;
      case 'health':
        data = healthData;
        break;
    case 'entertainment':
        data = entertainmentData;
        break;
      default:
        data = [];
    }
    setArticles(data.articles);
  }, [category]);

  // Check if articles is an array
  if (!Array.isArray(articles)) {
    return <div>Error: Data is not in the expected format.</div>;
  }

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ margin: "35px 0px", marginTop: "90px" }}>
        FlashNews Top {category.charAt(0).toUpperCase() + category.slice(1)} Headlines
      </h1>
      <div className="container">
        <div className="row">
          {articles.slice(0, pageSize).map((article) => (
            <div className="col-md-4" key={article.url}>
              <NewsItem
                title={article.title || "No title available"}
                description={article.description || "No description available"}
                imageUrl={article.urlToImage}
                newsUrl={article.url}
                date={article.publishedAt}
                author={article.author}
                source={article.source.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Practice;
