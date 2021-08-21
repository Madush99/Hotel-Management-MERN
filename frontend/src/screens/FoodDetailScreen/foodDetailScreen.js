import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import { getFoodDetails } from '../../actions/foodsAction'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'
import '../FoodDetailScreen/foodDetail.css'

Aos.init()
Aos.refresh()

const FoodDetail = ({ match, history }) => {
    const [qty, setQty] = useState(1)

    const dispatch = useDispatch()

    const foodDetailsByid = useSelector((state) => state.foodDetailsByid)
    const { loading, error, foods } = foodDetailsByid

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {

        dispatch(getFoodDetails(match.params.id))
    }, [dispatch, match])





    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }




    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <div className="container">
                        <div className='op' data-aos="zoom-in">
                            <Row>

                                <Col md={7}>
                                    <Image src={foods.image} alt={foods.name} fluid />
                                </Col>

                                <Col md={5} className="rt">
                                    <h4>ADD TO CART</h4>
                                    <Card >
                                        <ListGroup variant='flush'>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Category:</Col>
                                                    <Col>
                                                        <strong> {foods.category}</strong>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Price:</Col>
                                                    <Col>
                                                        <strong>LKR {foods.price}.00</strong>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>

                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Qty</Col>
                                                    <Col>
                                                        <Form.Control
                                                            type='number'
                                                            placeholder='Enter name'
                                                            value={qty}
                                                            onChange={(e) => setQty(e.target.value)}
                                                        >
                                                        </Form.Control>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>


                                            <ListGroup.Item>
                                                <Button
                                                    onClick={addToCartHandler}
                                                    className='btn-block '
                                                    type='button'
                                                    variant='warning'
                                                >
                                                    Add To Cart
                                                </Button>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                    <hr></hr>
                                    <b><p>Phone
                                        (+94) 11 788 8288</p></b>
                                    <b><p>Email
                                        restaurants.slcb@juice.com</p></b>

                                </Col>
                            </Row>

                            <Row>
                                <Col md={7}>
                                    {/* <ListGroup variant='flush'>
                                        <div className='fg'>
                                            <ListGroup.Item>
                                                <h3>{foods.name}</h3>
                                            </ListGroup.Item>
                                        </div>
                                        <ListGroup.Item>Price: LKR {foods.price}</ListGroup.Item>
                                        <ListGroup.Item>
                                            Description: {foods.description}
                                        </ListGroup.Item>
                                    </ListGroup> */}

                                    <br></br>
                                    <div class="fg">
                                        <div className="df">
                                            <h6>Shangri-La Colombo</h6>
                                            <h1> {foods.name}</h1>
                                        </div>
                                    </div>
                                    <hr></hr>

                                    <h6>LKR {foods.price}.00</h6>
                                    <h6>About the ItemS</h6>
                                    <p>{foods.description}</p>
                                </Col>
                                <Col md={5} className="re">

                                </Col>
                            </Row>
                        </div>
                    </div>
                </>
            )
            }
        </>
    )
}

export default FoodDetail
