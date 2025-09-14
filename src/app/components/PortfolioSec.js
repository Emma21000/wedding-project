import React from 'react'

export default function PortfolioSec({ data }) {
  return (
    <div className='w-full flex flex-col items-center justify-center my-14 gap-y-4' id='portfolio'>
        <span className='px-14 border-b-2  ml-28'></span>
        <p className='text-4xl font-serif tracking-widest'>{data.name}</p>
        <span className='px-14 border-b-2  mr-30'></span>
        <div className='lg:w-11/12 w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center lg:py-6 py-4 lg:gap-0 gap-8'>
        {data.image.map((elem,index)=>(
            <div key={index} className='rounded-lg shadow-xl shadow-gray-500 cursor-pointer max-w-[500px] w-full h-[530px] bg-no-repeat bg-cover bg-center lg:my-4 my-2' style={{backgroundImage: elem.img}}>
            <div className='rounded-lg opacity-0 hover:opacity-70 bg-white/100 w-full h-full pt-10'>
                <span className='text-black text-center text-2xl tracking-widest font-serif'>{elem.name}</span>
            </div>
            </div>
        ))}
        </div>
    </div>
  )
}

