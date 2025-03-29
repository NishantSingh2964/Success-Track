import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {

//     const [data, setData] = useState([])

//    useEffect( ()=>{
//     fetch('https://api.github.com/users/hiteshchoudhary')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         setData(data);
//     })
//    }, [])

const data = useLoaderData();

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex justify-evenly '>
      <img src="https://avatars.githubusercontent.com/u/11613311?v=4" alt="Git Picture" width={300} />
      <div className='flex flex-col justify-center items-center'>
      Github followers:{data.followers}
      <h1>{data.login}</h1>
      </div>
    </div>
  )
};

export default Github;

export const githubInfoLoader = async ()=> {
    const response =  await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json();
}
