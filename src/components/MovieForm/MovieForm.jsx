import { useSearchParams } from 'react-router-dom';
import css from './MovieForm.module.css';
import { toast } from 'react-toastify';
import { useEffect, useRef } from 'react';

export default function MovieForm({ onSubmit }) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = query;
  });

  const formSubmit = e => {
    e.preventDefault();
    const { value } = e.currentTarget.movie;
    const validatedValue = value.trim();
    if (validatedValue === '') return toast.warn('Please fill empty field');
    onSubmit(validatedValue);
  };

  return (
    <form className={css.movieForm} onSubmit={formSubmit}>
      <input type="text" name="movie" ref={inputRef}></input>
      <button type="submit">Search</button>
    </form>
  );
}
