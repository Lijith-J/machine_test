import React, {  useState } from 'react'
import Navbar from './Navbar'
import { Col, Container } from 'react-bootstrap'
import axios from 'axios'

const Profile = () => {

  const [inputValues, setInputValues] = useState({
    name: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputValues((prev) => ({ ...prev, [name]: value }))
  }
  console.log(inputValues)


  const handleUpdate = async (e) => {
    e.preventDefault()

    try {

      const token = localStorage.getItem('token')

      const response = await axios.put('https://interview-plus.onrender.com/api/update-user', inputValues,
        { headers: { 'x-access-token': token } })

      console.log(token)

      if (response.status === 200) {
        console.log(response)
        alert('Update Success')
      }

    }
    catch (err) {
      console.error(err);
      alert("Update Failed")
    }

  }



  const handleDelete = async (e) => {
    e.preventDefault();

    try {

      const token = localStorage.getItem('token')
      console.log('token ---', token)


      const response = await axios.delete('https://interview-plus.onrender.com/api/delete-user',
        { headers: { "x-access-token": token } })

      if (response.status === 200) {
        console.log(response)
        alert('User Deleted')

      }

    }
    catch (err) {
      console.error(err);
      alert('Can\'t delete')
    }

  }



  
  return (
    <div>
      <Navbar />

      <Container className=' p-3 d-flex justify-content-center profile-main-div'>

        <Col md={6} className='bg-white h-75 rounded  p-3 d-flex flex-column  justify-content-center  align-items-center '>
          <form action="" className=' w-75  d-flex h-100  flex-column  justify-content-evenly  align-items-center'>
            <h2>Update</h2>
            <input type="text" name='name' value={inputValues.name} onChange={handleChange} className='w-100 p-2' placeholder='Name' />
            <input type="text" name='password' value={inputValues.password} onChange={handleChange} className='w-100 p-2' placeholder='Password' />

            <div className=' w-75 p-4 d-flex justify-content-evenly '>
              <button onClick={handleUpdate}>Update</button>
              <button onClick={handleDelete}>Delete</button>
            </div>

          </form>

        </Col>

      </Container>

    </div>
  )
}

export default Profile
