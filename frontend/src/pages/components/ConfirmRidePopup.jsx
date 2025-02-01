import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const ConfirmRidePopup = (props) => {
  const [otp, setOtp] = useState('')

  const submitHandler=(e)=>{
      e.preventDefault()
  }
  return (
    <div>
    <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
    props.setRidePopupPanel(false)
  }}>
  <i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
  <h3 className='text-2xl font-semibold mb-5'> Confirm this ride to start!</h3>
  <div className='flex items-center justify-between p-3 mt-4 bg-yellow-200 rounded-lg'>
    <div className='flex items-center gap-3'>
    <img  className='h-10 w-10 rounded-full object-cover' src="https://pcad.edu/wp-content/uploads/2023/09/Daniel-Cardona_400x500_acf_cropped.jpg" alt=""/>
    <h2 className='text-lg font-medium'>Harsh Patel </h2>
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
 <div className='mt-6 w-full'>
 <form onSubmit={(e)=>{
    submitHandler(e)
 }}>
    <input  value={otp} onChange={(e)=>setOtp(e.target.value)} className='bg-[#eee] px-6 py-4 font-mono text-base rounded-lg w-full mt-3' type='text' placeholder='Enter OTP'></input>
 <Link to='/captain-riding'className='w-full flex text-lg justify-center mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</Link>
  <button onClick={()=>{
    props.setConfirmRidePopupPanel(false)
    props.setRidePopupPanel(false)
  }} className='w-full mt-1 text-lg bg-red-400 text-white font-semibold p-2 rounded-lg'>Cancle</button>
 </form>
 </div>
  </div>
</div>
  )
}

export default ConfirmRidePopup