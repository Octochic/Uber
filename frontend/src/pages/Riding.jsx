import React from 'react'
import { Link } from 'react-router-dom'


const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className=" text-2xl font-bold ri-home-4-line"></i>
        </Link>
     <div className='h-1/2'>
     <img className='h-full w-full object-cover' src="https://www.lindsaysilberman.com/wp-content/uploads/2020/01/how-to-use-google-maps-trip-planner.png"/>
     </div>
     <div className='h-1/2 p-4'>
     <div className='flex items-center justify-between'>
      <img className='h-15' src="https://img2.cgtrader.com/items/4127546/2c933281e5/large/mercedes-amg-coupe-3d-model-2c933281e5.jpg"/>
  <div className='text-right'>
    <h2 className='text-lg font-medium'>Sarthak</h2>
    <h4 className='text-xl font-semibold'>MH 04 AD1234</h4>
    <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
  </div>
 </div >


  <div className='flex gap-2 justify-between flex-col items-center'>
  <div className='w-full mt-5 '>
    
    <div className='flex items-center gap-5 p-3 border-gray-300 border-b-2'><i className=" text-lg ri-map-pin-2-fill"></i>
    <div>
        <h3 className='text-lg font-medium'>358/16-B</h3>
        <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
    </div></div>
    <div className='flex items-center gap-5 p-3 '><i className=" text-lg ri-money-rupee-circle-fill"></i>
    <div>
        <h3 className='text-lg font-medium'>₹193.20</h3>
        <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
    </div></div>
  </div>
       <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payement</button>  
 </div>
    </div>
</div>
    
  )
}

export default Riding