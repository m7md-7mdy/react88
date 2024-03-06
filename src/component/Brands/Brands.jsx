import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query';


export default function Brands() {

  function getBranfe() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/brands')
  }
  let { data } = useQuery('getproducts', getBranfe)


  return (
    <>
      <div className=' container-fluid py-4 mt-5'>
        <div className='row'>
          <h1 className='text-main py-5  d-flex justify-content-center  fw-bold'>All Brands</h1>
          {
            data?.data.data.map((item) => (
              <div key={item._id} className='col-md-3 gy-4 '>
                <div className='px-2 bor rounded-2 hoverImg '>
                  < img src={item.image} className='w-100 ' alt="" data-bs-toggle="modal" data-bs-target="#item-id" />
                  <h6 className='pt-2 d-flex justify-content-center fs-5 fw-bold pb-4'>{item.name}</h6>
                </div>
              </div>
            ))
          }
        </div>
      </div>


      {/* ======================================================================= */}
      <div>
        <div className="modal fade" id="item-id" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog  modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
              {
            data?.data.data.map((item) => (
              <div key={item._id} className='col-md-3 gy-4 '>
                <div className='px-2 bor rounded-2 hoverImg '>
                  < img src={item.image} className='w-100 ' alt="" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                  <h6 className='pt-2 d-flex justify-content-center fs-5 fw-bold pb-4'>{item.name}</h6>
                </div>
              </div>
            ))
          }
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

