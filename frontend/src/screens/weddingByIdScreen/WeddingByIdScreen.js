import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel, Row, Col, ListGroup } from 'react-bootstrap'
import { weddingById } from '../../actions/weddingAction'
import './weddingById.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
Aos.init()
Aos.refresh()

const WeddingByIdScreen = ({ match, history }) => {

      const dispatch = useDispatch()

      const wedById = useSelector((state) => state.wedById)
      const { loading, error, weddings } = wedById

      useEffect(() => {

            dispatch(weddingById(match.params.id))
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
                                                                 
                                                                       
                                                                              <Carousel.Item>
                                                                              <img src = {weddings.wedImage}/>
                                                                              </Carousel.Item>
                                                                       
                                                                  
                                                            </Carousel>
                                                      </Col>


                                                </Row>


                                                <Row>
                                                      <Col >
                                                      <br/>
                                                            <div class="vl">
                                                                 <div className="hk">
                                                                  <h6 > Shangri la </h6>
                                                                  <h1 > {weddings.wedHallName}</h1>
                                                                  </div>
                                                            </div>            <hr></hr>

                                                            <h6>Amenities</h6>
                                                            <hr></hr>
                                                            <h6>Wedding Hall Description</h6>
                                                            <p>{weddings.wedDes}</p>
                                                            <br/>
                                                            <h6>Number of Seats</h6>
                                                            <ul class="b">
                                                                  <p>{weddings.wedSeats} Seats</p>
                                                            </ul>

                                                      </Col>


                                                      <Col >
                                                            <p className='km'>
                                                                  <b>For More Information, please call (+94) 76 666 3881</b></p>
                                                            
                                                                  <ListGroup as="ul" align="center">
                                                                  <ListGroup.Item as="li" variant="secondary">
                                                                        <b>Request a Proposal</b>
                                                                  </ListGroup.Item>
                                                                  <ListGroup.Item as="li" disabled><p>Complete a simple form to let us know your event requirements and leave the planning to us. </p></ListGroup.Item>
                                                                  <ListGroup.Item><button type="button" class="btn btn-warning">Request a Proposal</button></ListGroup.Item>
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

export default WeddingByIdScreen
