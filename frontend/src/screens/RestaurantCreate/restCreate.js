import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import FormContainer from '../../components/FormContainer'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { createRest } from '../../actions/restaurantsActions'





const RestEditScreen = ({ match, history }) => {
   

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [tables, setTables] = useState(0)
    const [phoneNo, setPhoneNo] = useState('')
    const [email, setEmail] = useState('')
    const [location, setLocation] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [uploading, setUploading] = useState(false)


    const dispatch = useDispatch()


    const createRestaurant = useSelector((state) => state.createRestaurant)
    const { loading, error, restaurants} = createRestaurant

    useEffect(() => {
          if (restaurants) {
                history.push(Redirect)
          }
    }, [dispatch, restaurants, Redirect])

    const submitHandler = (e) => {
      e.preventDefault()
            dispatch(createRest(name,type,tables,phoneNo,email,location,image,description))
}

    const uploadFileHandler = async (e) => {
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('image', file)
      setUploading(true)

          try {
                const config = {
                      headers: {
                            'Content-Type': 'multipart/form-data',
                      },
                }

                const { data } = await axios.post('/api/uploads/image', formData, config)

                setImage(data)
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
                      <h1>ADD RESTAURANTS</h1>
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
                                        <Form.Control
                                              type='text'
                                              placeholder='Enter type'
                                              value={type}
                                              onChange={(e) => setType(e.target.value)}
                                        ></Form.Control>
                                  </Form.Group>

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

                                  <Form.Group controlId='image'>
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
                                  </Form.Group>

                                

                                  <Button type='submit' variant='primary'>
                                        ADD 
                                  </Button>
                            </Form>
                      )}
                </FormContainer>
          </>
    )
}

export default RestEditScreen