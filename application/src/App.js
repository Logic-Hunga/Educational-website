import React from 'react'
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Universities from "./Components/Courses/Courses"
import Purpose from './Components/Purpose/Purpose';
import Features from "./Components/Features/Features";
// import Courses from "./Components/Courses/Courses"
import Trainers from "./Components/Trainers/Trainers"

import Contact from "./Components/Contact/Contact"
import Testimonial from './Components/Testimonial/Testimonial';
import Footer from "./Components/Footer/Footer"

const App = () => {
  return (
    <>
      
      <Navigation />
      <Home />
      {/* <Purpose /> */}
      <Universities />
      <Features />
      {/* <Courses /> */}
      <Trainers />
      <Testimonial />
      <Contact />
      
      <Footer />
      

    </>
  )
}

export default App  