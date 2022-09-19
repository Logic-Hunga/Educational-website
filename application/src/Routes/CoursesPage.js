import React from "react";
import Login from "../Components/Login/Login";
import Navigation from "../Components/Navigation/Navigation";
import Courses from "../Components/Courses/Courses";

const CoursesPage = () => {
  return (
    <div>
      <>
        <Navigation />
        <Courses />
      </>
    </div>
  );
};

export default CoursesPage;
