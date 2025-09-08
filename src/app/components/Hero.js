import React from 'react'

export default function Hero({ data }) {
  return (
    <div className='h-screen w-full bg-no-repeat bg-cover bg-center bg-fixed top-0 left-0' style={{backgroundImage: data.img}}>
      <div className="flex flex-col items-center justify-center   lg:w-[490px] lg:h-[590px] bg-gray-300 lg:mx-12 rounded-b-lg shadow-xl shadow-black w-full  h-auto py-12 lg:py-6 ">
        <span className="text-3xl font-mono flex-nowrap ">{data.name}</span>
        <span className="my-12 text-xl px-8 leading-9 tracking-widest">{data.description}</span>
        <button className='text-2xl font-mono tracking-widest  bg-gray-500 py-4 px-10 rounded-lg cursor-pointer border-2 border-black'>READ MORE</button>
      </div>
    </div>
  )
}
