import React, { useState } from 'react'
import './Styles.scss'


import { Col, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



const Login = () => {


  const navigateTo = useNavigate()

  const [loginInputValues, setLoginInputValues] = useState({
    email: '',
    password: ''
  })


  const handleInputValues = (e) => {
    const { name, value } = e.target
    setLoginInputValues((prev) => ({ ...prev, [name]: value }))
  }
  console.log(loginInputValues)


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://interview-plus.onrender.com/api/login', loginInputValues)
      
      if (response.status === 200) {
        alert("Hiiiiiiiiii")
        console.log(response)
        localStorage.setItem('login token', response.data.token)
        navigateTo('/home')
      }
      // else if(response.status === 400){
      //   alert('not Regitered')
      // }
      
    }
    catch (err) {
      console.error(err);
      alert("Account Not Registered")
      navigateTo('/')
    }

  }

  return (
    <>
      <Container fluid className=' p-5 d-flex justify-content-center  align-items-center login-main'>

        <Col md={5} className=' h-75 p-3 rounded bg-body d-flex justify-content-between gap-4 flex-column align-items-center  '>

          <form action="" className=' h-100 p-2 rounded  d-flex justify-content-evenly flex-column align-items-center  '>
            <h2>Log In</h2>

            <input type="text" className='p-2' name='email' value={loginInputValues.email} onChange={handleInputValues} required placeholder='Email' />
            <input type="text" className='p-2' name='password' value={loginInputValues.password} onChange={handleInputValues} required placeholder='Password' />

            <button onClick={handleLogin} className=' w-100 p-1 rounded text-white  login-button'>Login</button>

          </form>

          <div className='p-3 gap-1 d-flex '>
            Create an account. <Link to={'/'}>register</Link>
          </div>
        </Col>

      </Container>


    </>
  )
}

export default Login
