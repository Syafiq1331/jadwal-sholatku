import React, { useState, useEffect } from 'react'

const Date = () => {
  const [time, setTime] = useState(new window.Date().toLocaleTimeString());
  const date = new window.Date()

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTime(date.toLocaleTimeString());
    }, 1000);
    return () => {
      clearTimeout(timeout);
    }
  }, [time]);


  return (
    <div className='flex flex-row justify-between items-center'>
      <div className='flex flex-row items-center'>
        <p className='text-sm lg:text-xl md:text-md text-slate-800'>Tanggal: </p>
        <p className='text-sm lg:text-xl md:text-md text-slate-800 font-bold ml-2'>
          {day}-{month}-{year}
        </p>
      </div>
      <div className='flex flex-row items-center'>
        <p className='text-sm lg:text-xl md:text-md text-slate-800'>Jam: </p>
        <p className='text-sm lg:text-xl md:text-md text-slate-800 font-bold ml-2'>
          {time}
        </p>
      </div>
    </div>
  )
}

export default Date