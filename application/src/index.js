import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUpPage from './Routes/SignUpPage';
import LoginPage from "./Routes/LoginPage";
import CoursesPage from "./Routes/CoursesPage"
import BlogPage from "./Routes/BlogPage"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path="/Courses" element={<CoursesPage />} />
      <Route path="/SignUp" element={<SignUpPage />} />
      <Route path="/Login" element={ <LoginPage />} />
      <Route path="/Blog" element={ <BlogPage />} />
      
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// 