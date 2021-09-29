import React, { useEffect, useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'
import FormContainer from '../../components/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { getFoodDetails, updateFoodDetails } from '../../actions/foodsAction'
import { FOODS_UPDATE_RESET } from '../../constants/foodsConstants'





const FoodUpdateScreen = ({ match, history }) => {
      const foodId = match.params.id

      const [name, setName] = useState('')
      const [category, setCategory] = useState('')
      const [price, setPrice] = useState(0)
      const [description, setDescription] = useState('')
      const [image, setImage] = useState('')
      const [uploading, setUploading] = useState(false)

      const dispatch = useDispatch()

      const foodDetailsByid = useSelector((state) => state.foodDetailsByid)
      const { loading, error, foods } = foodDetailsByid

      const foodUpdate = useSelector((state) => state.foodUpdate)
      const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = foodUpdate

      useEffect(() => {
            if (successUpdate) {
                  dispatch({ type: FOODS_UPDATE_RESET })
                  history.push('/foodManagement')
            } else {
                  if (!foods.name || foods._id !== foodId) {
                        dispatch(getFoodDetails(foodId))
                  } else {
                        setName(foods.name)
                        setCategory(foods.category)
                        setPrice(foods.price)
                        setDescription(foods.description)
                        setImage(foods.image)

                  }
            }

      }, [dispatch, foodId, foods, history, match, successUpdate])

      const submitHandler = (e) => {
            e.preventDefault()
            dispatch(updateFoodDetails({
                  _id: foodId,
                  name,
                  category,
                  price,
                  description,
                  image
            }))


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
                        <h1 style={{ textAlign: "center" }}>Update Foods</h1>
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
                                          UPDATE FOOD
                                    </Button>
                              </Form>
                        )}
                  </FormContainer>
            </>
      )


}

export default FoodUpdateScreen
