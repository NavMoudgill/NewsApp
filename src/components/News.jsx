import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";
const News = (props) => {
  let [articles, setArticles] = useState([]);
  let [loading, setLoading] = useState(false);
  let [totalElem, setTotalElem] = useState(0);
  let [progress, setProgress] = useState(0);
  let [totalResults, setTotalResults] = useState(0);
  let [page, setPage] = useState(1);

  const api_key = process.env.REACT_APP_KEY_NEWS;
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  document.title = `${capitalizeFirstLetter(props.category)} - News Channel`;

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?apiKey=${api_key}&page=${page}&country=${props.country}&pagesize=${props.pageSize}&category=${props.category}`;
    setLoading(true);
    let data = await fetch(url);
    page === 1 && setProgress(30);

    let parsedData = await data.json();

    setTotalElem(totalElem + parsedData.articles.length);
    page === 1 && setProgress(70);

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    page === 1 && setProgress(100);
  };
  useEffect(() => {
    updateNews();
    page === 1 && setProgress(0);
  }, []);

  const fetchMoreData = () => {
    setPage(page + 1);
    updateNews();
  };

  return (
    <>
      <LoadingBar height={3} color="#f11946" progress={progress} />
      <h2 className="text-center" style={{ marginTop: "77px" }}>
        News Channel - Top headlines from{" "}
        {capitalizeFirstLetter(props.category)}
      </h2>

      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={articles.length <= totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles?.map((element) => {
              return (
                <div
                  className="col-md-4"
                  key={element?.url}
                  style={{ margin: "auto", width: "auto" }}
                >
                  <NewsItem
                    title={element?.title?.slice(0, 51)}
                    description={element?.description?.slice(0, 90)}
                    newsUrl={element?.url}
                    imgUrl={element?.urlToImage}
                    publishedAt={element?.publishedAt}
                    author={element?.author}
                    source={element?.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 30,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
