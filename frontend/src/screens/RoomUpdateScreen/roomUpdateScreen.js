import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Form, Button, Container } from 'react-bootstrap'
import FormContainer from '../../components/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { getRoomDetails, updateRoom } from '../../actions/roomAction'
import { ROOMS_UPDATE_RESET } from '../../constants/roomsConstants'

const RoomUpdateScreen = ({ match, history }) => {

      const roomId = match.params.id

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


      const roomDetails = useSelector((state) => state.roomDetails)
      const { loading, error, rooms } = roomDetails

      const roomUpdate = useSelector((state) => state.roomUpdate)
      const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = roomUpdate

      useEffect(() => {
            if (successUpdate) {
                  dispatch({ type: ROOMS_UPDATE_RESET })
                  history.push('/roomManagement')
            } else {
                  if (!rooms.name || rooms._id !== roomId) {

                        dispatch(getRoomDetails(roomId))

                  } else {
                        setName(rooms.name)
                        setMaxcount(rooms.maxcount)
                        setFeatures1(rooms.features1)
                        setFeatures2(rooms.features2)
                        setFeatures3(rooms.features3)
                        setFeatures4(rooms.features4)
                        setFeatures5(rooms.features5)
                        setRentperday(rooms.rentperday)
                        setImageurl1(rooms.imageUrls[0])
                        setImageurl2(rooms.imageUrls[1])
                        setImageurl3(rooms.imageUrls[2])
                        setDescription(rooms.description)
                        setType(rooms.type)
                  }

            }
      }, [dispatch, history, match.params.id, roomId, rooms, successUpdate])

      const submitHandler = (e) => {
            e.preventDefault()
            dispatch(updateRoom({ _id: roomId, name, maxcount, features1, features2, features3, features4, features5, rentperday, imageUrl1, imageUrl2, imageUrl3, type, description }))
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
                  <Container>
                        <FormContainer>
                              <h1 align='center'>UPDATE ROOM DETAILS</h1>
                              {loadingUpdate && <Loader />}
                              {errorUpdate && <Message variant='danger'>{errorUpdate} </Message>}
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

                                          <Form.Group controlId='text'>
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

                                          <center>
                                                <Button style={{ width: "200px" }} type='submit' variant='warning'>
                                                      UPDATE
                                                </Button>
                                          </center>

                                          <br></br>
                                    </Form>
                              )}
                        </FormContainer>
                  </Container>
                  <br></br>
            </>
      )
}

export default RoomUpdateScreen
