import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const News = ({ country, category, pageSize, setProgress,apiKey }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
 

    // Capitalize function defined here
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const updateNews = async () => {
      setProgress(10);
      setLoading(true);
    

  
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&category=${category}`;
      

          const response = await fetch(url);
          
          const data = await response.json();
  
  
          setProgress(70);
          setArticles(data.articles);
          setTotalResults(data.totalResults);
     
          setLoading(false);
          setProgress(100);
      
  };

    useEffect(() => {
        updateNews();
    }, [page, country, category, pageSize]);


    const handlePageChange = (increment) => {
        setPage((prevPage) => prevPage + increment);
    };

    if (loading) return <Spinner />;

    return (
        <div className="container my-6" style={{ marginTop: '60px' }}> 
        <h1 className="text-center mx-4">
            NewsMonkey - Top {capitalize(category)} Headlines
        </h1>
        <div className="row">
            {articles.map((element) => (
                (element.title === "[Removed]" && element.description === "[Removed]") ? null : (
                    <div className="col-md-4 mb-3" key={element.url}>
                        <NewsItem
                            title={element.title} 
                            description={element.description}
                            imageURL={element.urlToImage}
                            newsurl={element.url}
                            author={element.author}
                            date={element.publishedAt}
                            source={element.source.name}
                        />
                    </div>
                )
            ))}
        </div>
        <div className="d-flex justify-content-between my-4">
            <button
                className="btn btn-dark"
                onClick={() => handlePageChange(-1)}
                disabled={page <= 1}
            >
                &larr; Previous
            </button>
            <button
                className="btn btn-dark"
                onClick={() => handlePageChange(1)}
                disabled={page >= Math.ceil(totalResults / pageSize)}
            >
                Next &rarr;
            </button>
        </div>
    </div>
    );
};

News.propTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    setProgress: PropTypes.func.isRequired,
};

export default News;
