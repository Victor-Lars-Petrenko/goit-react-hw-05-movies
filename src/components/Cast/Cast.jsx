import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from 'api/themoviedb';
import css from './Cast.module.css';

import Loader from 'tools/Loader/Loader';
import Error from 'tools/Error/Error';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!movieId) return;
    getMovieCast(movieId)
      .then(({ cast }) => setCast([...cast]))
      .catch(err => {
        console.error(err);
        setIsError(true);
      })
      .finally(() => setLoading(false));
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      {isError && <Error />}
      {loading && <Loader />}
      {!isError && !loading && (
        <>
          {cast[0] ? (
            <ul className={css.castList}>
              {cast.map(({ id, name, character, profile_path }) => {
                return (
                  <li key={id} className={css.card}>
                    <img
                      src={
                        profile_path
                          ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                          : defaultImg
                      }
                      width={150}
                      alt={name}
                    ></img>
                    <p className={css.name}>{name}</p>
                    <p className={css.name}>as</p>
                    <p className={css.name}>{character}</p>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p style={{ paddingLeft: 20 }}>
              There are no information about cast
            </p>
          )}
        </>
      )}
    </>
  );
}
