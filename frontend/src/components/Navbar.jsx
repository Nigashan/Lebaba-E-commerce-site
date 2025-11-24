import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <header className='fixed-nav-bar w-nav'>
        <nav className='max-w-screen-2xl mx-auto px-4 flex justice-between items-center'>
            <ul className='nav__links'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Shop'>Shop</Link></li>
                <li><Link to='/'>Pages</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
            </ul>

        <div className='nav__logo'>
        <Link to="/">
        Lebaba<span>.</span>
        </Link>
        </div>

        <div className='nav__icons relative'>
          <span>
            <Link to='/search'>
            <i className="ri-search-line"></i>
            </Link>
          </span>
          <span>
            <button className='hover:text-primary'>
              <i className='ri-shopping-bag-line'> </i>
              <sup className='text-sm inline-block px-1.5 text-white bg-primary text-center rounded-full'>0</sup>
            </button>
          </span>

           <span>
            <Link to='login'>
            <i className="ri-user-line"></i>
            </Link>
          </span>
        </div>

        </nav>
    </header>
  )
}

export default Navbar