import React from 'react'
import Logo  from "../../LogoMovie.png"
import { Link } from 'react-router-dom'
//Router-> Anchor tags, Link
const NavBar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4' >
        <img src={Logo} className="w-[50px]"/>
      <Link to="/" className='text-blue-400'>Movies</Link>
      <Link to='/watchList' className='text-blue-400'>Watchlist</Link>
    </div>
  )
}

export default NavBar