import React from 'react'
import Spinner from '../components/Spinner'
import Topbar from '../components/Topbar'
import NavbarAndHero from '../components/NavbarAndHero'
import Header from '../components/Header'
import TourBooking from '../components/TourBooking'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import BackToTop from '../components/BackToTop'

function TourBookingPage() {
    const myTitle = "Online Booking";
    const myThirdContent = "Online Booking";
    return (
        <>
            {/* <Spinner /> */}
            <Topbar />
            <NavbarAndHero />
            <Header title={myTitle} thirdContent={myThirdContent}/>
            <TourBooking />
            <Subscribe />
            <Footer />
            <Copyright />
            <BackToTop />
        </>
    )
}

export default TourBookingPage