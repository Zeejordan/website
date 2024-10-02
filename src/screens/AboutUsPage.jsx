import React from 'react'
import Copyright from '../components/Copyright'
import BackToTop from '../components/BackToTop'
import Spinner from '../components/Spinner'
import Topbar from '../components/Topbar'
import NavbarAndHero from '../components/NavbarAndHero'
import Header from '../components/Header'
import About from '../components/About'
import TravelGuide from '../components/TravelGuide'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'





function AboutUsPage() {

  const myTitle = "About Us";
  const myThirdContent = "About"
  return (
    <>
      {/* <Spinner /> */}
      <Topbar />
      <NavbarAndHero />
      <Header  title={myTitle} thirdContent={myThirdContent} />
      <About />
      <TravelGuide />
      <Subscribe />
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  )
}

export default AboutUsPage







