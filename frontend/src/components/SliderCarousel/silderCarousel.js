import React from 'react'

import Room1 from '../assets/images/room1.jpg'
import Room2 from '../assets/images/room2.jpg'
import Room3 from '../assets/images/room3.jpg'
import Room4 from '../assets/images/room4.jpg'
import Room5 from '../assets/images/room5.jpg'

import './slider.css'


const SilderCarousel = () => {

      return (
            <>
                  <section id="slider">
                        <input type="radio" name="slider" id="s1" checked />
                        <input type="radio" name="slider" id="s2" checked />
                        <input type="radio" name="slider" id="s3" checked />
                        <input type="radio" name="slider" id="s4" checked />
                        <input type="radio" name="slider" id="s5" checked />

                        <label for="s1" id="slide1"><img src={Room1} style={{ width: "100%", height: "100%" }} /></label>
                        <label for="s2" id="slide2"><img src={Room2} style={{ width: "100%", height: "100%" }} /></label>
                        <label for="s3" id="slide3"><img src={Room3} style={{ width: "100%", height: "100%" }} /></label>
                        <label for="s4" id="slide4"><img src={Room4} style={{ width: "100%", height: "100%" }} /></label>
                        <label for="s5" id="slide5"><img src={Room5} style={{ width: "100%", height: "100%" }} /></label>

                        <label for="s1" id="slide1">dfsdfaf</label>
                        <label for="s2" id="slide2">ssdfsdf</label>
                        <label for="s3" id="slide3">sdsdsd</label>
                        <label for="s4" id="slide4">sczczczc</label>
                        <label for="s5" id="slide5">scsfsd</label>
                  </section>
            </>
      )
}

export default SilderCarousel
