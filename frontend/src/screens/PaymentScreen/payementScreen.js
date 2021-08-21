import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../components/FormContainer'
import CheckoutSteps from '../../components/CheckoutSteps/checkoutSteps'
import { savePaymentMethod } from '../../actions/cartAction'

const PaymentScreen = ({ history }) => {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    if (!shippingAddress) {
        history.push('/shipping')
    }
    const [paymentMethod, setPaymentMethod] = useState('PayPal')

  

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }
    

    return <FormContainer>
        <CheckoutSteps step1 step2 step3 />
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group>
                <Form.Label as='legend'>Select Method</Form.Label>

                <Col>

                    <Form.Check
                        type='radio'
                        label='PayPal'
                        id='PayPal'
                        name='paymentMethod'
                        value='PayPal'
                        checked onChange={(e) => setPaymentMethod(e.target.value)}>
                    </Form.Check>

                    <Form.Check
                        type='radio'
                        label='Credit or Debit Card'
                        id='Stripe'
                        name='paymentMethod'
                        value='Stripe'
                        checked onChange={(e) => setPaymentMethod(e.target.value)}>
                    </Form.Check>
                </Col>
            </Form.Group>

            <hr></hr>
            {/* <h1>Delivery Method</h1>

            <Form.Group>
                <Form.Label as='legend'>Select Method</Form.Label>

                <Col>

                    <Form.Check
                        type='radio'
                        label='DHL'
                        id='dhl'
                        name='deliveryMethod'
                        value='dhl'
                        checked onChange={(e) => setDeliveryMethod(e.target.value)}>
                    </Form.Check>

                    <Form.Check
                        type='radio'
                        label='POST'
                        id='post'
                        name='deliveryMethod'
                        value='post'
                        checked onChange={(e) => setDeliveryMethod(e.target.value)}>
                    </Form.Check>
                </Col>
            </Form.Group> */}

            <Form.Group className='py-3'>
            <Button type='submit' varient='primary'>
                Continue
            </Button>
            </Form.Group>
        </Form>
    </FormContainer>

}

export default PaymentScreen