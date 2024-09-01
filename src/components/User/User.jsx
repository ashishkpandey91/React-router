/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom';

function User() {
    const {userId} =  useParams()
  return (
    <div className='text-lg text-center font-bold bg-slate-900 text-white'>User Input :  {userId}</div>
  )
}

export default User 