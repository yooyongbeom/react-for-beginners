import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, year, genres, torrents }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>
          torrents info :{" "}
          {JSON.stringify(torrents).length > 50
            ? `${JSON.stringify(torrents).slice(0, 50)}...`
            : JSON.stringify(torrents)}
        </p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
