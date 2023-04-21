import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.page = 1;
    console.log("hello from news component");
    this.state = {
      articles: [],
      loading: false,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - News Channel`;
    // News Channel
  }
  updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?apiKey=73e61cef512d4f619ffed2de6310b362&page=${this.page}&country=${this.props.country}&pagesize=${this.props.pageSize}&category=${this.props.category}`;
    this.setState({ loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData.articles);
    console.log("hello", this.props.category);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };
  async componentDidMount() {
    // console.log(this.state.page);
    this.updateNews();
  }
  handlePrevious = () => {
    this.page = this.page - 1;
    this.updateNews();
  };
  handleNext = () => {
    this.page = this.page + 1;
    this.updateNews();
  };

  // componentDidUpdate(prevProps) {
  //   console.log("component did update", prevProps);
  // }

  render() {
    console.log(this.page);
    return (
      <div className="container">
        <h2 className="text-center ">
          News Channel - Top headlines from
          {this.capitalizeFirstLetter(this.props.category)}
        </h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles?.map((element) => {
              return element.title ? (
                <div
                  className="col-md-4"
                  key={element.url}
                  style={{ margin: "auto", width: "auto" }}
                >
                  <NewsItem
                    title={element.title?.slice(0, 51)}
                    description={element.description?.slice(0, 90)}
                    newsUrl={element.url}
                    imgUrl={element.urlToImage}
                    publishedAt={element.publishedAt}
                    author={element.author}
                    source={element.source.name}
                  />
                </div>
              ) : undefined;
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevious}
          >
            &laquo; Previous
          </button>
          <button
            disabled={
              this.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}
