import React, { useEffect } from 'react'
import Register from './Components/Register'
import Login from './Components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Profile from './Components/Profile'
import axios from 'axios'
// import './Style.scss'

const App = () => {


  const handleGetProfile = async () => {

    try {

      const token = localStorage.getItem('token')

      const response = await axios.get('https://interview-plus.onrender.com/api/protected',
        { headers: { 'x-access-token': token } }
      )

      console.log('getProfile response', response)
    }
    catch (err) {
      console.error(err);
    }

  }

  useEffect(() => {
    handleGetProfile()
  }, [])


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index  element={<Register/>}/>
          <Route path='/login' element={<Login />}/>
          <Route  path='/home' element={<Home/>}/>
          <Route  path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
