import { useEffect, useState } from 'react';

import { getTrendingFilms } from 'api/themoviedb';
import MoviesList from 'components/MoviesList';

import Loader from 'tools/Loader';
import Error from 'tools/Error';

export default function Home() {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrendingFilms()
      .then(({ results }) => {
        setTrendingFilms([...results]);
      })
      .catch(err => {
        console.error(err);
        setIsError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {isError && <Error />}
      {loading && <Loader />}
      {!isError && !loading && trendingFilms[0] && (
        <MoviesList moviesArr={trendingFilms} endPoint="movies/" />
      )}
    </>
  );
}
