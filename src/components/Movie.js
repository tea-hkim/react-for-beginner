import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/Movie.module.css";

function Movie({ id, title, coverImg, summary, genres }) {
  return (
    <div>
      <Link to={`movie/${id}`} className={styles.movie}>
        <img src={coverImg} alt={title} className={styles.movie_img} />
        <div>
          <h2 className={styles.movie_title}>{title}</h2>
          <p>{summary}</p>
          <ul>
            {genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      </Link>
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
