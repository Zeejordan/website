import React from 'react'
import Spinner from '../components/Spinner'
import Topbar from '../components/Topbar'
import NavbarAndHero from '../components/NavbarAndHero'
import Header from '../components/Header'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import BackToTop from '../components/BackToTop'

function ServicesPage() {
    const myTitle = "Our Services";
    const myThirdContent = "Services"
    return (
        <>
            {/* <Spinner /> */}
            <Topbar />
            <NavbarAndHero />
            <Header title={myTitle} thirdContent={myThirdContent} />
            <Services />
            <Testimonial/>
            <Subscribe/>
            <Footer/>
            <Copyright/>
            <BackToTop/>
        </>
    )
}

export default ServicesPage