import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login_style.css'
import axios from 'axios'

const Login = () => {

  const navigate = useNavigate()
  const [logInInputvalue, setLoginInputValue] = useState({})

  const handleInput = (e) => {
    const { name, value } = e.target
    setLoginInputValue((prev) => ({ ...prev, [name]: value }))

  }
  console.log(logInInputvalue)

  const handleLogin = async () => {

    try {

      const response = await axios.post( 'https://dccbackend.plusitpark.com/api/user/login', {
        email: 'john.do1e1@example.com',
        password: 'securepassword'
      })

      if (response.status == 200) {
        localStorage.setItem('token', JSON.stringify(response.data.token))
        // navigate('/home')
        alert('log in successs')
      }
      else {
        alert('Account not fond')
      }
      console.log('result', response)
    }

    catch (err) {
      console.error(err)
    }

  }

  return (
    <>

      <div className='login-parent-div'>

        <div className='login-box'>
          <input type="email" name='email' value={logInInputvalue.email} onChange={handleInput} />
          <input type="password" name='password' value={logInInputvalue.password} onChange={handleInput} />

          <button onClick={handleLogin}>Login</button>

          <div>
            Create account. <Link to={'/register'}>Register</Link>
          </div>

        </div>

      </div>

    </>
  )
}

export default Login
