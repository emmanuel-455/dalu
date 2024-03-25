import React from 'react'

function Logo({logo}) {
  return (
    <div className=' text-nowrap'>
      <p className='text-[26px] tracking-tight md:text-3xl font-[900] '>{logo}</p>
    </div>
  )
}

export default Logo
