import React from 'react'
import { Carousel } from 'react-bootstrap';
import Home1 from '../assets/images/home1.jpg'
import Home2 from '../assets/images/home2.jpg'
import Home3 from '../assets/images/home3.jpg'
import Home4 from '../assets/images/home4.jpg'
import Home5 from '../assets/images/home5.jpg'
import Home6 from '../assets/images/home6.jpg'
import Home7 from '../assets/images/home7.jpg'

const HomeCarousel = () => {
      return (
            <Carousel fade={true} pause={false}>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              src={Home1}
                              alt="First slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              <h3>First slide label</h3>
                              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              src={Home2}
                              alt="Third slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              <h3>Second slide label</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              src={Home3}
                              alt="Third slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              <h3>Third slide label</h3>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              src={Home3}
                              alt="Third slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              <h3>Third slide label</h3>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              src={Home4}
                              alt="Third slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              <h3>Third slide label</h3>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              src={Home5}
                              alt="Third slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              <h3>Third slide label</h3>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              src={Home6}
                              alt="Third slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              <h3>Third slide label</h3>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                        <img
                              className="d-block w-100"
                              src={Home7}
                              alt="Third slide"
                              style={{ height: "500px", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                              <h3>Third slide label</h3>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
            </Carousel>
      )
}

export default HomeCarousel
