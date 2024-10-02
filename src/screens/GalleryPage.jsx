import React from 'react'
import Spinner from '../components/Spinner'
import Topbar from '../components/Topbar'
import NavbarAndHero from '../components/NavbarAndHero'
import Header from '../components/Header'
import Gallery from '../components/Gallery'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import BackToTop from '../components/BackToTop'


function GalleryPage() {

    const myTitle = "Our Gallery";
    const myThirdContent = "Gallery";
    return (
        <>
            {/* <Spinner /> */}
            <Topbar />
            <NavbarAndHero />
            <Header title={myTitle} thirdContent={myThirdContent}/>
            <Gallery />
            <Subscribe />
            <Footer />
            <Copyright />
            <BackToTop />
        </>
    )
}

export default GalleryPage