import css from './DetailsSection.module.css';
import { IoIosArrowBack } from 'react-icons/io';

const DetailsSection = ({
  details: {
    id,
    backdrop_path,
    title,
    tagline,
    poster_path,
    vote_average,
    genres = [],
    runtime,
    overview,
    production_countries = [],
  },
  handleClick,
}) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <section
      className={css.detailsSection}
      style={{
        backgroundColor: 'rgba(79, 77, 77, 0.8)',
        backgroundImage: backdrop_path
          ? `url(https://image.tmdb.org/t/p/w500/${backdrop_path})`
          : defaultImg,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={css.detailsWrapper}>
        <h1 className={css.heading}>{title}</h1>
        {tagline && <h2 className={css.heading}>"{tagline}"</h2>}
        <div className={css.posterWrapper}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
          <div>
            <p>
              Popularity: {vote_average ? vote_average.toFixed(1) : 'not found'}
            </p>
            <p>
              Countries:{' '}
              {production_countries[0]
                ? production_countries.map(({ name }) => name).join(', ')
                : 'not found'}
            </p>
            <article>
              <h4>Genres:</h4>
              <p>
                {genres[0]
                  ? genres.map(({ name }) => name.toLowerCase()).join(', ')
                  : 'not found'}
              </p>
            </article>
            <article>
              <h4>Overview:</h4>
              <p>{overview || 'not found'}</p>
            </article>
            <p>Duration: {runtime ? `${runtime} minutes` : 'not found'}</p>
          </div>
        </div>
      </div>
      <button className={css.goBackBtn} type="button" onClick={handleClick}>
        <IoIosArrowBack size={50} />
      </button>
    </section>
  );
};

export default DetailsSection;
