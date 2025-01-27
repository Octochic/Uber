import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserSignup = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [firstname, setFirstname] = React.useState('')
  const [lastname, setLastname] = React.useState('')
  
  
  const {user, setUser} = React.useContext(UserDataContext)
  const navigate = useNavigate()
  // const {setUser} = React.useContext(UserDataContext)
  
//   const submitHandler = async(e) => {
//     e.preventDefault();
//     const newUser = {
//       fullname: {
//         firstname: firstname,
//         lastname: lastname
//       },
//       email: email,
//       password: password
//     }

//     const response = await axios.post(`http://localhost:4000/users/register`, newUser)
    
//     if(response.data) {
//       setUser({
//         email: response.data.email,
//         fullname: {
//           firstname: response.data.fullname.firstname,
//           lastname: response.data.fullname.lastname
//         }
//       })
//       navigate('/home', { replace: true })  // Force navigation
//     }
// }
  
const submitHandler = async(e) => {
  e.preventDefault();
  try {
    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password
    };

    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
    
    if(response.status === 201) {
      setUser({
        email: response.data.user.email,
        fullname: {
          firstname: response.data.user.fullname.firstname,
          lastname: response.data.user.fullname.lastname
        }
      });
      localStorage.setItem('token', response.data.token)
      navigate('/home');
    }
  } catch (error) {
    console.error('Registration failed:', error);
  }
}
  
  
  
    return (
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div >
        <img className='w-16 mb-10' src='https://www.pngplay.com/wp-content/uploads/8/Uber-Logo-Transparent-Background.png'></img>
        <form onSubmit={(e) => submitHandler(e)}>
        <h3 className='text-base font-medium mb-2'>What's your name?</h3>
        <div className='flex gap-4 mb-5'>
        <input 
        required 
        className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-lg placeholder:text-base'
        type="text" 
        placeholder="Firstname" 
        value={firstname}
        onChange={(e) => {
          setFirstname(e.target.value)
        }}
        />
        <input 
        required 
        className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-lg placeholder:text-base'
        type="text" 
        placeholder="Lastname"
        value={lastname}
        onChange={(e) => {
          setLastname(e.target.value)
        }} 
        />
        </div>
        <h3 className='text-base font-medium mb-2'>What's your email?</h3>
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
        <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
        </form>
        </div>
        <div>
        <p className='text-[10px] leading-tight'>By proceeding, you consent to receiving calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
        </div>
      </div>
  
    )
  }

export default UserSignup