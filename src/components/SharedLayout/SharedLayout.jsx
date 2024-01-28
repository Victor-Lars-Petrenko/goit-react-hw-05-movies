import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

export default function SharedLayout() {
  return (
    <>
      <header className={css.commonHeader}>
        <NavLink className={css.headerLink} to="/">
          Home
        </NavLink>
        <NavLink className={css.headerLink} to="/movies">
          Movies
        </NavLink>
      </header>
      <main className={css.container}>
        <Outlet></Outlet>
      </main>
    </>
  );
}
