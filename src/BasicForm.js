import React from 'react';
import { useFormik } from 'formik';

export function BasicForm() {
  const formik=useFormik({
    initialValues: {email:"cool@gmail.com",password:"abcde"}
  })



  return (
    <form>
      <input
       id="email"
       name="email"
       value={formik.values.email}
       onChange={formik.handleChange} 
       type="email" 
       placeholder='Enter Email Address' />
      <input
       id='password'
       name='password'
      onChange={formik.handleChange}
       value={formik.values.password} 
       type="password" 
       placeholder='Enter Password' />
      <button>Submit</button>
    </form>);
}
;
