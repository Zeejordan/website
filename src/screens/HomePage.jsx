import React from 'react'
import Topbar from '../components/Topbar'
import NavbarAndHero from '../components/NavbarAndHero'
import About from '../components/About'
import Services from '../components/Services'
import Destination from '../components/Destination'
import ExploreTour from '../components/ExploreTour'
import Packages from '../components/Packages'
import Gallery from '../components/Gallery'
import TourBooking from '../components/TourBooking'
import TravelGuide from '../components/TravelGuide'
import Blog from '../components/Blog'
import Testimonial from '../components/Testimonial'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import BackToTop from '../components/BackToTop'
import { Carousel } from '../components/Carousel'
import Contact from '../components/Contact'



    function HomePage() {
        return (
            <>
                {/* <Topbar /> */}
                <NavbarAndHero />
                <Carousel/>
                <About />
                <Services />
                <Destination />
                <ExploreTour />
                {/* <Packages /> */}
                <Gallery />
                <TourBooking />
                {/* <TravelGuide /> */}
                <Blog/>
                {/* <Testimonial/> */}
                <Subscribe/>
                <Contact/>
                <Footer/>
                {/* <Copyright/> */}
                <BackToTop/>
            </>
        )
    }

export default HomePage