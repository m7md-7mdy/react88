import React from 'react'

export default function Product(item) {
    return (
        <>

            <div key={item._id} className='col-md-2 product p-3'>
                <img src={item.imageCover} className='w-100' height='300px' alt="" />
                <span className='text-main'>{item.category.name}</span>
                <h5 className=' fw-bold py-2'>{item.title.split(' ').slice(0, 2).join(' ')}</h5>
                <div className=' d-flex justify-content-between'>
                    <div>{item.price}EGP </div>
                    <div>  <i className="fa-solid fa-star rating-color pe-2"></i>{item.ratingsAverage} </div>
                </div>
                <button className='btn bg-main w-100 mt-2 text-white '> Add To Cart</button>
            </div>
        </>
    )
}
