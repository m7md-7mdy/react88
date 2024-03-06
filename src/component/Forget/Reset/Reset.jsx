
import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
export default function Reset() {

  const [error, setError] = useState('')

  let navigate = useNavigate()
  async function sendDataToApi(values) {
    try {
      let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/resetPassword', values)
      // console.log(data);
      if (data.message == 'success') {
        localStorage.setItem('token',data.token)
        navigate('/home')
   
      }
    } catch (e) {
      setError(e.response.data.message)
    }

  }
  function validationSchema() {
    let schema = new Yup.object({
      email: Yup.string().min(3).max(20).required(),
      password: Yup.string().max(12).min(4).required(),

    })
    return schema
  }
  let login = useFormik({
    initialValues: {

      email: '',
      password: '',

    },
    validationSchema,
    onSubmit: (values) => {
      sendDataToApi(values)
    }
  })
  return (
    <>
      <div className='w-75 mt-5 m-auto pt-5 '>
        <div>
          <form onSubmit={login.handleSubmit} >

            <label htmlFor="email" className='mt-2'>Email : </label>
            <input type=" email" onBlur={login.handleBlur} id='email' name='email' className=' form-control mt-2 mb-3' onChange={login.handleChange} value={login.values.email} />
            {login.errors.email && login.touched.email ? <div className=' alert alert-danger'>{login.errors.email}</div> : ''}

            <label htmlFor="password" className='mt-2'>Password :</label>
            <input type="password" onBlur={login.handleBlur} name='password' onChange={login.handleChange} id='password' className=' form-control mt-2 mb-3' value={login.values.password} />
            {login.errors.password && login.touched.password ? <div className=' alert alert-danger'>{login.errors.password}</div> : ''}
           
           {error ? <div className=' alert alert-danger'>{error}</div> : ''}
           <button disabled={!(login.dirty && login.isValid)} type='submit' className='btn btn-success '> Send</button>
          </form>
        </div>
      </div>
    </>
  )
}




