import React from 'react'
import FetchData from './FetchData'
import Date from './Date'
import Clock from './Clock'

const Main = () => {
  return (
    <div className='container mx-auto px-12 py-6'>
      <h1 className='text-4xl text-slate-800 font-bold text-center mt-12 mb-2'>Waktu Sholat</h1>
      <Date />
      <Clock />
      <FetchData />
    </div>
  )
}

export default Main