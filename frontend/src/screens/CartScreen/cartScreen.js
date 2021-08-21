import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../../components/Message'
import { addToCart, removeFromCart } from '../../actions/cartAction'


const CartScreen = ({ match, location, history }) => {
  const foodId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (foodId) {
      dispatch(addToCart(foodId, qty))
    }
  }, [dispatch, foodId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return (
    <>
      <div className="container">
        <div className='op' data-aos="zoom-in">
          <Row>
            <Col md={8}>
              <h1>SHOOPING CART</h1>
              {cartItems.length === 0 ? (
                <Message>
                  Your cart is empty <Link to='/'>Go Back</Link>
                </Message>
              ) : (
                <ListGroup variant='flush'>
                  {cartItems.map((item) => (
                    <ListGroup.Item key={item.food}>
                      <Row>
                        <Col md={2}>
                          <Image src={item.image} alt={item.name} fluid rounded />
                        </Col>
                        <Col md={3}>
                          <Link className='link' to={`/product/${item.product}`}><h5>{item.name}</h5></Link>
                        </Col>
                        <Col md={2}><h5>LKR {item.price}</h5></Col>
                        <Col md={2}>
                          <Form.Control
                            type='number'
                            value={item.qty}
                            onChange={(e) =>
                              dispatch(
                                addToCart(item.food, Number(e.target.value))
                              )
                            }
                          >

                          </Form.Control>
                        </Col>
                        <Col md={2}>
                          <Button
                            type='button'
                            variant='light'
                            onClick={() => removeFromCartHandler(item.food)}
                          >
                            <i className='fas fa-trash'></i>
                          </Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Col>
            <Col md={4} className='lo'>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h2>
                      Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                      items
                    </h2>

                    <h5> LKR {cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}</h5>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      type='button'
                      className='btn-block'
                      disabled={cartItems.length === 0}
                      onClick={checkoutHandler}
                      variant='warning'
                    >
                      Proceed To Checkout
                    </Button>
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

export default CartScreen