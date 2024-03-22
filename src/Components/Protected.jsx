import axios from 'axios'
import React, { useEffect } from 'react'

const Protected = () => {


    // const getProtectedData = async () => {
    //     try {
    //         let token = JSON.parse(localStorage.getItem('token'))
    //         const response = await axios.get('https://dccbackend.plusitpark.com/api/user/protected',
    //             {
    //                 headers:
    //                     { 'x-access-token":token': token }
    //             }
    //         )
    //         console.log('protected data', response)
    //     }
    //     catch (err) {
    //         console.error(err);
    //     }
    // }

    // useEffect(() => {
    //     getProtectedData()
    // }, [])

    
    return (
        <div>

        </div>
    )
}

export default Protected
