import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { id } = useParams()
    return (
        <div className='bg-gray-50 text-3xl p-12 text-orange-600 font-bold text-center'>User : {id}</div>
    )
}

export default User