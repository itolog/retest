import React from 'react';

import './actionButton.scss';

interface Props {
  title: string;
  handler?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  isValid?: boolean;
}

const ActionButton: React.FC<Props> = ({
                                         handler,
                                         title, disabled = false,
                                         isValid=true,
                                         type = 'button'
                                       }) => {
  return (
    <button
      onClick={handler}
      className={!isValid ? 'actionButton disabledButton' : 'actionButton'}
      type={type}
      disabled={disabled}>
      {title}
    </button>
  );
};

export default ActionButton;