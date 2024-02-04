import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MovieForm from 'components/MovieForm';
import MoviesList from 'components/MoviesList';
import { getMovies } from 'api/themoviedb';

import Loader from 'tools/Loader';
import Error from 'tools/Error';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    getMovies(query)
      .then(({ results }) => {
        if (!results[0]) toast.info(`There are no films on query "${query}"`);
        setFoundMovies([...results]);
      })
      .catch(err => {
        console.error(err);
        setIsError(true);
      })
      .finally(() => setLoading(false));
  }, [query]);

  const onSubmit = key => {
    setSearchParams({ query: key });
  };

  return (
    <>
      <MovieForm onSubmit={onSubmit} />
      {isError && <Error />}
      {loading && <Loader />}
      {!isError && !loading && foundMovies[0] && (
        <MoviesList moviesArr={foundMovies} state={{ from: location }} />
      )}
      <ToastContainer autoClose={3000} />
    </>
  );
}
