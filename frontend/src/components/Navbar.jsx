import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <header className='fixed-nav-bar w-nav'>
        <nav>
            <ul className='nav__links'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Shop'>Shop</Link></li>
                <li><Link to='/'>Pages</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
            </ul>

        <nav className='nav__logo'>
        <Link to="/">
        Lebaba<span>.</span>
        </Link>
        </nav>

        </nav>
    </header>
  )
}

export default Navbar