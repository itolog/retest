import React from 'react';

import './loader.scss';

const Loader = () => {
  return (
    <div className='loader-container'>
      <div className='lds-dual-ring'></div>
    </div>
  );
};

export default Loader;
