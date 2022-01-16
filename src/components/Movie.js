import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, coverImg, summary, genres }) {
  return (
    <div>
      <h2>
        <Link to={`movie/${id}`}>{title}</Link>
      </h2>
      <img src={coverImg} alt={title} />
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.prototype = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  coverImg: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
