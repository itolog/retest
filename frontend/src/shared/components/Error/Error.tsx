import React, { memo } from 'react';

import './error.scss';

interface Props {
  message: string
}

const Error: React.FC<Props> = memo(({ message }) => {
  return (
    <div className='error-container'>
      <h2 className='error-message'>{message}</h2>
    </div>
  );
});

export default Error;