import React from "react";
import "./BlogStyles.css"
import Bethel from "../../Assets/Bethel.jpg"
const Blog = () => {
    return <div className="container">
        <div className="blog">
            <div className="blog-heading">
                <h3>Our <span>Recent Posts</span></h3>
            </div>


          
            <div className="blog-container">
                <div className="blog-box">
                    <div className="blog-image">
                        <img src={Bethel}></img>
                    </div>

                    <div className="blog-texts">
                        <h3> 8 July Android Development</h3>
                        <a href="#" className="texts"> What Has Happened of all the web design ideas</a>
                        <p>Lorem ipsum upsu do jgjgjjg ghghhg gjgjjgjg gjgmgjjgn</p>
                        <button className="btn">Read More</button>
                    </div>
                </div>
                <div className="blog-box">
                    <div className="blog-image">
                        <img src={Bethel}></img>
                    </div>

                    <div className="blog-texts">
                        <h3> 8 July Android Development</h3>
                        <a href="#" className="texts"> What Has Happened of all the web design ideas</a>
                        <p>Lorem ipsum upsu do jgjgjjg ghghhg gjgjjgjg gjgmgjjgn</p>
                        <button className="btn">Read More</button>
                    </div>
                </div>
                <div className="blog-box">
                    <div className="blog-image">
                        <img src={Bethel}></img>
                    </div>

                    <div className="blog-texts">
                        <h3> 8 July Android Development</h3>
                        <a href="#" className="texts"> What Has Happened of all the web design ideas</a>
                        <p>Lorem ipsum upsu do jgjgjjg ghghhg gjgjjgjg gjgmgjjgn</p>
                        <button className="btn">Read More</button>
                    </div>
                </div>
                <div className="blog-box">
                    <div className="blog-image">
                        <img src={Bethel}></img>
                    </div>

                    <div className="blog-texts">
                        <h3> 8 July Android Development</h3>
                        <a href="#" className="texts"> What Has Happened of all the web design ideas</a>
                        <p>Lorem ipsum upsu do jgjgjjg ghghhg gjgjjgjg gjgmgjjgn</p>
                        <button className="btn">Read More</button>
                    </div>
                </div>
            </div>






        </div>
        <div className="line"></div>
  </div>;
};

export default Blog;
