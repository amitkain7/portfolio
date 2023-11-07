import React from 'react'
import { data } from '../../data'
const Project = () => {
  return (
    <div id='project' className='mx-10'>
      <h1 className='my-4 text-2xl md:text-4xl font-semibold cursor-default'>Projects</h1>
      <div className=' grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 '>
        {
          data.map((item) => (

            <SingleProject key={item.id} value={item} />

          ))
        }


      </div>
    </div>

  )
}

export default Project

const SingleProject = ({ value }) => {
  const shadow = {
    'box-shadow' : '3px 3px 8px gray'
     
  }
  const { img, name, desc, technology, code, live } = value
  return (
    <div className='flex flex-col justify-center items-center w-80 ' style={shadow}>
      <div className='flex justify-start items-center w-full h-full'>
        <img className='h-full object-cover' src={img} alt={name} />
      </div>
      <div className='flex flex-col justify-center items-center bg-gray-800 w-full py-2' >
        <h1 className='text-xl tracking-wide font-semibold text-purple-400 p-1'>{name}</h1>
        <p className='h-1 bg-yellow-200 rounded w-3/4 text-gray-900 my-4'></p>
        <p className='text-center font-sans'>{desc}</p>
        <p className='text-xl font-semibold tracking-wider mt-2'>Stack</p>
        <ul className='list-none flex justify-around w-full text-lg text-gray-700'>
          <li className='hover:scale-110 cursor-pointer hover:text-blue-600 transition'>{technology[0]}</li>
          <li className='hover:scale-110 cursor-pointer hover:text-blue-600 transition'>{technology[1]}</li>
          <li className='hover:scale-110 cursor-pointer hover:text-blue-600 transition'>{technology[2]}</li>
          <li className='hover:scale-110 cursor-pointer hover:text-blue-600 transition'>{technology[3]}</li>
        </ul>
        <div className='flex justify-around w-full mt-2 '>
          <a className='py-1 px-2 rounded bg-purple-400 text-white hover:bg-purple-600 ' href={code}>Code</a>
          <a className='py-1 px-2 rounded bg-purple-400 text-white  hover:bg-purple-600 ' href={live}>Live</a>
        </div>
      </div>
    </div>
  )
}