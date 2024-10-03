import React from 'react';
import { Routes , Route } from 'react-router-dom';
import HomePage from './screens/HomePage'
// import AboutUsPage from './screens/AboutUsPage'
// import ServicesPage from './screens/ServicesPage'
// import PackagesPage from './screens/PackagesPage'
// import BlogPage from './screens/BlogPage'
// import DestinationPage from './screens/DestinationPage'
// import ExploreTourPage from './screens/ExploreTourPage'
// import TourBookingPage from './screens/TourBookingPage'
// import GalleryPage from './screens/GalleryPage'
// import TravelGuidePage from './screens/TravelGuidePage'
// import TestimonialPage from './screens/TestimonialPage'
// import ErrorCodePage from './screens/ErrorCodePage'
// import ContactPage from './screens/ContactPage';




function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        {/* <Route exact path='/about' element={<AboutUsPage />}></Route>
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
        <Route exact path='/contact' element={<ContactPage/>}></Route> */}

      </Routes>
    </>
  );
}

export default App;



