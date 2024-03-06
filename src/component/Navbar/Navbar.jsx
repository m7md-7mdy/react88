import React, { useContext, useEffect } from 'react'
import logo from "../../assets/images/freshcart-logo.svg"
import { NavLink } from 'react-router-dom'
import { Contaxtt } from '../../Contaxtt/Contaxtt'

export default function Navbar() {

    let { counter, apiCart, setCounter } = useContext(Contaxtt)
    useEffect(() => {
        (async () => {
            let data = await apiCart()
            console.log(data);
            // setCounter(data.numOfCartItems)
        })()
    }, [])
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 pt-3 fixed-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/home"><img src={logo} alt="" /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categoris">Categorise</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/brands">Brands</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link position-relative" to="/cart">cart<i className="ps-1 fa-solid fa-cart-shopping cartIcon text-black-50 ">
                            </i>
                                {counter ? <span className=" position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {counter}
                                    <span className="visually-hidden">unread messages</span>
                                </span> : ''}
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link position-relative" to="/wishlist">wishlist
                                <i className="ps-2 fa-solid fa-heart cartIcon text-danger" />
                                <span className=" position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    9
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link ms-3 " to="/signin">LogOut <i className="fa-solid fa-arrow-right-from-bracket cartIcon ps-1" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}