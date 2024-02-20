import React from 'react'
import Logo from './images/Logo.png'
import SeaImage from './images/Sea.png'

function Login() {
    return (
        <div className='relative bg-gradient-to-br from-[#0E172A] to-[#1E455E]'>
            <div className='absolute z-10 w-full flex justify-end'>
                <img src={SeaImage} alt='Sea Image' className='object-cover h-screen w-1/2' />
            </div>
            <div className='relative z-20 text-white flex flex-col items-center justify-center w-full min-h-screen'>  
                <div className='bg-transparent backdrop-blur-2xl shadow-lg flex flex-col items-center justify-center w-[85%] md:w-[70%] lg:w-[60%] py-8 rounded-2xl font-poppins my-5'>
                    <img src={Logo} alt='Mora UXplore 2.0 Logo' width={100} />
                    <div className='flex flex-col items-center justify-center my-6'>
                        <h1 className='text-2xl tracking-widest'>WELCOME BACK</h1>
                        <p className='text-xs'>Please enter your details.</p>
                    </div>
                    <form className='flex flex-col items-center justify-center w-[85%] md:w-[45%]'>
                        <label className='w-full text-sm mb-1' htmlFor='email'>Email</label>
                        <input
                        type='email'
                        id='email'
                        placeholder='Enter your email'
                        className='w-full bg-transparent text-sm p-2 mb-4 border border-white border-opacity-25 rounded-lg'
                        />
                        <label  className='w-full text-sm mb-1' htmlFor='password'>Password</label>
                        <input
                        type='password'
                        id='password'
                        placeholder='Enter your password'
                        className='w-full bg-transparent text-sm p-2 mb-4 border border-white border-opacity-25 rounded-lg'
                        />
                        <div className='flex justify-between text-xs w-full mt-4 mb-2'>
                            <div className='flex flex-row'>
                                <input
                                    type='checkbox'
                                    id='remember'
                                    className='mr-1'
                                />
                                <label htmlFor='remember'>Remember me</label>
                            </div>
                            <div>
                                <a href='#'>Forgot password?</a>
                            </div>
                        </div>
                        <button
                            type='submit'
                            className='w-[100%] mb-4 bg-black bg-opacity-10 rounded-md py-1 text-sm'>
                            Log in
                        </button>
                        <p className='text-xs'>Don't have an account? <a href='#'>Register free!</a></p>
                    </form>
            
                </div>  
            </div>
        </div>
    )
  }

export default Login;


