import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from '../assets/images/res1.jpg'
import image2 from '../assets/images/res2.jpg'
import image3 from '../assets/images/res3.jpg'

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
      </Carousel>
    )
  }
  
  export default CarouselContainer;