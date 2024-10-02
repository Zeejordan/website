import React from 'react';
import { Routes , Route } from 'react-router-dom';
import HomePage from './screens/HomePage'
import AboutUsPage from './screens/AboutUsPage'
import ServicesPage from './screens/ServicesPage'
import PackagesPage from './screens/PackagesPage'
import BlogPage from './screens/BlogPage'
import DestinationPage from './screens/DestinationPage'
import ExploreTourPage from './screens/ExploreTourPage'
import TourBookingPage from './screens/TourBookingPage'
import GalleryPage from './screens/GalleryPage'
import TravelGuidePage from './screens/TravelGuidePage'
import TestimonialPage from './screens/TestimonialPage'
import ErrorCodePage from './screens/ErrorCodePage'
import ContactPage from './screens/ContactPage';




function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route exact path='/about' element={<AboutUsPage />}></Route>
        <Route exact path='/services' element={<ServicesPage j/>}></Route>
        <Route exact path='/packages' element={<PackagesPage />}></Route>
        <Route exact path='/blog' element={<BlogPage />}></Route>
        <Route exact path='/destination' element={<DestinationPage />}></Route>
        <Route exact path='/tour' element={<ExploreTourPage />}></Route>
        <Route exact path='/booking' element={<TourBookingPage />}></Route>
        <Route exact path='/gallery' element={<GalleryPage />}></Route>
        <Route exact path='/guides' element={<TravelGuidePage />}></Route>
        <Route exact path='/testimonial' element={<TestimonialPage />}></Route>
        <Route exact path='/404' element={<ErrorCodePage />}></Route>
        <Route exact path='/contact' element={<ContactPage/>}></Route>

      </Routes>
    </>
  );
}

export default App;






// import Spinner from './components/Spinner';
// import Topbar from './components/Topbar';
// import NavbarAndHero from './components/NavbarAndHero';
// import Header from './components/Header';
// import WebCode404 from './components/404';
// import Subscribe from './components/Subscribe';
// import Footer from './components/Footer';
// import Copyright from './components/Copyright';
// import BackToTop from './components/BackToTop';
// import About from './components/About';
// import Services from './components/Services';
// import Destination from './components/Destination';
// import ExploreTour from './components/ExploreTour';
// import Packages from './components/Packages';
// import Gallery from './components/Gallery';
// import TourBooking from './components/TourBooking';
// import TravelGuide from './components/TravelGuide';
// import Blog from './components/Blog';
// import Testimonial from './components/Testimonial';
// function App() {
//   return (
//     <>
//       {/* <Spinner/> */}
//       <Topbar/>
//       <NavbarAndHero/>
//       <About/>
//       <Services/>
//       <Destination/>
//       <ExploreTour/>
//       <Packages/>
//       <Gallery/>  
//       <TourBooking/>
//       <TravelGuide/>
//       <Blog/>
//       <Testimonial/>

//       <Header/>
//       <Subscribe/>
//       <Footer/>
//       <Copyright/>
//       <BackToTop/>
//       </>
//   );
// }
