import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUpPage from './Routes/SignUpPage';
import LoginPage from "./Routes/LoginPage";
import CoursesPage from "./Routes/CoursesPage"
import BlogPage from "./Routes/BlogPage"
import ContactPage from "./Routes/ContactPage"
import AboutPage from "./Routes/AboutPage"
import EventsPage from "./Routes/EventsPage"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path="/Courses" element={<CoursesPage />} />
      <Route path="/SignUp" element={<SignUpPage />} />
      <Route path="/Login" element={ <LoginPage />} />
      <Route path="/Blog" element={ <BlogPage />} />
      <Route path="/Contact" element={ <ContactPage />} />
      <Route path="/About" element={ <AboutPage />} />
      <Route path="/Events" element={ <EventsPage />} />
      
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// 