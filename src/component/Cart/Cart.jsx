import React, { useContext, useEffect, useState } from 'react'
import { Contaxtt } from '../../Contaxtt/Contaxtt'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

export default function Cart() {


  let { apiCart, deleteItem, setCounter, updateQTY} = useContext(Contaxtt)
  let [data, setData] = useState(null)
  useEffect(() => {
    (async () => {
      let data = await apiCart()
      // setData(data)
      if (data?.response?.data.statusMsg == 'fail') {
        setData(null)
      }
      else {
        setData(data)
      }
      console.log(data);
    })()
  }, [])

  async function deleteProdect(id) {
    let data = await deleteItem(id)
    // console.log(data);
    if (data.status == 'success') {
      toast.error('Product Delete SuccessFully')
      setCounter(data.numOfCartItems)
      setData(data)
    }
  }
  async function productUpdateQTY(id, count) {
    let data = await updateQTY(id, count)

    // console.log(data);
    if (data.status == 'success') {
      toast.success('Product update SuccessFully')
      setCounter(data.numOfCartItems)
      setData(data)
    }
  }
  if (data == null || data.numOfCartItems == 0) {
    return <h2 className=' text-center text-main p-5 mt-5'> Not Items IN Cart</h2>
  }
  return (
    <>
      <div className=' container py-2 bg-main-light p-3 rounded-2 pt-5 mt-5'>
        <h2>Shop Cart :</h2>
        <p className='text-main'>Total Cart Price : <span className=' text-dark'>{data?.data.totalCartPrice} EGP</span> </p>

        {data?.data.products.map(item => {
          return <div key={item._id} className='row py-2 border-bottom'>
            <div className='col-md-1'>
              <img src={item.product.imageCover} className='w-100' alt="" />
            </div>
            <div className='col-md-11 d-flex justify-content-between'>
              <div>
                <p className='m-0 p-0'>{item.product.title}</p>
                <p className='text-main m-1 p-0'>price: {item.price} EGP</p>
                <button onClick={() => deleteProdect(item.product._id)} className='m-0 p-0 btn' ><i className="fa-solid fa-trash text-main"></i> Remove</button>
              </div>
              <div>
                <button onClick={() => productUpdateQTY(item.product._id, item.count + 1)} className='btn demo1'>+</button>
                <span className='p-2'>{item.count}</span>
                <button disabled={item.count <= 1} onClick={() => productUpdateQTY(item.product._id, item.count - 1)} className='btn demo1'>-</button>
              </div>
            </div>
          </div>
        })}
        <Link to={`/address/${data.data._id}`} className='bg-main text-white my-4 btn'> Place Order</Link>
      </div>
    </>
  )
}
