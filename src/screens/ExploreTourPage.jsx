import React from 'react'
import Spinner from '../components/Spinner'
import Topbar from '../components/Topbar'
import NavbarAndHero from '../components/NavbarAndHero'
import Header from '../components/Header'
import ExploreTour from '../components/ExploreTour'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import BackToTop from '../components/BackToTop'

function ExploreTourPage() {

    const myTitle = "Tour Category";
    const myThirdContent = "Category"
    return (
        <>
            {/* <Spinner /> */}
            <Topbar />
            <NavbarAndHero />
            <Header title={myTitle} thirdContent={myThirdContent}/>
            <ExploreTour />
            <Subscribe />
            <Footer />
            <Copyright />
            <BackToTop />
        </>
    )
}

export default ExploreTourPage