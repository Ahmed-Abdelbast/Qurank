
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>

<nav   className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand qurank text-success fs-1" href="#" >   ♡ قرآنك
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item ps-4">
          <NavLink className="nav-link" aria-current="page" to={"home"}>الصفحة الرئيسية</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"quran"}>القرآن الكريم</NavLink>
        </li>



      </ul>

    </div>
  </div>
</nav>

    
    
    
    
    
    
    
    </>
  )
}
