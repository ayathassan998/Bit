import React from 'react'
import {Link} from 'react-router-dom'
import style from './Navbar.module.css';

export default function Navbar() {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg ${style.Navbar_section}`}>  
            <div className="container d-flex">
                <a className="navbar-brand d-block d-lg-none" href="#">
                    <img src='./images/Logo_bit.svg' className='w-100' alt="cabin"/>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse lg-flex justify-content-between" id="navbarSupportedContent">
                   <a className="navbar-brand d-none d-lg-block" href="#">
                        <img src='./images/Logo_bit.svg' className='w-100' alt="cabin"/>
                    </a>

                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="">Mac</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to ="">iPad</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to ="">iPhone</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to ="">Watch</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to ="">TV</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to ="">Accessories</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to ="">Offers</Link>
                        </li>

                        <hr className='hr'/>
                        <li className="nav-item">
                            <Link className="nav-link" to ="">Support</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to ="">Services</Link>
                        </li>
                   
                        <li className="nav-item">
                            <Link className="nav-link" to ="">Locations</Link>
                        </li>
                   
                    </ul>

                    <ul className="navbar-nav  mb-2 mb-lg-0">
                        <a className="nav-item">
                          <img src='./images/search-normal.svg' className='w-100' alt="cabin"/>
                        </a>
                        <a className="nav-item">
                          <img src='./images/profile.svg' className='w-100' alt="cabin"/>
                        </a>
                        <a className="nav-item">
                          <img src='./images/bag-2.svg' className='w-100' alt="cabin"/>
                        </a>
                    </ul>  
                </div>
            </div>
        </nav>
    </div>
  )
}
