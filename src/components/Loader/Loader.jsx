import css from './Loader.module.css';
import { ThreeDots, TailSpin } from 'react-loader-spinner';

function Loader() {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClassName={css.treeDots}
      visible={true}
    />
  );
}

const Spin = () => {
  return (
    <TailSpin
      height="40"
      width="40"
      color="black"
      ariaLabel="tail-spin-loading"
      radius="3"
      wrapperStyle={{ display: 'inline' }}
      wrapperClass={css.tailSpin}
      visible={true}
    />
  );
};

export { Spin };
export default Loader;
