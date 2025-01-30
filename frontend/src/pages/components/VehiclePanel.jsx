import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
        props.setvehiclePanel(false)
      }}><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div onClick={()=>{
          props.setConfirmedRidePanel(true)
        }} className='flex w-full border-2 border-gray-200 active:border-black rounded-xl p-3 mb-2 items-center justify-between'>
          <img  className='h-12' src='https://th.bing.com/th/id/OIP.Z5LVQHkibE7fAVU6_ork7QHaEg?w=1363&h=831&rs=1&pid=ImgDetMain' alt=''/>
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
            <h5 className='font-medium text-sm'> 2 mins away</h5>
            <p className='font-normal text-gray-600 text-xs'>Affordable, compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹193.20</h2>
        </div>
        <div onClick={()=>{
          props.setConfirmedRidePanel(true)
        }} className='flex w-full border-2  border-gray-200 active:border-black rounded-xl p-3 mb-2 items-center justify-between'>
          <img  className='h-15' src='https://th.bing.com/th/id/OIP.7ywu38c_ctoLKG47jTkgtQHaGL?w=3600&h=3000&rs=1&pid=ImgDetMain' alt=''/>
          <div className='-ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className='ri-user-3-fill'></i>1</span></h4>
            <h5 className='font-medium text-sm'> 2 mins away</h5>
            <p className='font-normal text-gray-600 text-xs'>Affordable, motorcycle rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹65.12</h2>
        </div>
        <div onClick={()=>{
          props.setConfirmedRidePanel(true)
        }} className='flex w-full border-2  border-gray-200 active:border-black rounded-xl p-3 mb-2 items-center justify-between'>

<img  className='h-16' src='https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjk1Mi0xNTUucG5n.png' alt=''/>
<div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className='ri-user-3-fill'></i>3</span></h4>
            <h5 className='font-medium text-sm'> 2 mins away</h5>
            <p className='font-normal text-gray-600 text-xs'>Affordable, motorcycle rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹118.42</h2>
        </div>  
    </div>
  )
}

export default VehiclePanel