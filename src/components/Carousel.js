import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

export default function CarouselComponent() {
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
                    <img src="/images/towertest.png" />
                    <h2>Destruction Tower pawaaaa</h2>
                    <p>
                    Destructive tours have the most powerful damage since its attacks
        have an area effect but is very slow.
                    </p>
                </div>
                <div>
                    <img src="/images/towertest2.jpg" />
                    <h2>Slow Tower pawaaaa</h2>
                    <p>
                    Slowing towers are the most adapted if the enemy is strong
        or is fast. At strategic places, this tower can totally make the game.
                    </p>
                </div>
                <div>
                    <img src="/images/towertest3.jpeg" />
                    <h2>Fast Tower pawaaaa</h2>
                    <p>
                    Fast attacks towers is essential for fast and weak enemy as they can kill them
        quicly. However, they only posess single targeted enemy and week attacks.
                    </p>
                </div>
            </Carousel>
        </div>
    );
}