import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Guthub() {

    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/yogeshgheu")
    //         .then(response => response.json())
    //         .then(data => {
    //             setData(data)
    //         })
    // }, [])

    return (
        <>
            <div className='flex flex-col items-center text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
                Github Followers: {data.followers}
                <img src={data.avatar_url} width={300} alt="fsd" />
            </div>

        </>
    )
}

export default Guthub


export const gitHubInfoLoader = async () => {
    const response = fetch("https://api.github.com/users/yogeshgheu")
    return (await response).json()
}
