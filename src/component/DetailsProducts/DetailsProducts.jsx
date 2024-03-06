import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Contaxtt } from '../../Contaxtt/Contaxtt';
import Loading from '../Loading/Loading';

export default function DetailsProducts() {
  let x = useParams()
  let [details, setDetails] =useState ([])
  let[loading,setLoading]=useState(true)
  async function getProdicts() {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${x.id}`)
    setDetails(data.data)
    setLoading(false)
  }
  useEffect(() => {
    getProdicts()
  }, [])
let {counter,setCounter}=useContext(Contaxtt)
if(loading){
  return <Loading/>
}
 


  return (
   
    <>
      <div className=' container mt-5 pt-5'>
        <div className='row'>
          <div className='col-md-3'>
            <img src={details.imageCover} className='w-100' alt="" />
          </div>
          <div className='col-md-9'>
            <h4 className='py-2'>{details.title}</h4>
            <span>{details.description}</span>
            {/* <div>
              <span>{details.category.name}</span>
            </div> */}
            <div className=' d-flex justify-content-between py-4'>
              <div> {details.price}EGP</div>
              <div> <i className="fa-solid fa-star rating-color pe-2"></i> {details.ratingsAverage}</div>
            </div>
            <button type='submit' onClick={() =>setCounter (counter + 1)}  className='btn bg-main w-100 mt-3 text-white '> Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  )
}
