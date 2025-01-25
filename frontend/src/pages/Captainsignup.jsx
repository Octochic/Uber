import React from 'react'
import { Link } from 'react-router-dom'
const CaptainSignup = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [Firstname, setFirstname] = React.useState('')
  const [Lastname, setLastname] = React.useState('')
  const[userData, setUserData] = React.useState({})
  
  
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName:{
      firstname: Firstname,
      lastname: Lastname
      },
      email: email,
      password: password})
      console.log(userData)
    setEmail('')
    setFirstname('')
    setLastname('')
    setPassword('')
  }
  
  
  
    return (
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div >
        <img className='w-16 mb-10' src='https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png'></img>
        <form onSubmit={(e) => submitHandler(e)}>
        <h3 className='text-base font-medium mb-2'>Enter Captain name</h3>
        <div className='flex gap-4 mb-5'>
        <input 
        required 
        className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-lg placeholder:text-base'
        type="text" 
        placeholder="Firstname" 
        value={Firstname}
        onChange={(e) => {
          setFirstname(e.target.value)
        }}
        />
        <input 
        required 
        className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-lg placeholder:text-base'
        type="text" 
        placeholder="Lastname"
        value={Lastname}
        onChange={(e) => {
          setLastname(e.target.value)
        }} 
        />
        </div>
        <h3 className='text-base font-medium mb-2'>Enter Captain email</h3>
        <input 
        required 
        className='bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'
        type="email" 
        placeholder="email@example.com" 
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        />
        <h3 className='text-base font-medium mb-2'>Enter Password</h3>
        <input
         required 
         className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
         type="password" 
         placeholder="password"
         value={password}
        onChange={(e) => {
            setPassword(e.target.value)
          }} 
         />
        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Signup</button>
        <p className='text-center'>Already have an account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
        </form>
        </div>
        <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service</span> apply.</p><p/></div>
      </div>
  
    )
  }

export default CaptainSignup