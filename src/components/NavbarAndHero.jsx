import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'


function NavbarAndHero() {


    const location = useLocation()
    const [activeHash,setActiveHash] = useState(location.hash)

    useEffect(()=>{
        const handleHashChange = () => {
            setActiveHash(window.location.hash);
        }

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    },[])
    console.log(activeHash);
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

                            <a href="#" className={`nav-item nav-link ${activeHash === '' ? 'active' : ''}`}>Home</a>
                            <a href="#aboutUs" className={`nav-item nav-link ${activeHash === '#aboutUs' ? 'active' : ''}`}>About</a>
                            <a href="#services" className={`nav-item nav-link ${activeHash === '#services' ? 'active' : ''}`}>Services</a>
                            <a href="#destination" className={`nav-item nav-link ${activeHash === '#destination' ? 'active' : ''}`}>Destination</a>
                            <a href="#exploreTour" className={`nav-item nav-link ${activeHash === '#exploreTour' ? 'active' : ''}`}>Explore</a>
                            <a href="#gallery" className={`nav-item nav-link ${activeHash === '#gallery' ? 'active' : ''}`}>Gallery</a>

                            {/* <Link to='/packages'>
                                <a className={`nav-item nav-link ${location.pathname == '/packages' && "active"}`}>Packages</a>
                            </Link> */}

                            <a href="#blog" className={`nav-item nav-link ${activeHash === '#blog' ? 'active' : ''}`}>Blog</a>



                            {/* <div className="nav-item dropdown" hidden>
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
                            </div> */}
                            <a href="#contact" className={`nav-item nav-link ${activeHash === '#contact' ? 'active' : ''}`}>Contact</a>
                        </div>
                        <a href="#bookNow" className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Book Now</a>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default NavbarAndHero


// stop stop