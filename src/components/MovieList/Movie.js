import React from "react";
import { Link } from "react-router-dom";

const Movie = (props) => {
  return (
    <div className="col s12 m6 l3">
      <div className="card">
        <div
          className="card-image waves-effect waves-block waves-light"
          style={{ height: 270 }}
        >
          <img
            src={props.image}
            alt={props.Title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://treefurniturerental.ca/wp-content/uploads/2017/05/sorry-image-not-available.jpg";
            }}
          />
        </div>
        <div className="card-content">
          {" "}
          <Link
            className="waves-effect waves-light btn"
            color="lighten-3"
            to={`/MovieDetails/${props.movieId}`}
          >
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
