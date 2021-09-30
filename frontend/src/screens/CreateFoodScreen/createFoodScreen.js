import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Select, Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import FormContainer from '../../components/FormContainer'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { addFood } from '../../actions/foodsAction'
import Swal from 'sweetalert2'





const FoodCreateScreen = ({ match, history }) => {


      const [name, setName] = useState('')
      const [category, setCategory] = useState('')
      const [price, setPrice] = useState(0)
      const [description, setDescription] = useState('')
      const [image, setImage] = useState('') 
      const [uploading, setUploading] = useState(false)


      const dispatch = useDispatch()


      const createFood = useSelector((state) => state.createFood)
      const { loading, error, foods } = createFood



      useEffect(() => {
            if (foods) {
                  Swal.fire('Congrats', 'Added SUCCESSFULY', 'success').then(result => {
                        window.location.href = '/foodManagement'
                  })
            }
      }, [history, foods])

      const submitHandler = (e) => {
            e.preventDefault()
            dispatch(addFood(name, category, price, description,image))
      }



      const uploadFileHandler = async (e) => {
            const file = e.target.files[0]
            const formData = new FormData()
            formData.append('image', file)
            setUploading(true)

            try {
                  const { data } = await axios.post('/api/uploads/image', formData)

                  setImage(data)
                  setUploading(false)
            } catch (error) {
                  console.error(error)
                  setUploading(false)
            }
      }

     

      

      return (
            <>
                    <FormContainer>
                        <h1 style={{ textAlign: "center" }}>ADD FOOD</h1>
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

                                    <Form.Group controlId='name'>
                                          <Form.Label>Category</Form.Label>
                                          <Form.Control
                                                type='name'
                                                placeholder='Enter Category'
                                                value={category}
                                                onChange={(e) => setCategory(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>


                                    {/* <Form.Group controlId='type'>
                                    <Form.Label>Type</Form.Label>
                                    <Form.Dropdown  onChange={ (e) => setType(e.target.value)}>
                                          <Dropdown value="Restaurant">Restaurant</Dropdown>
                                          <Dropdown value="Bar">Bar</Dropdown>
                                    </Form.Dropdown>
                                    </Form.Group> */}


                                    <Form.Group controlId='number'>
                                          <Form.Label>Price</Form.Label>
                                          <Form.Control
                                                type='number'
                                                placeholder='price'
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                   


                                    <Form.Group controlId='description'>
                                          <Form.Label>Description</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder='Enter Description'
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
                                  


                                    <Button type='submit' variant='primary' style={{ width: "100%", height: "35px" }} >
                                          ADD
                                    </Button>
                              </Form>
                        )}
                  </FormContainer>
            </>
      )
}

export default FoodCreateScreen