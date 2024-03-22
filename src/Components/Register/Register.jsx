
import React, { useEffect, useState } from 'react'
import './Register_style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Register = () => {

    const navigate = useNavigate()

    const [inputValues, setInputValue] = useState({})

    const handleInput = (e) => {
        const { name, value } = e.target
        setInputValue((prev) => ({ ...prev, [name]: value }))
    }
    console.log(inputValues)


    const handleApi = async () => {

        try {

            const response = await axios.post('https://dccbackend.plusitpark.com/api/user/register',
                {
                    name: "John Doe1",
                    email: "john.do1e1@examle.com",
                    password: "securepassword",
                    phoneNumber: "12345678910",
                    date_of_birth: "2005-10-17",
                    assembly: "Sample Block",
                    constituency: "Sample Loka sabha",
                    district: "Sample",
                    panchayath: "Sample",
                    municipality: "Sample",
                    corporation: "Sample"
                }
            );

            if (response.status == 200) {
                localStorage.setItem("token", JSON.stringify(response.data.token));
                alert("Registration success");
                navigate('/')
            }
            else {
                console.error("Error", response.data);
                alert("Registration failed");
            }

        } catch (error) {
            console.error('Error:', error);
            alert("error.");
        }

    }


    useEffect(() => {

        const getProtectedData = async () => {
            let token = JSON.parse(localStorage.getItem('token'))
            if (token) {
                try {
                    const response = await axios.get('https://dccbackend.plusitpark.com/api/user/protected',
                        {
                            headers:
                                { 'x-access-token":token': token }
                        }
                    )
                    console.log('protected-data', response)
                }
                catch (err) {
                    console.error(err);
                }
            }
        }

        getProtectedData()
        

    }, [])


    return (

        <>
            <div className='register-parent'>

                <div className='register-form-box'>

                    <input type="text" className='name' name='name' value={inputValues.name} onChange={handleInput} placeholder=' Name' />
                    <input type="email" className='email' name='email' value={inputValues.email} onChange={handleInput} placeholder='Email' />
                    <input type="text" className='password' name='password' value={inputValues.password} onChange={handleInput} placeholder='Password' />
                    <input type="text" className='phoneNo' name='phone_number' value={inputValues.phone_number} onChange={handleInput} placeholder='Phone' />

                    <input type="date" className='DOB' name="date_of_birth" value={inputValues.date_of_birth} onChange={handleInput} id="" />

                    <input type="text" className='assembly' name='assembly' value={inputValues.assembly} onChange={handleInput} placeholder='Assembly' />

                    <select name="constituency" value={inputValues.constituency} onChange={handleInput} className='constituency' id="">
                        <option value="constituency">constituency</option>
                        <option value="constituency">constituency</option>
                        <option value="constituency">constituency</option>
                    </select>

                    <select name="district" value={inputValues.district} onChange={handleInput} className='district' id="">
                        <option value="district">district</option>
                        <option value="district">district</option>
                        <option value="district">district</option>
                    </select>

                    <select name="panchayat" value={inputValues.panchayat} onChange={handleInput} className='panchayat'>
                        <option value="panchayat">panchayat</option>
                        <option value="panchayat">panchayat</option>
                        <option value="panchayat">panchayat</option>
                    </select>
                    <select name="municipality" value={inputValues.municipality} onChange={handleInput} className='municipality'>
                        <option value="municipality">municipality</option>
                        <option value="municipality">municipality</option>
                        <option value="municipality">municipality</option>
                    </select>
                    <select name="corperation" value={inputValues.corperation} onChange={handleInput} className='corperation'>
                        <option value="corperation">corperation</option>
                        <option value="corperation">corperation</option>
                        <option value="corperation">corperation</option>
                    </select>

                    <button onClick={handleApi}>Register</button>

                </div>

            </div>

        </>
    )
}

export default Register