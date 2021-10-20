import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className="px-2 md:px-10 md:mx-auto md:my-3">
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                emulateTouch={true}
                showThumbs={false}
            >
                <div className="h-96 md:h-auto">
                    <img className="h-full md:w-full rounded-xl" src="https://i.ibb.co/dgwTkWD/carousel-1.png" alt="CarouselImages" />
                </div>
                <div className="h-96 md:h-auto">
                    <img className="h-full md:w-full rounded-xl" src="https://i.ibb.co/nkkTTmw/carousel-2.png" alt="CarouselImages" />
                </div>
                <div className="h-96 md:h-auto">
                    <img className="h-full md:w-full rounded-xl" src="https://i.ibb.co/DG2T0MS/carousel-3.png" alt="CarouselImages" />
                </div>
                <div className="h-96 md:h-auto">
                    <img className="h-full md:w-full rounded-xl" src="https://i.ibb.co/vPM9N0M/carousel-4.png" alt="CarouselImages" />
                </div>
                <div className="h-96 md:h-auto">
                    <img className="h-full md:w-full rounded-xl" src="https://i.ibb.co/w6dnGrD/carousel-5.png" alt="CarouselImages" />
                </div>
                <div className="h-96 md:h-auto">
                    <img className="h-full md:w-full rounded-xl" src="https://i.ibb.co/z83f0pS/carousel-6.png" alt="CarouselImages" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;