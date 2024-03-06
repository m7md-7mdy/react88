
import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { Contaxtt } from '../../Contaxtt/Contaxtt'
export default function Address() {
    let { id } = useParams()
    const [error, setError] = useState('')
    let { pay } = useContext(Contaxtt)
    //   let navigate = useNavigate()
    async function sendDataToApi(values) {
      
        let data = await pay(id, values)
        console.log(data);
        if(data.status=='success'){
            window.location.href=data.session.url
        }

        // if (data.status == 'success')
        //     
    }

    let address = useFormik({
        initialValues: {

            details: '',
            phone: '',
            city: '',

        },
        onSubmit: (values) => {
            sendDataToApi(values)
        }
    })
    return (
        <>
            <div className='w-75 m-auto mt-5 pt-5'>
                <div>
                    <form onSubmit={address.handleSubmit} >

                        <label htmlFor="details" className='mt-2'>Details : </label>

                        <textarea type="text" onBlur={address.handleBlur} id='details' name='details' className=' form-control mt-2 mb-3'
                            onChange={address.handleChange}></textarea>


                        <label htmlFor="phone" className='mt-2'>Phone :</label>
                        <input type="text" onBlur={address.handleBlur} name='phone' onChange={address.handleChange} id='phone'
                            className=' form-control mt-2 mb-3' />


                        <label htmlFor="city" className='mt-2'>City :</label>
                        <input type="text" onBlur={address.handleBlur} name='city' onChange={address.handleChange} id='city'
                            className=' form-control mt-2 mb-3' />

                        <button disabled={!(address.dirty && address.isValid)} type='submit' className='btn btn-success mt-4'> Pay</button>
                    </form>
                </div>
            </div>
        </>
    )
}




