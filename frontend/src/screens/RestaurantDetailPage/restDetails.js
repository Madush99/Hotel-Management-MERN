import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel, Row, Col, ListGroup, Form, Button } from 'react-bootstrap'
import { getRestDetails } from '../../actions/restaurantsActions'
import './restDetails.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'
Aos.init()
Aos.refresh()

const RestaurantDetail = ({ match, history }) => {

    const dispatch = useDispatch()

    const restDetails = useSelector((state) => state.restDetails)
    const { loading, error, restaurants } = restDetails

    useEffect(() => {

        dispatch(getRestDetails(match.params.id))
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
                                <Row>
                                    <Col md={12}>
                                        <Carousel nextLabel="" prevLabel="">
                                            {/* {restaurants.image && restaurants.image.map((url) => { */}

                                            <Carousel.Item>
                                                {/* <img
                                                                                          src={url}
                                                                                          className="img-fluid d-block w-100"
                                                                                          style={{ height: "500px" }}
                                                                                    /> */}
                                                <img src={restaurants.image} ></img>
                                            </Carousel.Item>

                                            {/* } */}
                                            {/* )} */}
                                        </Carousel>
                                    </Col>


                                </Row>

                                <Row>
                                    <Col >
                                        <br></br>
                                        <div class="vl">
                                            <div className="title">
                                                <h6>Shangri-La Colombo</h6>
                                                <h1> {restaurants.name}</h1>
                                            </div>
                                        </div>
                                        <hr></hr>

                                        <div className="about">
                                            <h6>The authentic Chinese restaurant in the city </h6>
                                            <hr></hr>

                                            <p>The following children’s meal plan is applicable for all Golden Circle members. When accompanied by a dine-in adult, up to 2 children of registered in-house hotel guests at the age of 6 and below can enjoy buffet meals at the all-day dining venues at no additional charge. Additional children at the age of 6 and below and all children who are above 6 years of age but under 12 years of age will receive a 50% discount on the adult buffet price. Registered in-house hotel guests can also join Golden Circle at any time during their stay to enjoy the meal plan. Children of non-registered walk-in guests under the age of 12 will receive a 50% discount on buffet meals at the all-day dining outlets.</p>
                                            <p>{restaurants.description}</p>
                                        </div>








                                    </Col>







                                    <Col className="de">
                                       
                                        <div class="d-grid gap-2">
                                            <a class="btn" type="button" href="/booknow">Book Your Table Now!</a>
                                        </div>
                                       

                                        <Row>

                            

                                                <Form className="form">
                                                    <div className="title">Name
                                                        <p >{restaurants.name}</p>
                                                    </div>
                                                    <div className="title">Type
                                                        <p >{restaurants.type}</p>
                                                    </div>
                                                    <div className="title">Tables
                                                        <p >{restaurants.tables}</p>
                                                    </div>
                                                    <div className="title">Phone Number
                                                        <p >{restaurants.phoneNo}</p>
                                                    </div>
                                                    <div className="title">Email
                                                        <p >{restaurants.email}</p>
                                                    </div>
                                                    <div className="title">Location
                                                        <p >{restaurants.location}</p>
                                                    </div>
                                                    <div className="title">Opening Hours
                                                        <p >Breakfast: 8.00a.m to 10.30a.m</p>
                                                        <p >Lunch: 11.30a.m to 4.30p.m</p>
                                                        <p >Dinner: 5.00p.m to 11.30p.m </p>
                                                        <br></br>
                                                        <p >Weekend Yum Cha Saturday
                                                            and Sunday 12pm - 3pm</p>


                                                    </div>
                                                    <div className="title">Location
                                                        <p >{restaurants.location}</p>
                                                    </div>
                                                    <div className="title">Dress Code
                                                        <p >Smart Casual</p>
                                                    </div>

                                                    <div className="title">Smoking Policy
                                                        <p >No smoking permitted</p>
                                                    </div>

                                                </Form>


                                            

                                        </Row>
                                        <hr style={{ color: "#da9100", height: "5px", width: "50%" }}></hr>



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

export default RestaurantDetail
