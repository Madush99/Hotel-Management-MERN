import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { weddingAdd } from '../../actions/weddingAction.js'
import Message from '../../components/Message.js'
import Loader from '../../components/Loader.js'
import { Form, Col, Row, Button, Card } from 'react-bootstrap'
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com'
import FormContainer from '../../components/FormContainer.js'

const ReqScreen = () => {
 
    function submitHandler(e){
        e.preventDefault()
         
        emailjs.sendForm('service_vyyqvva', 'template_bsij832', e.target, 'user_L6uy9056Ba6ttSNKMXklQ')
        .then(res =>{
            console.log(res)
            Swal.fire('Successful', 'Form Has Been Submitted, Well get back to you soon', 'success').then(result => {
                  window.location.href = '/'
            })
        }).catch(err => console.log(err))
    }
     

      return (
            
      <>
      <br/>
      <center><h2>Request a proposal</h2>
      <br/>
      <h6>Please complete the following form with as many details as possible regarding your event requirements.</h6></center>
      <FormContainer>
            
                  <form onSubmit={submitHandler} class="row g-3">
                  <h4>Contact Information</h4>
                  <div class="col-md-6">    
                  <label for="inputEmail4" class="form-label">Family Name/Surname</label>
                  <input type="text" class="form-control" id="inputEmail4" name="sName"/>
                  </div>
                  <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">First Name/Given Name</label>
                  <input type="text" class="form-control" id="inputPassword4" name="fName"/>
                  </div>

                  <div class="col-md-6">    
                  <label for="inputEmail4" class="form-label">Company Name</label>
                  <input type="text" class="form-control" id="inputEmail4" name="comName"/>
                  </div>
                  <div class="col-md-6">
                  <label for="inputState" class="form-label">Industry Type</label>
                  <select id="inputState" class="form-select" name="inType">      
                        <option selected>Associations</option>
                        <option selected>Biotechnology</option>
                        <option selected>Business Services</option>
                        <option selected>Conference Organizer</option>
                        <option selected>Consumer Products</option>
                        <option selected>Education</option>
                        <option selected>Electronic</option>
                        <option selected>Fashion and Garment</option>
                        <option selected>Finance and Banking</option>
                        <option selected>Other</option>
                        <option selected>Please select</option>
                  </select>
                  </div>

                  <div class="col-md-6">    
                  <label for="inputEmail4" class="form-label">E-mail Address</label>
                  <input type="email" class="form-control" id="inputEmail4" name="email"/>
                  </div>
                  <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">Phone Number</label>
                  <input type="number" class="form-control" id="inputPassword4" name="phone"/>
                  </div>


                  <div class="col-12">
                  <label for="inputAddress" class="form-label">Address</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" name="address1"/>
                  </div>
                  <div class="col-12">
                  <label for="inputAddress2" class="form-label">Address 2</label>
                  <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name="address2"/>
                  </div>

                  <div class="col-md-6">
                  <label for="inputCity" class="form-label">City/Town</label>
                  <input type="text" class="form-control" id="inputCity" name="city"/>
                  </div>
                  <div class="col-md-4">
                  <label for="inputState" class="form-label">State/Province</label>
                  <select id="inputState" class="form-select" name="state">
                        <option selected>Central</option>
                        <option selected>Eastern</option>
                        <option selected>North Central</option>
                        <option selected>North Western</option>
                        <option selected>Sabaragamuwa</option>
                        <option selected>Uva</option>
                        <option selected>Western</option>
                        <option selected>Please Select</option>
                  </select>
                  </div>
                  <div class="col-md-2">
                  <label for="inputZip" class="form-label">Zip</label>
                  <input type="text" class="form-control" id="inputZip" name="zip"/>
                  <br/>
                  <br/>
                  </div>
                  
                  <h4>Event Information</h4>

                  <div class="col-12">
                  <label for="inputAddress2" class="form-label">Event Name</label>
                  <input type="text" class="form-control" id="inputAddress2" name="evName"/>
                  </div>

                  <div class="col-md-6">    
                  <label for="inputEmail4" class="form-label">Event Start</label>
                  <input type="date" class="form-control" id="inputEmail4" name="sDate"/>
                  </div>
                  <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">Event End</label>
                  <input type="date" class="form-control" id="inputPassword4" name="eDate"/>
                  </div>

                  <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">Number of Atendees</label>
                  <input type="text" class="form-control" id="inputPassword4" name="noAtend"/>
                  </div>
                  <div class="col-md-6">    
                  <label for="inputEmail4" class="form-label">Estimate Decision Date</label>
                  <input type="date" class="form-control" id="inputEmail4" name="estDate"/>
                  <br/>
                  <br/>
                  </div>

                  <h4>Additional requirements</h4>

                  <div class="col-12">
                  <label for="inputState" class="form-label">Do you need any guestrooms?</label>
                  <select id="inputState" class="form-select" name="rooms">
                        <option selected>yes</option>
                        <option selected>no</option>
                        <option selected>Please Select</option>
                  </select>
                  </div>

                  <div class="col-12">
                  <label for="inputState" class="form-label">Do you require function spacing?</label>
                  <select id="inputState" class="form-select" name="spacing">
                        <option selected>yes</option>
                        <option selected>no</option>
                        <option selected>Please Select</option>
                  </select>
                  </div>

                  <div class="col-12">    
                  <label for="inputEmail4" class="form-label">Additional Requests</label>
                  <input type="text" class="form-control" id="inputEmail4" name="adiReq"/>
                  <br/>
                  <br/>
                  </div>

                  <div class="col-12">
                  <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" required="true"/>
                        <label class="form-check-label" for="gridCheck">
                        By ticking this box, I agree to receive Meetings and Events marketing materials, promotional information, updates and more from Shangri-La International Hotel Management Limited via e-mail. I understand that I can withdraw my consent at any time without charge by following the unsubscribe instructions in the marketing communications regarding Meetings and Events or by emailing at unsubscribe@shangri-la.com
                        <br/>
                        <br/>
                        </label>

                   

                  </div>
                  </div>
                  <div class="col-12">
                  <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                  </form>
</FormContainer>                  
      </> 
      )
}

export default ReqScreen