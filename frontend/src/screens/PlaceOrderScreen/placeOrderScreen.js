import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import CheckoutSteps from '../../components/CheckoutSteps/checkoutSteps'
import { createOrder } from '../../actions/orderAction'

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100)
  cart.taxPrice = addDecimals(Number((0.0 * cart.itemsPrice).toFixed(2)))
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2)

  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`)
    }
    // eslint-disable-next-line
  }, [history, success])

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        totalPrice: cart.totalPrice,
      })
    )
  }

  return (
    <>
      <div className="container">
        <div className='op' data-aos="zoom-in">
          <CheckoutSteps step1 step2 step3 step4 />
          <Row>
            <Col md={8}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h2>Shipping</h2>
                  <p>
                    <strong>Address:</strong>
                    {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                    {cart.shippingAddress.postalCode},{' '}
                    {cart.shippingAddress.country}
                  </p>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col md={4}>
                      <h2>Payment Method</h2>
                      <strong>Method: </strong>
                      {cart.paymentMethod}
                    </Col>

                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <h2>Order Items</h2>
                  {cart.cartItems.length === 0 ? (
                    <Message>Your cart is empty</Message>
                  ) : (
                    <ListGroup variant='flush'>
                      {cart.cartItems.map((item, index) => (
                        <ListGroup.Item key={index}>
                          <Row>
                            <Col md={1}>
                              <Image
                                src={item.image}
                                alt={item.name}
                                fluid
                                rounded
                              />
                            </Col>
                            <Col>
                              <b>
                                <Link to={`/foods/${item.food}`}>
                                  {item.name}
                                </Link></b>

                            </Col>
                            <Col md={4}>
                              <b>
                                {item.qty} x Rs.{item.price} = Rs.{item.qty * item.price}
                              </b>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h2><b>Order Summary</b></h2>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col><b>Items</b></Col>
                      <Col>LKR {cart.itemsPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Shipping</Col>
                  <Col>Rs.{cart.shippingPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Tax</Col>
                  <Col>Rs.{cart.taxPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col><b>Total</b></Col>
                      <Col>LKR {cart.totalPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {error && <Message variant='danger'>{error}</Message>}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <center>
                      <button disabled={cart.cartItems === 0}
                        onClick={placeOrderHandler} className='btn btn-warning'>
                        Place Order
                      </button>
                    </center>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default PlaceOrderScreen