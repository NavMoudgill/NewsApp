import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 30,
    category: "general",
  };
  api_key = process.env.REACT_APP_KEY_NEWS;
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
    // console.log("hello from news component");
    this.state = {
      articles: [],
      loading: false,
      totalElem: 0,
      progress: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - News Channel`;
    // News Channel
  }

  updateNews = async () => {
    // this.setState({ progress: 20 });
    console.log(this.api_key);

    let url = `https://newsapi.org/v2/top-headlines?apiKey=${this.api_key}&page=${this.page}&country=${this.props.country}&pagesize=${this.props.pageSize}&category=${this.props.category}`;
    this.setState({ loading: true });

    let data = await fetch(url);
    this.page === 1 && this.setState({ progress: 30 });

    let parsedData = await data.json();
    // console.log(parsedData.articles);
    this.setState({
      totalElem: this.state.totalElem + parsedData.articles.length,
    });
    this.page === 1 && this.setState({ progress: 70 });

    // console.log("hello", this.props.category);

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.page === 1 && this.setState({ progress: 100 });
  };
  async componentDidMount() {
    // console.log(this.state.page);
    this.updateNews();
    this.page === 1 && this.setState({ progress: 0 });
  }

  fetchMoreData = () => {
    this.page = this.page + 1;
    this.updateNews();
  };
  // componentDidUpdate(prevProps) {
  //   console.log("component did update", prevProps);
  // }

  render() {
    // console.log(this.state.articles.length);
    return (
      <>
        <LoadingBar height={3} color="#f11946" progress={this.state.progress} />
        <h2 className="text-center ">
          News Channel - Top headlines from
          {this.capitalizeFirstLetter(this.props.category)}
        </h2>

        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles?.map((element) => {
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
  }
}
