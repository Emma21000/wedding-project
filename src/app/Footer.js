import Link from 'next/link'
import React from 'react'

export default function Footer({ data }) {
  return (
      <div className='bg-gradient-to-br  from-[#adf3ed] via-[#a8dadc] to-[#457b9d] lg:h-60 h-auto p-10 w-full flex flex-col items-center justify-center gap-10'>
        <div className='w-full flex lg:flex-row flex-col items-center justify-center gap-10'>
            <p className='text-4xl tracking-widest'>{data.name}</p>
            <div className='flex flex-col items-center justify-center gap-y-2'>
                <Link
                href="/"
                to="home"
                smoot="true"
                duration={500}
                className="cursor-pointer text-2xl"
                >
                {data.topArrow}
                </Link>
                <span className='text-2xl cursor-pointer'>{data.top}</span>
            </div>
        </div>
        <p className='lg:w-1/2 w-11/12 border-b-2 text-center'></p>
        <Link className='text-center' href="https://github.com/Emma21000/wedding-project" target='_blank'>{data.address}</Link>
    </div>
  )
}
