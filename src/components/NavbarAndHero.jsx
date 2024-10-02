import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


function NavbarAndHero() {
    const location = useLocation()
    // console.log(location)

    return (
        <>
            {/* {<!-- Navbar & Hero Start --> */}
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href="" className="navbar-brand p-0">
                        <h1 className="m-0"><i className="fa fa-map-marker-alt me-3"></i>Travela</h1>
                        {/* <img src="assets/img/img/logo.png" alt="Logo"/>  */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <Link to='/'>
                                <a className={`nav-item nav-link ${location.pathname == '/' && "active"}`}>Home</a>
                            </Link>
                            <Link to='/about'>
                                <a className={`nav-item nav-link ${location.pathname == '/about' && "active"}`}>About</a>
                            </Link>

                            <Link to='/services'>
                                <a className={`nav-item nav-link ${location.pathname == '/services' && "active"}`}>Services</a>
                            </Link>

                            {/* <Link to='/packages'>
                                <a className={`nav-item nav-link ${location.pathname == '/packages' && "active"}`}>Packages</a>
                            </Link> */}

                            <Link to='/blog'>
                                <a className={`nav-item nav-link ${location.pathname == '/blog' && "active"}`}>Blog</a>
                            </Link>



                            <div className="nav-item dropdown" hidden>
                                <a href="#" className={`nav-link dropdown-toggle ${['/destination', '/tour', '/booking', '/gallery', '/guides', '/testimonial', '/404'].includes(location.pathname) && "active"}`} data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0">
                                    <Link to='/destination'>
                                        <a className="dropdown-item">Destination</a>
                                    </Link>
                                    <Link to='/tour'>
                                        <a className="dropdown-item">Explore Tour</a>
                                    </Link>

                                    <Link to='/booking'>
                                        <a className="dropdown-item">Travel Booking</a>
                                    </Link>

                                    <Link to='/gallery'>
                                        <a className="dropdown-item">Our Gallery</a>
                                    </Link>

                                    <Link to='/guides'>
                                        <a className="dropdown-item">Travel Guides</a>
                                    </Link>

                                    <Link to='/testimonial'>
                                        <a className="dropdown-item">Testimonial</a>
                                    </Link>

                                    <Link to='/404'>
                                        <a className="dropdown-item">404 Page</a>
                                    </Link>

                                </div>
                            </div>
                            <Link to='/contact'>
                                <a className="nav-item nav-link">Contact</a>
                            </Link>

                        </div>
                        <a href="#bookNow" className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Book Now</a>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default NavbarAndHero