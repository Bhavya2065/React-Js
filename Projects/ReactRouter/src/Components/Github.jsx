import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // Method 1
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/Bhavya2065`)
    //     .then(res => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='text-center py-3 text-2xl bg-gray-600 text-white'>Github Id: {data.id}
    <a href="https://github.com/Bhavya2065" target='_blank'><img className='m-auto' src={data.avatar_url} alt="Git Picture" width={300}/></a>
    </div>
  )
}

export default Github

// Method 2
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Bhavya2065')
    return response.json()
}

// Imp Note: Benifit of second method is that It is more optimized means this githubInfoLoader() method runs when the we hover on the Github link not on render so that It makes the component more optimized