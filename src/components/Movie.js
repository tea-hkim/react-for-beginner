import React from "react";
import propTypes from "prop-types";

function Movie({ title, coverImg, summary, genres }) {
  return (
    <div>
      <h2>{title}</h2>
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
  title: propTypes.string.isRequired,
  coverImg: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
