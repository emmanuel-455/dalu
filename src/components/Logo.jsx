import React from 'react'

function Logo({logo}) {
  return (
    <div className=' text-nowrap'>
      <p className='tracking-tight text-[24px] font-[900] '><a href="./">{logo}</a></p>
    </div>
  )
}

export default Logo
