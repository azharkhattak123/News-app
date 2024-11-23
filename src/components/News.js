import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (val) => {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  };

  const updateNews = async () => {
    props.showProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let response = await fetch(url);
    props.showProgress(30);
    let data = await response.json();
    props.showProgress(70);
    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setLoading(false);
    props.showProgress(100);
  };

  useEffect(() => {
    document.title = `NewsRocket - ${capitalizeFirstLetter(props.category)}`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let response = await fetch(url);
    let data = await response.json();
    setArticles(articles.concat(data.articles));
    setTotalResults(data.totalResults);
  };

  return (
    <>
      <h1
        className="text-center"
        style={{ marginTop: "90px", marginBottom: "40px", color: "red" }}
      >
        NewsRocket - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((elm) => {
              return (
                <div className="col-md-4" key={elm.url}>
                  <Newsitem
                    title={elm.title ? elm.title : ""}
                    description={elm.description ? elm.description : ""}
                    imageUrl={
                      elm.urlToImage
                        ? elm.urlToImage
                        : "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2024-11/0193195b-0d49-70b8-8383-bc795b6543f5"
                    }
                    url={elm.url}
                    author={elm.author}
                    date={elm.publishedAt}
                    source={elm.source.name}
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

News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
};

export default News;
