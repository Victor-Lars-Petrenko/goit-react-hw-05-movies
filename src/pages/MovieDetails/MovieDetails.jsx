import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import { getMovieDetails } from 'api/themoviedb';
import DetailsSection from 'components/DetailsSection';
import css from './MovieDetails.module.css';

import Loader from 'tools/Loader';
import Error from 'tools/Error';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    if (!movieId) return;
    getMovieDetails(movieId)
      .then(response => setDetails({ ...response }))
      .catch(() => setIsError(true))
      .finally(() => setLoading(false));
  }, [movieId]);

  const goBack = () => {
    navigate(backLink);
  };

  return (
    <>
      {isError && <Error />}
      {loading && <Loader />}
      {!isError && !loading && details.id && (
        <>
          <DetailsSection details={details} handleClick={goBack} />

          <ul className={css.movieNavigation}>
            <li>
              <Link
                className={css.movieLink}
                to="cast"
                state={{ from: backLink }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                className={css.movieLink}
                to="reviews"
                state={{ from: backLink }}
              >
                Reviews
              </Link>
            </li>
          </ul>

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}
