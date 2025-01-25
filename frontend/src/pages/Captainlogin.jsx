import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'

const Captainlogin = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const[CaptainData, setUserData] = React.useState({})
  
  
  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password})
    setEmail('')
    setPassword('')
  }
  
  
  
    return (
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-16 mb-2' src='https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png'></img>
        <form onSubmit={(e) => submitHandler(e)}>
        <h3 className='text-lg font-medium mb-2'>Enter Email</h3>
        <input 
        required 
        value={email}
        onChange={(e) => 
        setEmail(e.target.value)
        }
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base
        '
        type="email" 
        placeholder="email@example.com" 
        />
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input
         required 
         value={password}
         onChange={(e) => 
         setPassword(e.target.value)
        }
         className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base
        '
         type="password" 
         placeholder="password" 
         />
        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base
        '>Login</button>
  
        <p className='text-center'>Want to join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
        </form>
        </div>
        <div>
          <Link to='/login'  className='bg-[#f3c164] flex flex-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base
        '>Sign in as User</Link>
        </div>
      </div>
  
    )
  }
  

export default Captainlogin