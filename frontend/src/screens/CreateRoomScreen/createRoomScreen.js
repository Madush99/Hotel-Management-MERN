import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import FormContainer from '../../components/FormContainer'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { roomCreate } from '../../actions/roomAction'

const CreateRoomScreen = ({ history }) => {


      const [name, setName] = useState("")
      const [maxcount, setMaxcount] = useState();
      const [features1, setFeatures1] = useState("")
      const [features2, setFeatures2] = useState("")
      const [features3, setFeatures3] = useState("")
      const [features4, setFeatures4] = useState("")
      const [features5, setFeatures5] = useState("")
      const [rentperday, setRentperday] = useState()
      const [imageUrl1, setImageurl1] = useState("")
      const [imageUrl2, setImageurl2] = useState("")
      const [imageUrl3, setImageurl3] = useState("")
      const [type, setType] = useState("")
      const [description, setDescription] = useState("")
      const [uploading, setUploading] = useState(false)


      const dispatch = useDispatch()

      const createRoom = useSelector((state) => state.createRoom)
      const { loading, error, rooms } = createRoom


      useEffect(() => {
            if (rooms) {
                  history.push(Redirect)
            }
      }, [dispatch, rooms, Redirect])


      const submitHandler = (e) => {
            e.preventDefault()
            dispatch(roomCreate(name, maxcount, features1, features2, features3, features4, features5, rentperday, imageUrl1, imageUrl2, imageUrl3, type, description))
      }

      const uploadFileHandler1 = async (e) => {
            const file = e.target.files[0]
            const formData = new FormData()
            formData.append('image', file)
            setUploading(true)

            try {

                  const { data } = await axios.post('/api/uploads/image', formData)

                  setImageurl1(data)

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

                  setImageurl2(data)
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

                  setImageurl3(data)
                  setUploading(false)

            } catch (error) {
                  console.error(error)
                  setUploading(false)
            }
      }

      return (
            <>
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
                                          <Form.Label>Max count</Form.Label>
                                          <Form.Control
                                                type='number'
                                                placeholder='Enter type'
                                                value={maxcount}
                                                onChange={(e) => setMaxcount(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='number'>
                                          <Form.Label>Features1</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder='Enter tables'
                                                value={features1}
                                                onChange={(e) => setFeatures1(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='text'>
                                          <Form.Label>Features2</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder='Enter Phone No'
                                                value={features2}
                                                onChange={(e) => setFeatures2(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='text'>
                                          <Form.Label>Features3</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder='Enter Email'
                                                value={features3}
                                                onChange={(e) => setFeatures3(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='price'>
                                          <Form.Label>Features4</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder='Enter Location'
                                                value={features4}
                                                onChange={(e) => setFeatures4(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='description'>
                                          <Form.Label>Features5</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder='Enter price'
                                                value={features5}
                                                onChange={(e) => setFeatures5(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='description'>
                                          <Form.Label>rentperday</Form.Label>
                                          <Form.Control
                                                type='price'
                                                placeholder='Enter price'
                                                value={rentperday}
                                                onChange={(e) => setRentperday(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='description'>
                                          <Form.Label>type</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder='Enter price'
                                                value={type}
                                                onChange={(e) => setType(e.target.value)}
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
                                                value={imageUrl1}
                                                onChange={(e) => setImageurl1(e.target.value)}
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
                                                value={imageUrl2}
                                                onChange={(e) => setImageurl2(e.target.value)}
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
                                                value={imageUrl3}
                                                onChange={(e) => setImageurl3(e.target.value)}
                                          ></Form.Control>
                                          <Form.File
                                                id='image-file'
                                                label='Choose File'
                                                custom
                                                onChange={uploadFileHandler3}
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

export default CreateRoomScreen
