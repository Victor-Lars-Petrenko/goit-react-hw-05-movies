import { Link } from 'react-router-dom';
import css from './MoviesList.module.css';

export default function MoviesList({ moviesArr = [], endPoint = '', state }) {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <>
      {moviesArr[0] && (
        <ul className={css.movieList}>
          {moviesArr.map(({ id, title, poster_path }) => (
            <li className={css.card} key={id}>
              <Link
                className={css.movieLink}
                to={`${endPoint}${id}`}
                state={state}
              >
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : defaultImg
                  }
                  width={150}
                  alt={title}
                ></img>
                <p className={css.title}>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
