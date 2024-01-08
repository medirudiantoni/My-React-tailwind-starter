import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='absolute top-0 left-0 w-screen p-5 lg:px-10 flex items-center justify-between bg-slate-800 text-white'>
        <Link to={'/'}><p className="text-xl font-bold">My <span className='text-blue-500'>React</span> Template</p></Link>
        <div className="flex items-center gap-4">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
        </div>
    </header>
  )
}

export default Header