import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../components/FormContainer'
import CheckoutSteps from '../../components/CheckoutSteps/checkoutSteps'
import { saveShippingAddress } from '../../actions/cartAction'

const ShippingScreen = ({ history }) => {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        history.push('/payment')
    }

    //shipping details form

    return <FormContainer>
        <CheckoutSteps step1 step2 />
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='address' className='py-1'>
                <Form.Label>Address</Form.Label>
                <Form.Control type='text' placeholder='Enter address' value={address} required onChange={(e) => setAddress(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='city' className='py-2'>
                <Form.Label>City</Form.Label>
                <Form.Control type='text' placeholder='Enter city' value={city} required onChange={(e) => setCity(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='postalCode' className='py-2'>
                <Form.Label>Postal Code</Form.Label>
                <Form.Control type='text' placeholder='Enter postal Code' value={postalCode} required onChange={(e) => setPostalCode(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='country' className='py-2'>
                <Form.Label>Country</Form.Label>
                <Form.Control type='text' placeholder='Enter country' value={country} required onChange={(e) => setCountry(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className='py-3'>
                <Button type='submit' varient='primary'>
                    Continue
                </Button>
            </Form.Group>

        </Form>
    </FormContainer>

}

export default ShippingScreen