import React from 'react';
import useGlobalLoading from '../../hooks/loading';
import './loading.css'

const Loading = () => {
  const {loading} = useGlobalLoading();
  if (!loading) {
    return <></>
  }
  return (
    <div className="container-loading">
      <pre>{loading}</pre>
      <div className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;