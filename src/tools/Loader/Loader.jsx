import { FallingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.container}>
      <FallingLines color="rgb(79, 77, 77)" />
    </div>
  );
}
