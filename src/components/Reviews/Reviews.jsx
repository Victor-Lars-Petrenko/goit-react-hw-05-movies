import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'api/themoviedb';
import css from './Reviews.module.css';

import Loader from 'tools/Loader/Loader';
import Error from 'tools/Error/Error';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    getMovieReviews(movieId)
      .then(({ results }) => setReviews([...results]))
      .catch(error => {
        setIsError(true);
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      {isError && <Error />}
      {loading && <Loader />}
      {!isError && !loading && reviews[0] ? (
        <ul className={css.reviewsList}>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h4>{author}</h4>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p style={{ paddingLeft: 20 }}>There are no reviews for this movie</p>
      )}
    </>
  );
}
