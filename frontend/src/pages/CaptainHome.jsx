import React, {useState} from 'react'
import {useGSAP} from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import CaptainDetails from './components/CaptainDetails'
import RidePopup from './components/RidePopup'
import ConfirmRidePopup from './components/ConfirmRidePopup'


const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const ridePopupPanelRef = useRef(null)

  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)
  const confirmRidePopupPanelRef = useRef(null)


  useGSAP(function(){
    if(ridePopupPanel){
      gsap.to(ridePopupPanelRef.current,{
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(ridePopupPanelRef.current,{
        transform: 'translateY(100%)'
      })
    }
  },[ridePopupPanel])

  useGSAP(function(){
    if(confirmRidePopupPanel){
      gsap.to(confirmRidePopupPanelRef.current,{
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePopupPanelRef.current,{
        transform: 'translateY(100%)'
      })
    }
  },[confirmRidePopupPanel])

  return (
    <div>
      <div className='h-screen'>
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src='https://www.pngplay.com/wp-content/uploads/8/Uber-Logo-Transparent-Background.png'></img>
        <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="text-2xl font-bold ri-logout-box-r-line"></i>
        </Link>
        </div>
     <div className='h-3/5'>
     <img className='h-full w-full object-cover' src="https://www.lindsaysilberman.com/wp-content/uploads/2020/01/how-to-use-google-maps-trip-planner.png"/>
     </div>
     <div className='h-2/5 p-6'>
      <CaptainDetails />
    </div>
    <div ref={ridePopupPanelRef} className='fixed w-full z-10 translate-y-full bg-white px-3 py-10 pt-12 bottom-0 '>
           <RidePopup setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>
      <div ref={confirmRidePopupPanelRef} className='fixed w-full z-10 translate-y-full bg-white px-3 py-10 pt-12 bottom-0 '>
           <ConfirmRidePopup setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
      </div>

    </div>
    </div>
  )
}

export default CaptainHome