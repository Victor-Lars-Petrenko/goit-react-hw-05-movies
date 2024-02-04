import { FallingLines } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <FallingLines color="rgb(79, 77, 77)" />
    </div>
  );
}
