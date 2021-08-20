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
      const [image1, setImage1] = useState('')
      const [image2, setImage2] = useState('')
      const [image3, setImage3] = useState('')
      const [description, setDescription] = useState('')
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
            dispatch(addFood(name, category, price, image1,image2,image3, description))
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
                    <FormContainer>
                        <h1 style={{ textAlign: "center" }}>ADD RESTAURANTS</h1>
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
                                                placeholder='Enter name'
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
                                                placeholder='Enter tables'
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}
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
                                          ADD
                                    </Button>
                              </Form>
                        )}
                  </FormContainer>
            </>
      )
}

export default FoodCreateScreen