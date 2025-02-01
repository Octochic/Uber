import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import FinishRide from './FinishRide'
import {useGSAP} from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'

const CaptainRiding = () => {

    const [finishRidePanel, setfinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)

    useGSAP(function(){
        if(finishRidePanel){
          gsap.to(finishRidePanelRef.current,{
            transform: 'translateY(0)'
          })
        }else{
          gsap.to(finishRidePanelRef.current,{
            transform: 'translateY(100%)'
          })
        }
      },[finishRidePanel])





  return (
    
    <div className='h-screen'>
    <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
    <img className='w-16' src='https://www.pngplay.com/wp-content/uploads/8/Uber-Logo-Transparent-Background.png'></img>
    <Link to='/captain-Riding' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
    <i className="text-2xl font-bold ri-logout-box-r-line"></i>
    </Link>
    </div>
 <div className='h-4/5'>
 <img className='h-full w-full object-cover' src="https://www.lindsaysilberman.com/wp-content/uploads/2020/01/how-to-use-google-maps-trip-planner.png"/>
 </div>
 <div className='h-1/5 p-6 flex items-center justify-between relative bg-yellow-400'
 onClick={()=>{
    setfinishRidePanel(true)
 }}
 
 >
 <h5 className='p-1 text-center w-[95%] absolute top-0' onClick={()=>{
        
    }}>
    <i className=" text-3xl text-black ri-arrow-up-wide-line"></i></h5>
  <h4 className='text-xl font-semibold'>4 KM away</h4>
  <button className=' bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
</div>
<div  ref={finishRidePanelRef} className='fixed w-full h-screen z-10 translate-y-full bg-white px-3 py-10 pt-12 bottom-0 '>
           <FinishRide  setfinishRidePanel={setfinishRidePanel}/>
      </div>

</div>

  )
}

export default CaptainRiding