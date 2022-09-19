import React from 'react';
import "./PurposeStyles.css"
import { BsSearch } from "react-icons/bs";

const Purpose = () => {
    return (
        <>
            <div className="container">
                <div className="purpose">
                    <h2>Our Goal
                    </h2>
                    <p>
                        As time goes, technology development is tremendously developed,
                        Therefore Malawi country must have the generation with the
                        a wide knowledge in technology to everyday problems
                        
                    </p>

                    <div className="search">
                        <input type="text" placeholder="Search"></input>
                        <button className="search-btn"><BsSearch id='search'/>Search</button>
                    </div>
                </div>

            </div>

        </>
    ) ;
}



export default Purpose;