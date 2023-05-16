import { BallTriangle } from 'react-loader-spinner';

export const Loader = ({ isLoading }) => {
  return (
    <BallTriangle
      height={40}
      width={40}
      radius={3}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle=""
      visible={isLoading}
    />
  );
};
