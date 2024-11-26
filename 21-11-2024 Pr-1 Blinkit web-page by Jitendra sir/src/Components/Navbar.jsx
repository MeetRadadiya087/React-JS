import React from 'react'

export default function Navbar() {
  return (
    <div className='nav'>
      <div className='nav-logo'>
        <img src="web-site-main-logo.svg" alt="" />
      </div>
      <div className="location-main-box">
        <div className="location-box">
          <h1><b>Delivery in 8 minutes</b></h1>
          <h2>Rajkot, Gujrat-360001 <i class="fa-solid fa-caret-down"></i></h2>
        </div>
      </div>
      <div className="search-box">
        <div className="search-main-box">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder='Search Item' />
        </div>
      </div>
      <div className="login">
        <h1>Login</h1>
      </div>
      <div className="cart">
        <button>
          <i class="fa-solid fa-cart-shopping"></i> My Cart
        </button>
      </div>
    </div>
  )
}
