import React, { memo } from 'react';
import { Field, useField } from 'formik';

import './inputControl.scss';

interface Props {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  as?: string;
  isRequired?: boolean;
}

const InputControl: React.FC<Props> = memo(
  ({ name, as = 'input', placeholder, label, isRequired = false }, props) => {
    const [field, meta] = useField(name);
    return (
      <div className='pfInputContainer'>

        <div className='inputWrapp'>
          <div className='input-label'>
          <span>{label}</span>
            {isRequired && <span className='required-from-field' title='required field'>*</span>}
          </div>
          <Field
            {...field}
            {...props}
            placeholder={placeholder}
            className='textInput'
            as={as}
          />
        </div>
        <div className='error'>
          {meta.touched && meta.error && meta.error}
        </div>
      </div>
    );
  },
);

export default InputControl;
