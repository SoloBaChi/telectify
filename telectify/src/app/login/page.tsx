import React from 'react';
import Link from 'next/link';

function Login() {
    return (
        <div className='min-h-screen bg-gray-300 border'>
        <section className='w-4/5 lg:w-3/5 mx-auto'>
            <form className='form-container'>
            <h3 className='mb-3 text-2xl font-bold text-left mt-8'>Login to your account</h3>
            <span className='mb-4 block'>Enter your details correctly</span>
            <div className="form-body">
                <div className="form-field mb-8">
                    <label htmlFor="address" 
                    className='block mb-2 text-sm text-gray-900 font-bold'>
                      House  Address
                    </label>
                    <input 
                    type="text" 
                    placeholder='N0 1 ziks drive' 
                    id='address'
                    className='bg-gray-50 border border-gray-300 text-white-900 rounded-lg w-full p-2.5 focus:outline-none focus:ring-blue-500 focus:border-blue-500 '
                    />
                </div>
                <div className="form-field mb-8">
                    <label htmlFor="email"
                    className='block mb-2 text-sm text-gray-900 font-bold'>
                    House ID
                    </label>
                    <input 
                    type="text" 
                    placeholder='Enter your unique id'
                    id="email"
                    className='bg-gray-50 border border-gray-300 text-white-900 rounded-lg w-full p-2.5 focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    />
                </div>
                <div className="form-field">
                    <button
                    className='text-center bg-blue-600 rounded-lg text-white w-full block pb-2 pt-2'
                    >
                     Login
                    </button>
                </div>
                <p className='text-center text-sm font-semibold mt-4'>Do not have an account <Link className='text-blue-600' href="/signup">  Signup</Link> </p>
            </div>
            </form>
        </section>
        </div>
    );
}

export default Login;