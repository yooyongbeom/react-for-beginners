import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Home.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    console.log(json);
    setData(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  //console.log(data);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          <h1>{data.title_long}</h1>
          <img src={data.medium_cover_image} alt="" />
          <ul>
            <li>date : {data.date_uploaded}</li>
            <li>like : {data.like_count}</li>
            <li>runtime : {data.runtime}</li>
            <li>rating : {data.rating}</li>
          </ul>
          <Link to="/">
            <button>&lt;&lt; back</button>
          </Link>
        </div>
      )}
    </div>
  );
}
export default Detail;
