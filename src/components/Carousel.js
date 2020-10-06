import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

export default function CarouselComponent(props) {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop autoPlay 
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            interval={6000}
            transitionTime={700}
            >
                <div>
                    <img src={props.img1} />
                    <h2>{props.first_h2}</h2>
                    <p>
                    {props.first_p}
                    </p>
                </div>
                <div>
                    <img src={props.img2} />
                    <h2>{props.second_h2}</h2>
                    <p>
                    {props.second_p}
                    </p>
                </div>
                <div>
                    <img src={props.img3} />
                    <h2>{props.third_h2}</h2>
                    <p>
                    {props.third_p}
                    </p>
                </div>
            </Carousel>
        </div>
    );
}