import React from 'react';

import './actionButton.scss';

interface Props {
  title: string;
  handler: () => void;
  disabled?: boolean
}

const ActionButton: React.FC<Props> = ({handler, title, disabled = false}) => {
  return (
    <button onClick={handler} className='actionButton' disabled={disabled}>
      {title}
    </button>
  );
};

export default ActionButton;