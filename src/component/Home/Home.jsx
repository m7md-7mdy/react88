import React from 'react'
import MainSlider from '../MainSlider/MainSlider'
import Categories from '../Catgegories/Categories'
import Products from '../Products/Products'

export default function Home() {
  return (
    <div className=' mt-5'>
      <MainSlider />
      <Categories/>
      <Products/>
    </div>
  )
}
