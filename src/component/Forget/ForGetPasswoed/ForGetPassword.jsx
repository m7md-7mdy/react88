import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ForGetPassword() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', { email });
            if (response.status === 200) {
                setSubmitted(true);
            } else {
                setError('An error occurred. Please try again later.');
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className='pt-5 mt-5 container'>
            <h2>please enter your verification code</h2>
            {error && <p>{error}</p>}
            {submitted ? (
                <p>An email has been sent to {email} with instructions to reset your password.</p>
            ) : (
                <form  onSubmit={handleSubmit}>
                       <label htmlFor="email">Email:</label>
                        <input
                         className=' form-control'
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <div className=' d-flex justify-content-center mt-4'>
                        <button type="submit" className='btn btn-lg me-auto btn-outline-success  '><Link to='/verify'> verify</Link></button>
                        {/* <Link to='/verify' className=' text-main fs-4 mt-3 btn bg-main text-white '> forget your password ?</Link> */}
                        </div>
                  
                </form>
            )}
        </div>
    );
}

export default ForGetPassword;
