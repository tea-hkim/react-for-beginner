import React from "react";
import propTypes from "prop-types";
import styles from "../styles/DetailMovie.module.css";

function DetailMovie({ title, coverImg, runtime, year, genres, description }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie_img} />
      <div>
        <h1>{title}</h1>
        <p>run time : {runtime} min</p>
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
    </div>
  );
}

DetailMovie.prototype = {
  title: propTypes.string.isRequired,
  coverImg: propTypes.string.isRequired,
  runtime: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  description: propTypes.string.isRequired,
};

export default DetailMovie;
