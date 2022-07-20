import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-container'>
            <div className='left-side'>
                <h1>pocket</h1>
            </div>
            <div className='right-side'>
                <ul className='list'>
                    <li>FEATURES</li>
                    <li>PRICING</li>
                    <li>BUSINESS</li>
                    <li>SMART CARD</li>
                    <button>CREATE A CARD</button>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar