import React, { useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
import './Styles.scss';

const Register = () => {
    const navigateTo = useNavigate();

    const [regInputValues, setRegInputValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setRegInputValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('https://interview-plus.onrender.com/api/register', regInputValues);
            
            
            if (response.status === 200) {
                alert("Register Success");
                console.log(response);

                localStorage.setItem('token', response.data.token);
                navigateTo('/login');
            }
        } catch (err) {
        
            console.error("Error", err);
        }
    };

    return (
        <div>
            <Container fluid className='d-flex justify-content-center align-items-center p-5 register-main-div'>
                <Col md={5} className='h-75 p-3 rounded d-flex justify-content-evenly flex-column align-items-center bg-white'>
                    <h2>Register</h2>
                    <form className='h-100 p-2 rounded d-flex justify-content-evenly flex-column align-items-center'>
                        <input type="text" id='name' className='p-2' placeholder='Name' name='name' value={regInputValues.name} onChange={handleInput} />
                        <input type="text" id='email' className='p-2' placeholder='Email' name='email' value={regInputValues.email} onChange={handleInput} />
                        <input type="password" id='password' className='p-2' placeholder='Password' name='password' value={regInputValues.password} onChange={handleInput} />
                        <button onClick={handleRegister} className='w-100 p-1 rounded text-white register-button'>Register</button>
                    </form>
                    <div className='p-3 gap-1 d-flex'>
                        Already have an account? <Link to='/login'>Login</Link>
                    </div>
                </Col>
            </Container>
        </div>
    );
};

export default Register;
