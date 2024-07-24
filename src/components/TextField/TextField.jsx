// TextField.js
import React, { useState } from 'react';
import { Field, ErrorMessage } from 'formik';

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
const TextField = ({ label, type = 'text', ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className='relative flex flex-col gap-2'>
      <label className='font-medium text-gray-700' htmlFor={props.name}>{label}:</label>
      <Field
        className='outline-none border border-gray-500 py-2 px-3 rounded-md'
        type={type === 'password' && showPassword ? 'text' : type}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
      />
      {type === 'password' && (
        <button
          type="button"
          onClick={handleTogglePassword}
          className='absolute top-[50%] inset-y-0 right-0 flex items-center pr-3'
        >
          {showPassword ? <RemoveRedEyeOutlinedIcon  size={25} /> : <VisibilityOffOutlinedIcon size={25} />}
        </button>
      )}
      <ErrorMessage name={props.name} component="div" className='text-red-500 text-sm mt-1' />
    </div>
  );
};

export default TextField;
