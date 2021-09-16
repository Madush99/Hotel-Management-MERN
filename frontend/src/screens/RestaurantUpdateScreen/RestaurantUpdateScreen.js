import React, { useEffect, useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'
import FormContainer from '../../components/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { getRestDetails } from '../../actions/restaurantsActions'



const RestaurantUpdateScreen = ({ match }) => {

    const restaurantId = match.params.id

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [tables, setTables] = useState(0)
    const [phoneNo, setPhoneNo] = useState('')
    const [email, setEmail] = useState('')
    const [location, setLocation] = useState('')
    const [image1, setImage1] = useState('')
    const [image2, setImage2] = useState('')
    const [image3, setImage3] = useState('')
    const [description, setDescription] = useState('')
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()


    const restDetails = useSelector((state) => state.restDetails)
    const { loading, error, restaurants } = restDetails


    useEffect(() => {

        if (!restaurants.name || restaurants._id !== restaurantId) {
            dispatch(getRestDetails(restaurantId))
        } else {
            setName(restaurants.name)
            setType(restaurants.type)
            setTables(restaurants.tables)
            setPhoneNo(restaurants.phoneNo)
            setEmail(restaurants.email)
            setLocation(restaurants.location)
            setImage1(restaurants.image1)
            setImage2(restaurants.image2)
            setImage3(restaurants.image3)
            setDescription(restaurants.description)


        }
    }, [dispatch, restaurantId, restaurants, match])


    const submitHandler = (e) => {
        e.preventDefault()
        //Update restaurant
    }

    const uploadFileHandler1 = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try {

              const { data } = await axios.post('/api/uploads/image', formData)

              setImage1(data)

              setUploading(false)

        } catch (error) {
              console.error(error)
              setUploading(false)
        }
  }
  const uploadFileHandler2 = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try {

              const { data } = await axios.post('/api/uploads/image', formData)

              setImage2(data)
              setUploading(false)

        } catch (error) {
              console.error(error)
              setUploading(false)
        }
  }
  const uploadFileHandler3 = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try {

              const { data } = await axios.post('/api/uploads/image', formData)

              setImage3(data)
              setUploading(false)

        } catch (error) {
              console.error(error)
              setUploading(false)
        }
  }


    return (
        <>
            <Link to='/admin/productlist' className='btn btn-light my-3'>
                Go Back
            </Link>
            <FormContainer>
                <h1 style={{ textAlign: "center" }}>UPDATE RESTAURANTS</h1>
                {loading && <Loader />}
                {error && <Message variant='danger'>{error} </Message>}
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='type'>
                            <Form.Label>Type</Form.Label>
                            <Form value={type} onChange={(e) => setType(e.target.value)}>
                                <select style={{ width: "100%" }}>
                                    <option value="Restaurant"> </option>
                                    <option value="Bar">Bar </option>
                                    <option value="Restaurant">Restaurant </option>
                                </select>
                            </Form>

                        </Form.Group>


                        {/* <Form.Group controlId='type'>
                                    <Form.Label>Type</Form.Label>
                                    <Form.Dropdown  onChange={ (e) => setType(e.target.value)}>
                                          <Dropdown value="Restaurant">Restaurant</Dropdown>
                                          <Dropdown value="Bar">Bar</Dropdown>
                                    </Form.Dropdown>
                                    </Form.Group> */}


                        <Form.Group controlId='number'>
                            <Form.Label>Tables</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder='Enter tables'
                                value={tables}
                                onChange={(e) => setTables(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='price'>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter Phone No'
                                value={phoneNo}
                                onChange={(e) => setPhoneNo(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Enter Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='price'>
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter Location'
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='description'>
                            <Form.Label>Descrition</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter price'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        {/* <Form.Group controlId='image'>
                                          <Form.Label>Image</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder='Enter Image url'
                                                value={image}
                                                onChange={(e) => setImage(e.target.value)}
                                          ></Form.Control>
                                          <Form.File
                                                id='image-file'
                                                label='Choose File'
                                                custom
                                                onChange={uploadFileHandler}
                                          ></Form.File>
                                          {uploading && <Loader />}
                                    </Form.Group> */}

                        <Form.Group controlId='image'>
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter Image url'
                                value={image1}
                                onChange={(e) => setImage1(e.target.value)}
                            ></Form.Control>
                            <Form.File
                                id='image-file'
                                label='Choose File'
                                custom
                            onChange={uploadFileHandler1}
                            ></Form.File>
                            {uploading && <Loader />}
                        </Form.Group>
                        <Form.Group controlId='image'>
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter Image url'
                                value={image2}
                                onChange={(e) => setImage2(e.target.value)}
                            ></Form.Control>
                            <Form.File
                                id='image-file'
                                label='Choose File'
                                custom
                            onChange={uploadFileHandler2}
                            ></Form.File>
                            {uploading && <Loader />}
                        </Form.Group>
                        <Form.Group controlId='image'>
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter Image url'
                                value={image3}
                                onChange={(e) => setImage3(e.target.value)}
                            ></Form.Control>
                            <Form.File
                                id='image-file'
                                label='Choose File'
                                custom
                            onChange={uploadFileHandler3}
                            ></Form.File>
                            {uploading && <Loader />}
                        </Form.Group>



                        <Button type='submit' variant='primary' style={{ width: "100%", height: "35px" }} >
                            UPDATE
                        </Button>
                    </Form>
                )}
            </FormContainer>

        </>
    )
}

export default RestaurantUpdateScreen
