import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


    return (
        <div>
            <nav className="navbar  fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand" >FlashNews</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link " >Home</Link>
                            </li>
                            <li className="nav-item text-capitalize "> < Link to={'/about'} className="nav-link" >About</Link> </li>
                            <li className='nav-item text-capitalize'>   <Link to={'/business'} className='nav-link' > business </Link> </li>
                            <li className='nav-item text-capitalize'>   <Link to={'/entertainment'} className='nav-link' >entertainment</Link></li>
                            <li className='nav-item text-capitalize'>   <Link to={'/general'} className='nav-link' >general</Link> </li>
                            <li className='nav-item text-capitalize'>  <Link to={'/health'} className='nav-link' >health</Link></li>
                            <li className='nav-item text-capitalize'>  <Link to={'/science'} className='nav-link' >science</Link></li>
                            <li className='nav-item text-capitalize'>   <Link to={"/sports"} className='nav-link' >sports</Link></li>
                            <li className='nav-item text-capitalize'>   <Link to={"/technology"} className='nav-link' >technology</Link></li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Navbar

