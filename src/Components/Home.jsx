import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Col, Container } from 'react-bootstrap'
import axios from 'axios'



const Home = () => {

    const [items, setItems] = useState([])


    const getItems = async () => {
        const response = await axios.get('https://interview-plus.onrender.com/api/items')
        setItems(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <>

            <Navbar />


            <h1 className='text-white'>Items</h1>
            <Container fluid className=' gap-2  items-main'>
               
                    {
                        items.map((item) => (
                            <Col key={item.id} className='d-flex flex-column justify-content-evenly align-items-center  bg-white'>
                                <img src={item.image} className='img-fluid w-25 ' alt="" />
                                <p>{item.category}</p>
                                <h6>{item.price}</h6>
                            </Col>
                        ))
                    }


            </Container>


        </>
    )
}

export default Home
