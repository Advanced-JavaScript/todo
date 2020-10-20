/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const useForm = (cb) => {

  const [value, setValue] = useState({});
  
  const handleSubmit = async (e) => {
    if(e) await e.preventDefault();
    // await e.target.reset();
    setValue({});
    await cb(value);
    
  };

  const handleInputChange = e => {
    e.preventDefault();
    
    setValue({...value, [e.target.name]: e.target.value });
    
  };

  return [handleSubmit, handleInputChange,  value];

};

export default useForm;


