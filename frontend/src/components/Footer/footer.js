import React from 'react'
import './footer.css'


const Footer = () => {
    return(
        <>
        <footer>
        <div className= "container">
            <div className= "sec aboutus">
                <h4>About Us</h4>
                <p>Offering striking views of the Indian Ocean, Beira Lake and the city beyond, our 500 guest rooms and suites, and 41 serviced apartments are tastefully furnished to complement the urban-oceanside location and are among the largest in Colombo.</p>
                
                <ul className="sci">
                <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fab fa-youtube" aria-hidden="true"></i></a></li>
            </ul>
            
            </div>
            <div className= "sec quickLinks">
                <h4>Created By</h4>
                <ul>
                    <li><a href="#">Madusanka</a></li>
                    <li><a href="#">Agasthi</a></li>
                    <li><a href="#">Ushini</a></li>
                    <li><a href="#">Bulner</a></li>
                   
                </ul>
           </div>
           <div className= "sec contact">
           <h4>Contact Us</h4>
           <ul className="info"> 
                <li>
                    <span><i class="fas fa-map-marker-alt"></i></span>
                    <span>119/2, moratuwa</span>
                </li>
                <li>
                    <span><i class="fas fa-phone-alt"></i></span>
                    <span>011 4568795</span>
                </li>
                <li>
                    <span><i class="fas fa-envelope"></i></span>
                    <span>119/2, moratuwa</span>
                </li>
                <li>
                    <span><i class="fas fa-map-marker-alt"></i></span>
                    <span>119/2, moratuwa</span>
                </li>
           </ul>
               </div>
        </div>
        </footer>
        </>
    )
}

export default Footer