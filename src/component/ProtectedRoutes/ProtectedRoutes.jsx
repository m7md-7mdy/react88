
import { Navigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
export default function ProtectedRoutes({ children }) {
    let token = localStorage.getItem('token')
    try {
        const decode = jwtDecode(token)
        if (decode.role != 'user') {
            localStorage.clear()
            return <Navigate to='/signin' />
        }
    }
    catch (err) {
        console.log(err);
        localStorage.clear()
        return <Navigate to='/signin' />
    }
    if (token) return children
    return <Navigate to='/signin' />
}
