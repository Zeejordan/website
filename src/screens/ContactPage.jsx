import React from 'react'
import Spinner from '../components/Spinner'
import Topbar from '../components/Topbar'
import NavbarAndHero from '../components/NavbarAndHero'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import BackToTop from '../components/BackToTop'

function ContactPage() {

    const myTitle = "Contact Us";
    const myThirdContent = "Contact"
    
    return (
        <>
            {/* <Spinner /> */}
            <Topbar />
            <NavbarAndHero />
            <Header title={myTitle} thirdContent={myThirdContent} />
            <Contact />
            <Subscribe />
            <Footer />
            <Copyright />
            <BackToTop />
        </>
    )
}

export default ContactPage