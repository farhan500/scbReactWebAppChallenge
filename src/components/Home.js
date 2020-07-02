import React, { Component } from "react";
import Nav from "./Nav";
import Search from "./Search";
import ScrollList from "./MovieList/ScrollList";
import Footer from "./Footer";
import Loading from "./Loading";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      searchTerm: "",
      searchError: false,
      loading:false,
    };

    this.apiKey = "b9bd48a6";
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ ...this.state, loading: true });
 
    fetch(
      `https://www.omdbapi.com/?apikey=${this.apiKey}&s=${this.state.searchTerm}&type=movie`
    )
      .then((data) => data.json())
      .then((data) => {
        if (data.Search) {
          this.setState({ movieList: [...data.Search], searchError: false, loading: false });
        } else {
          this.setState({ searchError: true,loading: false });
        }
      });
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  componentWillUnmount() {
    sessionStorage.setItem("SavedState", JSON.stringify(this.state));
  }

  componentDidMount() {
    const rehydrate = JSON.parse(sessionStorage.getItem("SavedState"));
    this.setState(rehydrate);
  }

  render() {

    if (this.state.loading === true) {
      return ( <Loading search={"Search Movies"}></Loading>)
    }

    return (
      <div className="Home" onScroll={() => this.handleScroll()}>
        <Nav text={"Search Movies"}></Nav>
        <Search
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          searchTerm={this.state.searchTerm}
        ></Search>
        <ScrollList
          movies={this.state.movieList}
          Iserror={this.state.searchError}
        ></ScrollList>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
