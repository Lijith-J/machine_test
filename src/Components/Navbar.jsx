import React from 'react'
import { Button, Nav, NavLink } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigateTo = useNavigate()

    const logOut = () => {
        localStorage.removeItem('login token')
        navigateTo('/login')

    }

    return (
        <div>

            <Nav className='p-4 d-flex  justify-content-center '>

                <NavLink><Link to={'/home'}>Home</Link></NavLink>


                <NavLink><Link to={'/profile'}>Profile</Link></NavLink>

                <Button onClick={logOut}>Logout</Button>
            </Nav>

        </div>
    )
}

export default Navbar
