import React from 'react'
import Spinner from '../components/Spinner'
import Topbar from '../components/Topbar'
import NavbarAndHero from '../components/NavbarAndHero'
import Header from '../components/Header'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import BackToTop from '../components/BackToTop'
import ErrorCode from '../components/ErrorCode'

function ErrorCodePage() {

    const myTitle = "404 Page";
    const myThirdContent = "404 Page";
    return (
        <>
            {/* <Spinner /> */}
            <Topbar />
            <NavbarAndHero />
            <Header title={myTitle} thirdContent={myThirdContent}/>
            <ErrorCode />
            <Subscribe />
            <Footer />
            <Copyright />
            <BackToTop />
        </>
    )
}

export default ErrorCodePage