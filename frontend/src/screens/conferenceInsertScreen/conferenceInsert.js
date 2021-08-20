import React, {useState, useEffect} from 'react'
import './conferenceInsert.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { conferenceAdd } from '../../actions/conferenceAction'
import Message from '../../components/Message.js'
import Loader from '../../components/Loader.js'
import { Form } from 'react-bootstrap'
import Swal from 'sweetalert2'


const SignupScreen = ({ location, history }) => {


      const [conName, setName] = useState('')
      const [conSeats, setSeats] = useState('')
      const [conDes, setDes] = useState('')
      const [conPrice, setPrice] = useState('')
      const [confeatures, setFeatures] = useState('')
      const [conImage, setImage] = useState('')
      const [uploading, setUploading] = useState(false)

      const dispatch = useDispatch()

      const conferenceInsert = useSelector(state => state.conferenceInsert)
      const { loading, error, conferenceInfo } = conferenceInsert

      useEffect(() => {
            if (conferenceInfo) {
                  Swal.fire('Successful', 'Successfully Inserted Conference Room', 'success').then(result => {
                        window.location.href = '/profile'
                  })
            }
      }, [history, conferenceInfo])

      const submitHandler = (e) => {
            e.preventDefault()
                  dispatch(conferenceAdd( conName, conDes, conSeats, conPrice, conImage, confeatures ))
      }

      const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            const { data } = await axios.post('http://localhost:6500/api/uploads/image', formData, config)
            setImage(data)
            setUploading(false)
        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }

      return (
            
            <>
  
                  <div className="maincontainer">
                        <div class="container-fluid">
                              <div class="row no-gutter">


                                    <div class="col-md-6 d-none d-md-flex bg-image1"></div>

                                    <div class="col-md-6 bg-light">
                                          <div class="signup d-flex align-items-center py-5">

                                                <div class="container">
                                                      <div class="row">
                                                            <div class="col-lg-10 col-xl-7 mx-auto">
                                                                  <div className='nm'>
                                                                  {error && <Message variant='danger'>{error}</Message>}
                                                                  {loading && <Loader />}
                                                                  </div>
                                                                  <center>
                                                                  <h3 class="display-4">Insert Conference Rooms</h3>
                                                                  </center>
                                                                  <br/>
                                                                  
                                                                  <form onSubmit={submitHandler}>
                                                                        <div class="form-group mb-3">
                                                                              < input id="Enter Wedding Hall Name" type="text" placeholder="Enter Conference room Name" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4" 
                                                                              value={conName}
                                                                              onChange={(e) => setName(e.target.value)} />
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              <input id="input seats" type="text" placeholder="Enter maximum seatings" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" 
                                                                              value={conSeats}
                                                                              onChange={(e) => setSeats(e.target.value)}/>
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              <input id="input description" type="text" placeholder="Enter con description" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" 
                                                                              value={conDes}
                                                                              onChange={(e) => setDes(e.target.value)}/>
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              <input id="input description" type="text" placeholder="Enter con price" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" 
                                                                              value={conPrice}
                                                                              onChange={(e) => setPrice(e.target.value)}/>
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              <input id="input description" type="text" placeholder="Enter con features" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" 
                                                                              value={confeatures}
                                                                              onChange={(e) => setFeatures(e.target.value)}/>
                                                                        </div>
                                                                        <Form.Group controlId='image'>
                                                                            <div className="form-group bn">
                                                                                <Form.Label>Upload Document</Form.Label>
                                                                                <Form.Control type='text' className="form-control" placeholder='Enter Document URL'
                                                                                    value={conImage}
                                                                                    onChange={(e) => setImage(e.target.value)}
                                                                                ></Form.Control>
                                                                            </div>
                                                                            <Form.File id="file" label='Choose File' custom onChange={uploadFileHandler}></Form.File>
                                                                            {uploading && <Loader />}
                                                                        </Form.Group>
                                                                        <br/>
                                                                        <button type="submit" class="btn btn-outline-warning btn-block text-uppercase mb-2 rounded-pill shadow-sm">Submit</button>

                                                                        
                                                                  </form>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default SignupScreen