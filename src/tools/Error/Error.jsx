import { PiMaskSad } from 'react-icons/pi';
import css from './Error.module.css';

export default function Error() {
  return (
    <div className={css.container}>
      <PiMaskSad size={100} />
      <h1>Sorry, something get wrong</h1>
    </div>
  );
}
