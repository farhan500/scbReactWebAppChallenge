import React, { Component } from "react";
import Movie from "./Movie";

class ScrollList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: [],
      visible: 8,
      error: false,
      searchError: false,
    };
  }

  loadMore() {
    this.setState((prevState) => {
      return { ...prevState, visible: prevState.visible + 4 };
    });
  }

  static getDerivedStateFromProps(props, state) {
    return { ...state, movieList: props.movies, searchError: props.Iserror };
  }

  render() {
    if (this.state.searchError === false)
      return (
        <div className="container autoHeight">
          <div className="row">
            <div className="col s12">
              {this.state.movieList
                .slice(0, this.state.visible)
                .map((movie, index) => {
                  return (
                    <div key={index} className="fadein">
                      <Movie
                        key={movie.id}
                        movieId={movie.imdbID}
                        title={movie.Title}
                        Type={movie.Type}
                        image={movie.Poster}
                        date={movie.Year}
                      ></Movie>
                    </div>
                  );
                })}

              {this.state.visible < this.state.movieList.length && (
                <span
                  onClick={() => this.loadMore()}
                  className="waves-effect waves-light btn"
                  color="lighten-3"
                >
                  Load more
                </span>
              )}
            </div>
          </div>
        </div>
      );
    else
      return (
        <div className="autoHeight">
          <div className="row">
            <div className="col s12 movDet">
              {" "}
              <h2>NO DATA FOUND,SEARCH AGAIN</h2>
            </div>
          </div>
        </div>
      );
  }
}

export default ScrollList;
