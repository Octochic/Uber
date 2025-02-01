import React, {useState} from 'react'
import {useGSAP} from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'


const RidePopup = (props) => {
return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
        props.setRidePopupPanel(false)
      }}>
      <i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'> New Ride Available!</h3>
      <div className='flex items-center justify-between p-3 mt-4 bg-yellow-200 rounded-lg'>
        <div className='flex items-center gap-3'>
        <img  className='h-10 w-10 rounded-full object-cover' src="https://ff-storage-p01-storage.filmfreeway.com/users/avatars/002/815/237/original/beaf9fbe2d-avatar.jpg?1643747696" alt=""/>
        <h2 className='text-lg font-medium'>Rajesh Sharma</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2 kM</h5>
      </div>
      <div className='flex gap-2 justify-between flex-col items-center'>
      <div className='w-full mt-5'>
        <div className='flex items-center gap-5 p-3 border-gray-300 border-b-2'>
        <i className=" text-lg ri-map-pin-user-fill"></i>
        <div>
            <h3 className='text-lg font-medium'>562/11-A</h3>
            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
        </div>
        </div>
        <div className='flex items-center gap-5 p-3 border-gray-300 border-b-2'><i className=" text-lg ri-map-pin-2-fill"></i>
        <div>
            <h3 className='text-lg font-medium'>358/16-B</h3>
            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
        </div></div>
        <div className='flex items-center gap-5 p-3 '><i className=" text-lg ri-money-rupee-circle-fill"></i>
        <div>
            <h3 className='text-lg font-medium'>₹193.20</h3>
            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
        </div>
       </div>
      </div>
      <div className='w-full flex items-center justify-between'>
      <button onClick={()=>{
        props.setRidePopupPanel(false)
      }} className='mt-1 bg-gray-200 text-gray-700 font-semibold p-3 px-10 rounded-lg'>Ignore</button>
      <button onClick={()=>{
        props.setConfirmRidePopupPanel(true)
      }} className='mt-1 bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Accept</button>
      </div>
      </div>
    </div>
  )
}

export default RidePopup