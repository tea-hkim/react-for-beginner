import React from "react";
import propTypes from "prop-types";

function DetailMovie({ title, coverImg, runTime, year, genres, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={coverImg} alt={title} />
      <p>run time : {runTime} min</p>
      <p>Opening date : {year}</p>
      <p>
        genres
        <ul>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </p>
      <p>{description}</p>
    </div>
  );
}

DetailMovie.prototype = {
  title: propTypes.string.isRequired,
  coverImg: propTypes.string.isRequired,
  runTime: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  description: propTypes.string.isRequired,
};

export default DetailMovie;
