import React, { useEffect, useState } from 'react'
import { Carousel, Row, Col, ListGroup } from 'react-bootstrap'
import moment from 'moment'
import Swal from 'sweetalert2'
import axios from "axios";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useDispatch, useSelector } from 'react-redux'
import { bookRoomDetails } from '../../actions/roomAction'
import StripeCheckout from 'react-stripe-checkout'
import '../BookingScreen/booking.css'
import Message from '../../components/Message'
import Loader from '../../components/Loader'

Aos.init()
Aos.refresh()

const BookingScreen = ({ match }) => {


      const fromdate = moment(match.params.fromdate, 'DD-MM-YYYY')
      const todate = moment(match.params.todate, 'DD-MM-YYYY')
      const totalDays = moment.duration(todate.diff(fromdate)).asDays() + 1
      const [totalAmount, settotalAmount] = useState()

      const dispatch = useDispatch()

      const roomBookdetails = useSelector((state) => state.roomBookdetails)
      const { loading, error, rooms } = roomBookdetails


      useEffect(() => {
            dispatch(bookRoomDetails(match.params.roomid))

      }, [dispatch, match])

      async function tokenHander(token) {

            console.log(token);
            const bookingDetails = {
                  token,
                  userid: JSON.parse(localStorage.getItem('userInfo'))._id,
                  rooms,
                  fromdate,
                  todate,
                  totalDays,
                  totalAmount: rooms.rentperday * totalDays

            }

            try {

                  const result = await axios.post('/api/booking/bookroom', bookingDetails)
                  console.log(result)
                  Swal.fire('Congrats', 'Your Room has booked succeessfully', 'success').then(result => {
                        window.location.href = '/rooms'
                  })

            } catch (error) {
                  Swal.fire('Oops', 'Something went wrong , please try later', 'error')
                  console.log(error);

            }
      }

      return (

            <>

                  <div>
                        {loading ? (
                              <Loader />
                        ) : error ? (
                              <Message />
                        ) : (
                              <>
                                    <div className='m-5'>
                                          <div className="row p-3 mb-5 bs" data-aos="zoom-out-right">

                                                <div >
                                                      <div className='bn'>
                                                            <Row>
                                                                  <Col md={12}>
                                                                        <Carousel nextLabel="" prevLabel="">
                                                                              {rooms.imageUrls && rooms.imageUrls.map((url) => {
                                                                                    return (
                                                                                          <Carousel.Item>
                                                                                                <img
                                                                                                      src={url}
                                                                                                      className="img-fluid d-block w-100"
                                                                                                      style={{ height: "500px" }}
                                                                                                />
                                                                                          </Carousel.Item>
                                                                                    );
                                                                              })}
                                                                        </Carousel>
                                                                  </Col>


                                                            </Row>

                                                            <Row>
                                                                  <Col >
                                                                        <br></br>
                                                                        <div class="vl">
                                                                              <div className="jk">
                                                                                    <h6>Grand Hotel Colombo</h6>
                                                                                    <h1 >{rooms.name}</h1>
                                                                              </div>


                                                                        </div>            <hr></hr>

                                                                        <h6>Amenities</h6>
                                                                        <hr></hr>
                                                                        <h6>About The Room</h6>
                                                                        <p>{rooms.description}</p>

                                                                        <h6>Features</h6>
                                                                        <ul class="b">
                                                                              <li>{rooms.features1}</li>
                                                                              <li>{rooms.features2}</li>
                                                                              <li>{rooms.features3}</li>
                                                                              <li>{rooms.features4}</li>
                                                                              <li>{rooms.features5}</li>
                                                                        </ul>
                                                                        <h6>Bath & Per sonal Care</h6>
                                                                        <ul class="b">
                                                                              <li>Walk-in shower and/or separate bathtub</li>
                                                                              <li>Bathroom mirror</li>
                                                                              <li>Plush bathrobes and slippers</li>
                                                                              <li>300 thread count linen</li>
                                                                              <li>Pillow menu with hypoallergenic options</li>
                                                                              <li>Iron and ironing board</li>
                                                                        </ul>

                                                                        <h6>Media & Entertainment</h6>
                                                                        <ul class="b">
                                                                              <li>High-speed Internet access</li>
                                                                              <li>Flatscreen TV</li>
                                                                              <li>Wide selection of international and local television channels</li>
                                                                        </ul>

                                                                        <h6>Refreshments</h6>
                                                                        <ul class="b">
                                                                              <li>Minibar</li>
                                                                              <li>Water</li>
                                                                              <li>Tea and coffee making facilities</li>
                                                                        </ul>



                                                                  </Col>


                                                                  <Col >
                                                                        <p className='km'>
                                                                              <b>For reservation, please call (+94) 11 357 1446</b></p>
                                                                        <ListGroup as="ul" align="center">
                                                                              <ListGroup.Item as="li" variant="secondary">
                                                                                    <b>Details</b>
                                                                              </ListGroup.Item>
                                                                              <ListGroup.Item as="li" disabled>
                                                                                    <p><b>Name</b> : {JSON.parse(localStorage.getItem('userInfo')).name}</p>
                                                                              </ListGroup.Item>
                                                                              <ListGroup.Item as="li" disabled><b>Max Count: </b> {rooms.maxcount}</ListGroup.Item>
                                                                              <ListGroup.Item as="li" disabled>
                                                                                    <b>Room Type: </b> {rooms.type}
                                                                              </ListGroup.Item>
                                                                              <ListGroup.Item as="li" disabled >From <b>LKR {rooms.rentperday}/= </b>Average Per Night</ListGroup.Item>
                                                                        </ListGroup>
                                                                        <br></br>
                                                                        <ListGroup as="ul" align="center">
                                                                              <ListGroup.Item as="li" variant="secondary">
                                                                                    <b>BOOK NOW</b>
                                                                              </ListGroup.Item>
                                                                              <ListGroup.Item as="li" disabled><b>Name: </b> {JSON.parse(localStorage.getItem('userInfo')).name}</ListGroup.Item>
                                                                              <ListGroup.Item as="li" disabled><b>From Date: </b> {match.params.fromdate}</ListGroup.Item>
                                                                              <ListGroup.Item as="li" disabled><b>To Date: </b> {match.params.todate}</ListGroup.Item>
                                                                              <ListGroup.Item as="li" disabled>
                                                                                    <b>Total Days : </b> {totalDays}
                                                                              </ListGroup.Item>

                                                                              <ListGroup.Item as="li" disabled ><b>Total Amount : LKR {rooms.rentperday * totalDays}</b></ListGroup.Item>

                                                                              <StripeCheckout Checkout
                                                                                    amount={rooms.rentperday * totalDays * 100}
                                                                                    shippingAddress
                                                                                    token={tokenHander}
                                                                                    stripeKey='pk_test_51JPWGjSI37Hyu4LS14ggmcl7QaBe64PshUwoHcOqfMgFrpRqT2jmYQ2VpskMdLGcKUkROnXRy8YZ87FfkEJMSVcw00Os62ys8R'
                                                                                    currency='LKR'
                                                                              >

                                                                                    <ListGroup.Item as="li" disabled > <button className='btn btn-outline-warning'>Pay Now</button></ListGroup.Item>

                                                                              </StripeCheckout>
                                                                        </ListGroup>
                                                                  </Col>
                                                            </Row>

                                                            <Row>
                                                                  <h6>Children's meal plan for guests staying at the hotel.</h6>
                                                                  <p>The following children’s meal plan is applicable for all Golden Circle members. When accompanied by a dine-in adult, up to 2 children of registered in-house hotel guests at the age of 6 and below can enjoy buffet meals at the all-day dining venues at no additional charge. Additional children at the age of 6 and below and all children who are above 6 years of age but under 12 years of age will receive a 50% discount on the adult buffet price. Registered in-house hotel guests can also join Golden Circle at any time during their stay to enjoy the meal plan. Children of non-registered walk-in guests under the age of 12 will receive a 50% discount on buffet meals at the all-day dining outlets.</p>
                                                            </Row>


                                                      </div>

                                                </div>

                                          </div>
                                    </div >
                              </>
                        )}
                  </div>
            </>

      )
}

export default BookingScreen
