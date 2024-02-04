import css from './MovieForm.module.css';
import { toast } from 'react-toastify';

export default function MovieForm({ onSubmit }) {
  const formSubmit = e => {
    e.preventDefault();
    const { value } = e.currentTarget.movie;
    const validatedValue = value.trim();
    reset(e);
    if (validatedValue === '') return toast.warn('Please fill empty field');
    onSubmit(validatedValue);
  };

  const reset = e => {
    e.currentTarget.movie.value = '';
  };

  return (
    <form className={css.movieForm} onSubmit={formSubmit}>
      <input type="text" name="movie"></input>
      <button type="submit">Search</button>
    </form>
  );
}
