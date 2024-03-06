import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { Contaxtt } from '../../Contaxtt/Contaxtt';
import { toast } from 'react-toastify';

export default function Products() {

  let { counter, setCounter, addToCart } = useContext(Contaxtt)
  let [btnLoading, setBtnLoading] = useState(true)
  function getproducts() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products')
   
    

  }
  let { data, isError, isFetched, isLoading } = useQuery('getproducts', getproducts)

  async function addProductToCart(productId) {
    setBtnLoading(false)
    let data = await addToCart(productId)
    console.log(data);
    if (data.status == 'success') {
      toast.success('Product added successfully to your cart')
      setCounter(data.numOfCartItems)
      setBtnLoading(true)
    }
  }
  // let [heart,setHeart]=useState("red")
  return (
    <>
    
      <div className=' container-fluid my-5 pt-5 mt-5'>
        <div className='row'>
          {data?.data.data.map((item) => (
            <div key={item._id} className='col-md-2 product p-3 rounded-3'>
              <Link to={'/products-details/' + item._id}>
                <img src={item.imageCover} className='w-100' height='300px' alt="" />
                <span className='text-main'>{item.category.name}</span>
                <h6 className=' fw-bold py-2'>{item.title.split(' ').slice(0, 2).join(' ')}</h6>
                <div className=' d-flex justify-content-between'>
                  <div>{item.price}EGP </div>
                  <div>  <i className="fa-solid fa-star rating-color pe-2"></i>{item.ratingsAverage} </div>
                </div>
              </Link>
           <div className=' d-flex justify-content-between'>
         
              <button disabled={!btnLoading} type='submit' onClick={() => (addProductToCart(item._id))} className='btn bg-main w-100 mt-2 text-white '>
                {btnLoading? 'Add To Cart' : 'loading...'}
              </button>
              <i className="ps-2  fa-solid fa-heart cartIcon text-danger mt-3"> </i>
              {/* onClick={()=>setHeart('black')} {heart}  */}
           </div>

            </div>
          ))
          }
        </div>
      </div >
    </>
  )
}
