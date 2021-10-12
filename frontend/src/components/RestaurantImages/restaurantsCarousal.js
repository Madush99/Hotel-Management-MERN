import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from './images/rr.jpg'
import image2 from './images/rr2.jpg'
import image3 from './images/ggg.jpg'
import image4 from './images/bb.jpg'

const CarouselContainer = () => {
    return (
      <Carousel fade={true} pause={false}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
            style={{ height: "500px", objectFit:"cover" }}
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={image2}
            alt="Third slide"
            style={{ height: "500px", objectFit:"cover" }}
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
            style={{ height: "500px", objectFit:"cover" }}
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={image4}
            alt="Third slide"
            style={{ height: "500px", objectFit:"cover" }}
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
  
  export default CarouselContainer;