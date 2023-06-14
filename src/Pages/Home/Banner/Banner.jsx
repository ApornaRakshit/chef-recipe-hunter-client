import React from 'react';
import slider1 from '../../../assets/images/banner5.jpg'
import slider2 from '../../../assets/images/slider2.jpg'
import slider3 from '../../../assets/images/slider3.jpg'
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (

        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 p-5"
                    src={slider3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='p-2'>"A passion for cooking starts with respect ingredients"</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 p-5"
                    src={slider1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='p-2'>"Cooking is not a profession, it's an emotion"</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 p-5"
                    src={slider2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='p-2'>"Chef doesn't do any  mistake, they invent new dishes"</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
};

export default Banner;
