import React, { Component } from "react";

import Nav from "../Nav";
import Footer from "../Footer";
import BackButton from "../Back";

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMovieId: props.match.params.value,
      MovieDetails: "",
      searchError: false,
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ ...this.state, loading: true });
    this.apiKey = "b9bd48a6";

    const MdUrl = `http://www.omdbapi.com/?apikey=${this.apiKey}&i=${this.props.match.params.value}`;

    fetch(MdUrl)
      .then((data) => data.json())
      .then((data) => {
        if (data.Title) {
          this.setState({
            ...this.state,
            MovieDetails: data,
            searchError: false,
            loading: false,
          });
        } else {
          this.setState({ ...this.state, searchError: true, loading: false });
        }
      });
  }

  render() {
    if (this.state.loading === true) {
      return (
        <div className="Home ">
          <Nav text={" Movie Details"}></Nav>
          <div className="autoHeight movDet">
            <div className="row">
              <div className="col s12">
                {" "}
                <h2>
                  <i>loading...</i>
                </h2>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (this.state.searchError === false)
      return (
        <div className="Home">
          <Nav text={" Movie Details"}></Nav>

          <div className="row movDet">
            <br></br>
            &nbsp; <BackButton></BackButton>
            <br></br>
            <div className="Movtitle">
              {this.state.MovieDetails.Title} ({this.state.MovieDetails.Year})
            </div>
            <div className="col s12">
              <div className="card-panel hoverable medium ">
                <img
                  className="card-img z-depth-1"
                  alt="movie details"
                  src={this.state.MovieDetails.Poster}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://treefurniturerental.ca/wp-content/uploads/2017/05/sorry-image-not-available.jpg";
                  }}
                />

                <div>
                  <hr></hr>
                  <p>
                    <b>
                      <i>Genre : </i>{" "}
                    </b>
                    {this.state.MovieDetails.Genre}
                  </p>
                  <hr></hr>
                  <p>
                    <b>
                      <i>Country : </i>{" "}
                    </b>
                    {this.state.MovieDetails.Country}
                  </p>
                  <hr></hr>
                  <p>
                    <b>
                      <i>Actors : </i>{" "}
                    </b>
                    {this.state.MovieDetails.Actors}
                  </p>
                  <hr></hr>
                  <p>
                    <b>
                      <i>Director : </i>{" "}
                    </b>
                    {this.state.MovieDetails.Plot}
                  </p>
                  <hr></hr>
                  <p>
                    <b>
                      <i>Plot : </i>{" "}
                    </b>
                    {this.state.MovieDetails.Plot}
                  </p>
                  <hr></hr>
                  <BackButton></BackButton>
                </div>
              </div>
            </div>
          </div>

          <Footer></Footer>
        </div>
      );
    else
      return (
        <div className="Home">
          <Nav text={" Movie Details"}></Nav>
          <div className="autoHeight">
            <div className="row">
              <div className="col s12">
                {" "}
                <h2>NO DATA FOUND,SEARCH AGAIN</h2>
                <BackButton></BackButton>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
export default MovieDetails;
