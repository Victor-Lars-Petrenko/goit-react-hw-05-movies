import { PiMaskSad } from 'react-icons/pi';

export default function Error() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 10,
        color: 'red',
      }}
    >
      <PiMaskSad size={100} />
      <h1>Sorry, something get wrong</h1>
    </div>
  );
}
