import React from 'react';
import "./EventsStyles.css"
import  events1  from "../../Assets/events1.jpg"
import  events2  from "../../Assets/events2.jpg"

const Events = () => {
    return <div className="container">
        <div className="events-flex">
            <div className="left">
                <div className="column">
                    <img src={events1}></img>

                    <div className="column-texts">
                        <h2>Digital Marketing Strategies</h2>
                        <h4 className="date">Every Sunday 7:00pm</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo
                        </p>
                    </div>
                    
                </div>

            </div>

            <div className="right">
                <div className="column">
                    <img src={events2}></img>

                    <div className="column-texts">
                        <h2>Digital Marketing Strategies</h2>
                        <h4 className="date">Every Sunday 7:00pm</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo
                        </p>
                    </div>
                    
                </div>
            </div>

        </div>

    </div>;
}



export default Events;