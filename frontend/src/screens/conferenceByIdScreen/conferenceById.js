import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel, Row, Col, ListGroup } from 'react-bootstrap'
import { conferenceById } from '../../actions/conferenceAction.js'
import './conferenceById.css'
import { LinkContainer } from 'react-router-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css'
Aos.init()
Aos.refresh()

const ConferenceByIdScreen = ({ match, history }) => {

      const dispatch = useDispatch()

      const conById = useSelector((state) => state.conById)
      const { loading, error, conference } = conById

      useEffect(() => {

            dispatch(conferenceById(match.params.id))
      }, [dispatch, match])


      return (
            <>
                  <div>
                        {loading ? (
                              <h1>loading...</h1>
                        ) : error ? (
                              <h1>Error....</h1>
                        ) : (
                              <>
                                    <div className="container">
                                          <div className='bn' data-aos="zoom-in">
                                                {/* <Row>
                                                      <Col md={12}>
                                                            <img src = {weddings.wedImage}/>
                                                      </Col>


                                                </Row> */}
                                                <Row>
                                                      <Col md={12}>
                                                            <Carousel nextLabel="" prevLabel="">
                                                                 {conference.conImages && conference.conImages.map((url2) => {
                                                                       return (
                                                                        <Carousel.Item>
                                                                              <img
                                                                                    src={url2}
                                                                                    className="img-fluid d-block w-100"
                                                                                    style={{ height: "500px" }}

                                                                                    />
                                                                        </Carousel.Item>
                                                                       )
                                                                 })}
                                                                       
                                                                              
                                                                       
                                                                  
                                                            </Carousel>
                                                      </Col>


                                                </Row>


                                                <Row>
                                                      <Col >
                                                      <br/>
                                                            <div class="vl">
                                                                 <div className="hk">
                                                                  <h6 > Shangri la </h6>
                                                                  <h1 > {conference.conName}</h1>
                                                                  </div>
                                                            </div>            <hr></hr>

                                                            <h6>Amenities</h6>
                                                            <hr></hr>
                                                            <h6>Conference Room Description</h6>
                                                            <p>{conference.conDes}</p>
                                                            <br/>
                                                            <h6>Number of Seats</h6>
                                                            <p>{conference.conSeats} Seats</p>
                                                            <br/>
                                                            <h6>Conference Room Features</h6>
                                                            <p>{conference.conFeatures}</p>
                                                            <br/>
                                                            <h6>Price Per Hour</h6>
                                                            <p>RS.{conference.conPrice} Per Hr/=</p>
                                                            <br/>

                                                      </Col>


                                                      <Col >
                                                            <p className='km'>
                                                                  <b>For More Information, please call (+94) 76 666 3881</b></p>
                                                            
                                                                  <ListGroup as="ul" align="center">
                                                                  <ListGroup.Item as="li" variant="secondary">
                                                                        <b>Book Now</b>
                                                                  </ListGroup.Item>
                                                                  <ListGroup.Item as="li" disabled><p>Complete a simple form to let us know your event requirements and leave the planning to us. </p></ListGroup.Item>
                                                                  <ListGroup.Item><LinkContainer to='/requestPropsal'><button type="button" class="btn btn-warning">Request a Proposal</button></LinkContainer></ListGroup.Item>
                                                            </ListGroup>
                                                      </Col>
                                                </Row>


                                          </div>

                                    </div>

                              </>
                        )}

                  </div>
            </>
      )
}

export default ConferenceByIdScreen