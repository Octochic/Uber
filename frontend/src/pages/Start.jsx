import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>

        <div className='bg-cover bg-no-repeat bg-center bg-right bg-[url(https://img.freepik.com/premium-vector/city-taxi-mobile-service-modern-urban-layout_81534-1804.jpg?w=740)] h-screen pt-8 flex justify-between flex-col w-full'>
        <img className='w-14 ml-8' src='https://www.pngplay.com/wp-content/uploads/8/Uber-Logo-Transparent-Background.png'/>
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-3xl font-bold'>Get started with Uber</h2>

            <Link to='/login'className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</ Link>
        </div>
        </div>
    </div>
  )
}

export default Start