import React from 'react'
import Link from 'next/link'
const NavBar = () => {
  return (
    <div className='flex'>
      <Link href='/' className='mr-5'> Next Js</Link>
      <Link href='/users'> Uers</Link>
    </div>
  )
}

export default NavBar
