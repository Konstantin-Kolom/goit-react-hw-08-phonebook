import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

export const SpinnerLoader = () => {
  return (
    <div className={s.spinnerLoader}>
      <Loader type="ThreeDots" color="#5a61bb" height={100} width={100} />
    </div>
  );
};

// export const SpinnerLoaderSmalд = () => {
//   return (
//     <div className={s.spinnerLoader}>
//       <Loader type="ThreeDots" color="#5a61bb" height={6} width={6} />
//     </div>
//   );
// };
