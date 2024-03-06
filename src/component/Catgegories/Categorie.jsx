import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query';
export default function Categorie() {
    function getDataCategories() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    }
    let { data, isError, isFetched, isLoading } = useQuery('getDataCategories', getDataCategories)

    return (
        <>
            <div className=' container-fluid py-4 mt-5'>
                <div className='row'>
                    {
                        data?.data.data.map((item) => (
                            <div key={item._id} className='col-md-4 gy-4 '>
                                <div  className='px-2 bor rounded-2 hoverImg '>
                                    < img src={item.image} className='w-100 ' height='350px' alt="" />
                                    <h6 className='pt-2 d-flex justify-content-center fs-5 fw-bold text-main pt-4 pb-3 '>{item.name}</h6>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}


