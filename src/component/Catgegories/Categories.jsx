import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Slider from "react-slick";
import { useQuery } from 'react-query';
import Categorie from './Categorie';
export default function Categories() {
    function getDataCategories() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    }
    let { data, isError, isFetched, isLoading } = useQuery('getDataCategories', getDataCategories)
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        autoplay: true,
        arrows: false,
    };
    return (
        <>
            <div className=' container-fluid py-4 mt-5'>

                <h3 className='my-3'>shop popular categories</h3>
                <Slider {...settings}>
                    {data?.data.data.map((item) => (
                        <div key={item._id} className='px-2'>
                            < img src={item.image} className='w-100' height='200px' alt="" />
                            <h6 className='pt-2'>{item.name}</h6>
                        </div>
                    ))
                    }

                </Slider>
            
            </div>

        </>

    )
}


