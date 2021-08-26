import React from 'react';
import { Carousel } from 'react-bootstrap';

import con1 from '../assets/conferenceImg/con1.jpg'
import con2 from '../assets/conferenceImg/con2.jpg'
import con3 from '../assets/conferenceImg/con3.jpg'

const ConferenceCarouselContainer = () => {
    return (
      <Carousel fade={true} pause={false}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={con1}
            alt="First slide"
            style={{ height: "500px", objectFit:"cover" }}
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={con2}
            alt="Third slide"
            style={{ height: "500px", objectFit:"cover" }}
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={con3}
            alt="Third slide"
            style={{ height: "500px", objectFit:"cover" }}
          />
          <Carousel.Caption>
  
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
  
  export default ConferenceCarouselContainer;