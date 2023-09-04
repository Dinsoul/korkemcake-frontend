import React, {Component} from 'react';
import image1 from "../img/cake2.jpg";
import image2 from "../img/cake3.jpg";
import image3 from "../img/cake4.jpg";
import {Carousel} from "react-bootstrap";

class Carousels extends Component {
    render() {
        return (
            <div>
                <Carousel style={{width:"600px"}}>
                    <Carousel.Item>
                        <img className="d-block w-100 img-thumbnail"
                             src={image1}
                             alt="firstim"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 img-thumbnail"
                             src={image2}
                             alt="firstim"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 img-thumbnail"
                             src={image3}
                             alt="firstim"/>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Carousels;