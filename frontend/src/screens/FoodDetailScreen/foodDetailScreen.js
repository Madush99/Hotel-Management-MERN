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
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>

                    <Row>
                        <Col md={6}>
                            <Image src={foods.image} alt={foods.name} fluid />
                        </Col>

                        <Col md={3}>
                            <Card>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Price:</Col>
                                            <Col>
                                                <strong>Rs.{foods.price}</strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Row>


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
                                            className='btn-block nm'
                                            type='button'

                                        >
                                            Add To Cart
                                        </Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h3>{foods.name}</h3>
                                </ListGroup.Item>

                                <ListGroup.Item>Price: RS.{foods.price}</ListGroup.Item>
                                <ListGroup.Item>
                                    Description: {foods.description}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </>
            )}
        </>
    )
}

export default FoodDetail
