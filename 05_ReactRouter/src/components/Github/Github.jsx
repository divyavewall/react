import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';


function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState("")
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(response => response.json())
    //         .then(data => {
    //             // console.log(data)
    //             setData(data)
    //         })
    // }, [])
    return (
        <>
            <div className='text-center text-3xl font-medium bg-gray-50 text-orange-600 p-4'>
                Github Followers : {data.followers}
            </div>
            <img src={data.avatar_url} alt='pic' className='h-60 w-60'/>
        </>
    );
}

export default Github;

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}