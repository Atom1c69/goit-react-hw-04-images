import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = ({ isLoading }) => {
  return (
    <div className={css.loader}>
      <Circles
  height="80"
  width="80"
  color="#3f51b5"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>

  );
};