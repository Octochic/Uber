import React, {useState} from 'react'
import {useGSAP} from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from './components/LocationSearchPanel'
import VehiclePanel from './components/VehiclePanel'
import ConfirmedRide from './components/ConfirmedRide'
import LookingForDriver from './components/LookingForDriver'
import WaitingForDriver from './components/WaitingForDriver'


const Home = () => {
  const [pickup, setpickup] = useState('')
  const [destination, setdestination] = useState('')
  const panelRef = useRef(null)
  const [panelOpen, setPanelOpen] = useState(false);
  const [activeInputType, setActiveInputType] = useState('pickup'); // Default value can be 'pickup'

  const confirmedRidePanelRef= useRef(null)
  const vehiclePanelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)


  const [vehiclePanel, setvehiclePanel] = useState(false)
  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false)
  const [vehicleFound, setvehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)


  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height: '70%',
        padding:24
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,{
        height: '0%',
        padding:0
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen])

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform: 'translateY(100%)'
      })
    }
  },[vehiclePanel])

  useGSAP(function(){
    if(confirmedRidePanel){
      gsap.to(confirmedRidePanelRef.current,{
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(confirmedRidePanelRef.current,{
        transform: 'translateY(100%)'
      })
    }
  },[confirmedRidePanel])

  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(vehicleFoundRef.current,{
        transform: 'translateY(100%)'
      })
    }
  },[vehicleFound])
  
useGSAP(function(){
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current,{
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(waitingForDriverRef.current,{
        transform: 'translateY(100%)'
      })
    }
  },[waitingForDriver])

  const findTrip = () => {
    setvehiclePanel(true);
    setPanelOpen(false);

  };

  
  const submitHandler=(e)=>{
  e.preventDefault()
 }

  
return(
  <div className='h-screen relative overflow-x-hidden'>
    <img className='w-16 absolute left-5 top-7'  src="https://www.pngplay.com/wp-content/uploads/8/Uber-Logo-Transparent-Background.png" alt=""/>
    <div  className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://www.lindsaysilberman.com/wp-content/uploads/2020/01/how-to-use-google-maps-trip-planner.png"/>
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full inset-0 z-10'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5  ref={panelCloseRef} onClick={()=>{
            setPanelOpen(false)
          }}  className='absolute top-6 right-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
        <h4 className='text-2xl font-semibold' >Find a trip</h4>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
        <div className='line absolute h-16 w-1 left-10 top-[45%] bg-gray-700 rounded-full '></div>
          {/* <input 
          onClick={()=>{
            setPanelOpen(true)
          }}
          value={pickup}
          onChange={(e)=>{
            setpickup(e.target.value)
          }
          }
          className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type='text' placeholder='Add a pickup location'/>
          <input 
          onClick={()=>{
            setPanelOpen(true)
          }}
           value={destination}
           onChange={(e)=>{
             setdestination(e.target.value)
           }
           }
          className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' type='text' placeholder='Enter your destination'/> */}

<input 
  onClick={() => {
    setPanelOpen(true);
    setActiveInputType('pickup'); // Set active type
  }}
  value={pickup}
  onChange={(e) => setpickup(e.target.value)}
  className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' 
  type='text' 
  placeholder='Add a pickup location'
/>

<input 
  onClick={() => {
    setPanelOpen(true);
    setActiveInputType('destination'); // Set active type
  }}
  value={destination}
  onChange={(e) => setdestination(e.target.value)}
  className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' 
  type='text' 
  placeholder='Enter your destination'
/>

        </form>
        <button
            onClick={findTrip}
            className="bg-black text-white px-4 py-2 mt-2 rounded-lg w-full"
          >
            Find Trip
          </button>
        </div>
        {/* <div  ref={panelRef} className='bg-white p-5'>
            <LocationSearchPanel setpanelOpen={setpanelOpen}  setvehiclePanel={setvehiclePanel} />
        </div> */}
        <div ref={panelRef} className="bg-white p-5">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setvehiclePanel}
            searchText={activeInputType === 'pickup' ? pickup : destination}
            type={activeInputType}
            setPickup={setpickup}
            setDestination={setdestination}
          />
        </div>
      <div  ref={vehiclePanelRef} className='fixed w-full z-10 bg-white px-3 py-10 pt-12 bottom-0 translate-y-full'>
           <VehiclePanel setConfirmedRidePanel={setConfirmedRidePanel} setvehiclePanel={setvehiclePanel} />
      </div>
      <div  ref={confirmedRidePanelRef} className='fixed w-full z-10 bg-white px-3 py-6 pt-12 bottom-0 translate-y-full'>
           <ConfirmedRide setConfirmedRidePanel={setConfirmedRidePanel} setvehicleFound={setvehicleFound} />
      </div>
      <div  ref={vehicleFoundRef} className='fixed w-full z-10 bg-white px-3 py-6 pt-12 bottom-0 translate-y-full'>
          <LookingForDriver setvehicleFound={setvehicleFound} />
      </div>
      <div ref={waitingForDriverRef} className='fixed w-full z-10 bg-white px-3 py-6 pt-12 bottom-0'>
          <WaitingForDriver waitingForDriver={WaitingForDriver} />
      </div>
      </div>
  </div>
  
)

}

export default Home
