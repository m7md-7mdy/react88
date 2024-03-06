
import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
export default function SignUp() {

  const [error, setError] = useState('')

  let navigate = useNavigate()
 async function sendDataToApi(values) {
    try {
      let {data}  = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
     
      if(data.message =='success'){
        navigate('/signin')
      }
    } catch (e) {
  
      setError(e.response.data.message)
    }

  }
  function validationSchema() {
    let schema = new Yup.object({
      name: Yup.string().min(3).max(20).required(),
      email: Yup.string().min(3).max(20).required(),
      password: Yup.string().max(12).min(4).required(),
      rePassword: Yup.string().oneOf([Yup.ref('password')]).required(),
      phone: Yup.string().required("phone is req").matches(/^01[0125][0-9]{8}$/, "enter egyption number")
    })
    return schema
  }
  let register = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: ""
    },
    validationSchema,
    onSubmit: (values) => {
      sendDataToApi(values)
    }
  })
  return (
    <>
      <div className='w-75 mt-4 m-auto'>
        <div>
          <form onSubmit={register.handleSubmit} >
            <label htmlFor="name">Name :</label>
            <input onBlur={register.handleBlur} type="text" value={register.values.name} id='name' onChange={register.handleChange} name='name' className=' form-control mt-2 mb-3' />
            {register.errors.name && register.touched.name ? <div className=' alert alert-danger'>{register.errors.name}</div> : ''}

            <label htmlFor="email" className='mt-2'>Email : </label>
            <input type=" email" onBlur={register.handleBlur} id='email' name='email' className=' form-control mt-2 mb-3' onChange={register.handleChange} value={register.values.email} />
            {register.errors.email && register.touched.email ? <div className=' alert alert-danger'>{register.errors.email}</div> : ''}

            <label htmlFor="password" className='mt-2'>Password :</label>
            <input type="password" onBlur={register.handleBlur} name='password' onChange={register.handleChange} id='password' className=' form-control mt-2 mb-3' value={register.values.password} />
            {register.errors.password && register.touched.password ? <div className=' alert alert-danger'>{register.errors.password}</div> : ''}

            <label htmlFor="repassword" className='mt-2'>RePassword :</label>
            <input type="password" onBlur={register.handleBlur} id='repassword' name='rePassword' value={register.values.rePassword} onChange={register.handleChange} className=' form-control mt-2 mb-3' />
            {register.errors.rePassword && register.touched.rePassword ? <div className=' alert alert-danger'>{register.errors.rePassword}</div> : ''}

            <label htmlFor="phone" className='mt-2'>phone :</label>
            <input type="tel" onBlur={register.handleBlur} name='phone' onChange={register.handleChange} id='phone' className=' form-control mt-2 mb-3' value={register.values.phone} />
            {register.errors.phone && register.touched.phone ? <div className=' alert alert-danger'>{register.errors.phone}</div> : ''}
            {error?<div className=' alert alert-danger'>{error}</div>:''}
      
            <button disabled={!(register.dirty && register.isValid)} type='submit' className='btn btn-success mt-4'> Send</button>
          </form>
        </div>
      </div>
    </>
  )
}




