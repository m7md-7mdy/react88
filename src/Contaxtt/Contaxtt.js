import axios from "axios";
import { createContext, useState } from "react";


export let Contaxtt = createContext(0)
async function addToCart(productId) {
    return axios.post('https://ecommerce.routemisr.com/api/v1/cart', { productId },
        {
            headers: {
                token: localStorage.getItem('token')
            }
        }
    ).then(({ data }) => data).catch(err => err)
}
async function apiCart() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/cart',
        {
            headers: {
                token: localStorage.getItem('token')
            }
        }
    ).then(({ data }) => data).catch(err => err)
}

async function deleteItem(productId) {
    return axios.delete('https://ecommerce.routemisr.com/api/v1/cart/' + productId,
        {
            headers: {
                token: localStorage.getItem('token')
            }
        }
    ).then(({ data }) => data).catch(err => err)
}

async function updateQTY(productId, count) {
    return axios.put('https://ecommerce.routemisr.com/api/v1/cart/' + productId, { count },
        {
            headers: {
                token: localStorage.getItem('token')
            }
        }
    ).then(({ data }) => data).catch(err => err)
}
async function pay(cartId, shippingAddress) {
    return axios.post('https://ecommerce.routemisr.com/api/v1/orders/checkout-session/' + cartId, { shippingAddress },
        {
            headers: {
                token: localStorage.getItem('token')
            }
        }
    ).then(({ data }) => data).catch(err => err)
}

export default function Contaxtprovider({ children }) {
    let [counter, setCounter] = useState(0)
    return <Contaxtt.Provider value={{
        counter,
        setCounter,
        addToCart,
        apiCart,
        deleteItem,
        updateQTY,
        pay,
    }}>
        {children}
    </Contaxtt.Provider>
}