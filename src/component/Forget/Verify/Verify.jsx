import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Verify = () => {
  const [resetCode, setResetCode] = useState('');
  const [validCode, setCode ] = useState(false);

  const handleChange = (e) => {
    setResetCode(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode');
        if (response.status === 200) {
            setResetCode(true);
        } else {
            setCode ('An error occurred. Please try again later.');
        }
    } catch (error) {
        setCode ('An error occurred. Please try again later.');
    }
};
  return (
    <div className='mt-5 pt-5 container'>
      <h2>reset your account password</h2>
      {/* {validCode ? (
        <p>Reset code verified successfully.</p>
      ) : ( */}
        <form onSubmit={handleSubmit}>
          <input
          className=' form-control'
            type="text"
            placeholder="code..."
            value={resetCode}
            onChange={handleChange}
          />
          <button type="submit" className='btn btn-lg me-auto btn-outline-success  '><Link to='/reset'> verify</Link></button>
        </form>
      {/* )} */}
    </div>
  );
};

export default Verify;
