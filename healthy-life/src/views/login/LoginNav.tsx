import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import FindId from './FindId'
import FindPassword from './FindPassword'
import "../../style/login/login.css"

function LoginNav() {
  return (
    <div>
      <Login/>
      <Routes>
        <Route path='/login/FindId' element={<FindId/>}/>
        <Route path='/login/FindPassword' element={<FindPassword/>}/>
      </Routes>
    </div>
  )
}

export default LoginNav