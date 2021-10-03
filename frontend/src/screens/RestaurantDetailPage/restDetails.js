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




    const bookNowHandler = () => {
        history.push(`/bookNow/${match.params.id}`)
    }


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
                                            {restaurants.images && restaurants.images.map((url) => {
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
                                            <div className="title">
                                                <h6>Grand Hotel</h6>
                                                <h1> {restaurants.name}</h1>
                                            </div>
                                        </div>
                                        <hr></hr>

                                        <div className="about">
                                            <h6>The authentic Chinese restaurant in the city </h6>
                                            <hr></hr>

                                            <p>Grand Hotel’s signature Chinese restaurant Shang Palace celebrates cuisine steeped in rich tradition. The décor is inspired from Beijing’s traditional siheyuan houses and blends beautifully with modern luxury. </p>
                                            <p>At Shang Palace we invite you to enjoy the varied flavours of Dongbei, Sichuan and Canton. Succulent meats, fresh seafood, delicate dim sum, a range of Chinese teas and cocktails all feature in our extensive menu, allowing you to indulge in a true feast.</p>
                                            <p>Our weekday lunch set menu features intricate delicacies including flavourful soups, the finest dim sum, meats, seafood, rice and noodles. Available from Tuesday to Friday‬.</p>
                                            <p>Location - Level 3</p>
                                            <p>Lunch - 12 noon to 3pm, Monday to Sunday</p>
                                            <p>Dinner - 6.30pm to 11pm, Monday to Sunday</p>
                                            <p>Weekend Yum Cha Lunch - 12noon to 3pm, Saturday and Sunday</p>
                                            <p>{restaurants.description}</p>
                                        </div>

                                        <Row>

                                        </Row>


                                    </Col>



                                    <Col className="de">

                                        {/* <div class="d-grid gap-2">
                                            <a class="btnn" type="button" href="/booknow">Book Your Table Now!</a>
                                        </div> */}

                                        <ListGroup.Item>
                                            <Button
                                                onClick={bookNowHandler}
                                                className='btn-block '
                                                type='button'
                                                variant='warning'
                                            >
                                               Book Now !
                                            </Button>
                                        </ListGroup.Item>


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
