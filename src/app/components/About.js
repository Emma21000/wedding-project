import Image from 'next/image'
import React from 'react'

export default function About({ data }) {
  return (
    <div className='absolute w-full flex flex-col items-center justify-center gap-y-4'>
        <span className='border-b-2 px-12 ml-24'></span>
        <p className='text-4xl font-serif tracking-widest'>{data.name}</p>
        <span className='border-b-2 px-12 mr-28'></span>
        {data.image.map((elem,index)=>(
          <div className={`lg:w-3/4 lg:h-[500px] w-auto h-auto flex flex-col items-center justify-center lg:my-16 my-14 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}   key={index}>
              <div className='w-3/4 h-[500px] bg-[#D3C1D2] mx-20 rounded-lg shadow-xl shadow-gray-500'>
                <Image src={elem.img}
                width={elem.width}
                height={elem.height}
                alt='single'
                className='h-full object-cover cursor-pointer translate-12 relative rounded-lg shadow-xl shadow-gray-500' />
              </div>
              <div className='flex flex-col text-center gap-y-6 mt-24 lg:mt-0'>
              <p className='text-2xl font-mono'>{elem.name}</p>
              <p className='w-96 leading-7 text-base font-serif'>{elem.description}</p>
            </div>
          </div>   
      ))}
    </div>
  )
}
