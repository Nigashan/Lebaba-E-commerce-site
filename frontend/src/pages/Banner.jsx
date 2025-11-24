import React from 'react'
import { Link } from 'react-router-dom'

import bannerImg from "../../src/assets/header.png"

const Banner = () => {
  return (
    <div className='section__container header__container'>
        <div className='header__content z-30'>
        <h4 className='uppercase'>UP TO 20% Discount</h4>
        <h1>Girl's Fashion</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Officiis, numquam maxime dicta nesciunt necessitatibus perferendis 
            iure atque fugit magnam enim dolor amet beatae explicabo repellat. 
            Tempore, minus vitae. Dicta, nisi.
        </p>
        <button className='btn'><Link to="/shop">Explore now</Link></button>
    </div>
    <div className='header__image'>
        <img src={bannerImg} alt="Model" />
    </div>
    
    </div>
  )
}

export default Banner