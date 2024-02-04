const apiUrl = 'https://api.themoviedb.org/3';
const language = 'en-US';

const makeRequest = async (endpoint, queryParams = '') => {
  const url = `${apiUrl}/${endpoint}?language=${language}${queryParams}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2MyOWFkNTExODRjNjM2MGFkYzcxMzA3MDUyMjM4NSIsInN1YiI6IjY1YmJkMmViY2ZmZWVkMDE3Y2FlMTQ3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n-OX6DpRYfuwkRBZXcYeYAck1tr7n62CL7QVfWGfE9I',
    },
  });

  if (!response.ok) {
    throw new Error(response.status);
  }

  return response.json();
};

const getTrendingFilms = async () => {
  return await makeRequest('trending/movie/day');
};

const getMovieDetails = async movieId => {
  return await makeRequest(`movie/${movieId}`);
};

const getMovieCast = async movieId => {
  return await makeRequest(`movie/${movieId}/credits`);
};

const getMovieReviews = async movieId => {
  return await makeRequest(`movie/${movieId}/reviews?page=1`);
};

const getMovies = async query => {
  const queryParams = `&query=${query}&include_adult=false&page=1`;
  return await makeRequest('search/movie', queryParams);
};

export {
  getTrendingFilms,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
  getMovies,
};
