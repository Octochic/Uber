import React, { useState, useEffect } from 'react';
import {Route, Routes} from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './context/CaptainProtectWrapper'
import Riding from './pages/riding';
import CaptainRiding from './pages/components/CaptainRiding';
import 'remixicon/fonts/remixicon.css'


const App = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-riding" element={<CaptainRiding />}/>
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>
        }/>
        <Route path='/user/logout' element={
          <UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
        }/>
        <Route path='/captain-home' element={
  <CaptainProtectWrapper>
    <CaptainHome />
  </CaptainProtectWrapper>
}/>
        
         
      </Routes>
    </div>
  )
}

export default App