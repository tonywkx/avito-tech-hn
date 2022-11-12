import React from 'react'
import {Link} from 'react-router-dom'

export  function Navigation() {
  return (
    <nav className='h-[50ox] flex justify-between px-5 items-center bg-gray-500 text-white'>

        <span>
            <Link to='/'> Products</Link>
            <Link to='/about'> Details</Link>
        </span>
    </nav>
  )
}
