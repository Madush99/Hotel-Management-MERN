import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Select, Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import FormContainer from '../../components/FormContainer'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { creatTableBooking } from '../../actions/tableBookinAction'
import { getRestDetails } from '../../actions/restaurantsActions'
import Swal from 'sweetalert2'





const ReservationScreen = ({ match, history }) => {

   


      const dispatch = useDispatch()


      const createTbookings = useSelector((state) => state.createTbookings)
      const { loading, error, tbookings } = createTbookings

      const restDetails = useSelector((state) => state.restDetails)
      const { restaurants } = restDetails

   
      const [userid, setUserid] = useState(JSON.parse(localStorage.getItem('userInfo'))._id)
    
       const [restaurantid,setRestaurant] = useState(restaurants._id)
      const [date, setDate] = useState('')
      const [phoneNo, setPhoneNo] = useState('')
      const [adults, setAdults] = useState(0)
      const [childrens, setChildrens] = useState(0)
      const [time, setTime] = useState('')
     



      useEffect(() => {
            if (tbookings) {
                  Swal.fire('Congrats', 'SUCCESSFULY', 'success').then(result => {
                        window.location.href = ''
                  })
            }
            dispatch(getRestDetails(match.params.id))
      }, [history, tbookings, match])

      const submitHandler = (e) => {
            e.preventDefault()
            dispatch(creatTableBooking(userid,restaurants._id,date,phoneNo, adults, childrens, time ))
      }



      
    
     
      return (
            <>
                    <FormContainer>
                        <h1 style={{ textAlign: "center" }}>Booking Details</h1>
                        {loading && <Loader />}
                        {error && <Message variant='danger'>{error} </Message>}
                        {loading ? (
                              <Loader />
                        ) : error ? (
                              <Message variant='danger'>{error}</Message>
                        ) : (
                              <Form onSubmit={submitHandler}>
                                    <Form.Group controlId='userid'>
                                          <Form.Label>USerId</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder=''
                                                value={userid}
                                                onChange={(e) => setUserid(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='restaurantid'>
                                          <Form.Label>restaurantid</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder=''
                                                value={restaurants._id}
                                                onChange={(e) => setRestaurant(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                   


                                    <Form.Group controlId='date'>
                                          <Form.Label>Date</Form.Label>
                                          <Form.Control
                                                type='date'
                                                placeholder='Date'
                                                value={date}
                                                onChange={(e) => setDate(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='phoneNo'>
                                          <Form.Label>Phone Number</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder='Phone number'
                                                value={phoneNo}
                                                onChange={(e) => setPhoneNo(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='adults'>
                                          <Form.Label>Adlults</Form.Label>
                                          <Form.Control
                                                type='number'
                                                placeholder='Adults'
                                                value={adults}
                                                onChange={(e) => setAdults(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='childrens'>
                                          <Form.Label>Childrens</Form.Label>
                                          <Form.Control
                                                type='number'
                                                placeholder='Childrens '
                                                value={childrens}
                                                onChange={(e) => setChildrens(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='time'>
                                          <Form.Label>Time</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder='Time'
                                                value={time}
                                                onChange={(e) => setTime(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>


                                    <Button type='submit' variant='primary' style={{ width: "100%", height: "35px" }} >
                                          CONFIRM
                                    </Button>
                              </Form>
                        )}
                  </FormContainer>
            </>
      )
}

export default ReservationScreen