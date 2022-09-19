import React from 'react'
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Universities from "./Components/Universities/Universities"
import Purpose from './Components/Purpose/Purpose';
import Features from "./Components/Features/Features";
import Courses from "./Components/Courses/Courses"
import Contact from "./Components/Contact/Contact"

const App = () => {
  return (
    <>
      
      <Navigation />
      <Home />
      <Purpose />
      <Universities />
      <Features />
      <Courses />
      <Contact />
      

    </>
  )
}

export default App  