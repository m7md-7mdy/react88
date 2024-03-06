import React from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import MainLayout from './component/Layout/MainLayout'
import AuthLayout from './component/Layout/AuthLayout'
import Home from './component/Home/Home'
import Brands from './component/Brands/Brands'
import Products from './component/Products/Products'
import Cart from './component/Cart/Cart'
import Wishlist from './component/Wishlist/Wishlist'
import SignUp from './component/SignUp/SignUp'
import Signin from './component/Signin/Signin'
import NotFound from './component/NotFound/NotFound'
import { Offline, Online } from "react-detect-offline";
import DetailsProducts from './component/DetailsProducts/DetailsProducts'
import Contaxtprovider from './Contaxtt/Contaxtt'
import ProtectedRoutes from './component/ProtectedRoutes/ProtectedRoutes'
import { ToastContainer } from 'react-toastify';
import Categorie from './component/Catgegories/Categorie'
import Address from './component/Address/Address'
import ForGetPassword from './component/Forget/ForGetPasswoed/ForGetPassword'
import Verify from './component/Forget/Verify/Verify'
import Loading from './component/Loading/Loading'
import Reset from './component/Forget/Reset/Reset'

export default function App() {
  let x = createHashRouter([
    {
      path: '/', element: <MainLayout />, children: [
        { index: true, element: <ProtectedRoutes><Home /></ProtectedRoutes> },
        { path: 'home', element: <ProtectedRoutes><Home /></ProtectedRoutes> },
        { path: 'categoris', element: <ProtectedRoutes> <Categorie /></ProtectedRoutes> },
        { path: 'brands', element: <ProtectedRoutes> <Brands /></ProtectedRoutes> },
        { path: 'products', element: <ProtectedRoutes><Products /></ProtectedRoutes> },
        { path: 'cart', element: <ProtectedRoutes> <Cart /></ProtectedRoutes> },
        { path: 'wishlist', element: <ProtectedRoutes><Wishlist /></ProtectedRoutes> },
        { path: 'products-details/:id', element: <ProtectedRoutes><DetailsProducts /></ProtectedRoutes> },
        { path: 'address/:id', element: <ProtectedRoutes><Address /></ProtectedRoutes> },
        { path: 'forget-password', element: <ProtectedRoutes><ForGetPassword/></ProtectedRoutes> },
        { path: 'verify', element: <ProtectedRoutes><Verify/></ProtectedRoutes> },
        { path: 'reset', element: <ProtectedRoutes><Reset/></ProtectedRoutes> },
        { path: '*', element: <NotFound /> },
      ]
    },
    {
      path: '/', element: <AuthLayout />, children: [
        { path: 'signup', element: <SignUp /> },
        { path: 'signin', element: <Signin /> },
      ]
    },
  ])
  return (
    <>
      <Offline>
        <div className='offline'>You Are Offline Now !!</div>
      </Offline>
      <Contaxtprovider>
        <RouterProvider router={x} />

      </Contaxtprovider>


      <ToastContainer theme='dark' autoClose={1000} />



    </>
  )
}
