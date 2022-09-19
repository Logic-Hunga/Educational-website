import React from 'react';
import "./FeaturesStyles.css";
import student from "../../Assets/student.jpg";
import { BsBookHalf,BsStack } from 'react-icons/bs';
import { MdLocalLibrary } from 'react-icons/md';

const Features = () => {
    return <div>
        <div className="container">
            <div className="features">
                <div className="feature-title">
                    <h3>Import studying of studying online </h3>
                </div>

                <div className="feature-flex">
                    


                    <div className="feature">
                        
                        <div className="column">
                                <h1>Learn With Experts</h1>
                                <div className="feature-disc">
                                    <div className="feature-icon">
                                        <MdLocalLibrary className="icon"/>
                                    </div>
                                    <div className="feature-text">
                                        {/* <h3>Online Courses</h3> */}
                                        <p>Far Far away, behind the mountains,
                                        far from the countries Malawi and USA</p>
                                    </div>
                                </div>
                        </div>

                        <div className="column">
                            <h1>Earn A Certificate</h1>
                            <div className="feature-disc">
                                
                                <div className="feature-icon">
                                    <BsStack className="icon"/>
                                </div>
                                <div className="feature-text">
                                    {/* <h3>Earn A Certificate</h3> */}
                                    <p>Far Far away, behind the mountains,
                                    far from the countries Malawi and USA</p>
                                </div>
                            </div>
                        </div>


                        <div className="column">
                                <h1>Importance of studying online</h1>
                                <div className="feature-disc">
                                    <div className="feature-icon">
                                        <BsBookHalf className="icon"/>
                                    </div>
                                    <div className="feature-text">
                                        {/* <h3>Learn With Experts</h3> */}
                                        <p>Far Far away, behind the mountains,
                                        far from the countries Malawi and USA</p>
                                    </div>
                                </div>
                        </div>
                    </div>

                    

                    <div className="student-mg">
                        <img src={student} alt="student"></img>
                    </div>




                </div>

                






            </div>

        </div>
    </div>;
}


export default Features;