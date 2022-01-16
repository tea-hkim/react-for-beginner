import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const getMovie = async () => {
    const {
      data: { movie },
    } = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovie(movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);
  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <DetailMovie
          title={movie.title}
          coverImg={movie.medium_cover_image}
          runtime={movie.runtime}
          year={movie.year}
          genres={movie.genres}
          description={movie.description_full}
        />
      )}
    </div>
  );
}

export default Detail;
