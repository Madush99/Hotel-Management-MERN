import React, {useState, useEffect} from 'react'
import './weddingInsert.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { weddingAdd } from '../../actions/weddingAction.js'
import Message from '../../components/Message.js'
import Loader from '../../components/Loader.js'
import { Form } from 'react-bootstrap'
import Swal from 'sweetalert2'


const SignupScreen = ({ location, history }) => {


      const [wedHallName, setHallName] = useState('')
      const [wedSeats, setSeats] = useState('')
      const [wedDes, setDes] = useState('')
      const [wedImage, setImage] = useState('')
      const [uploading, setUploading] = useState(false)

      const dispatch = useDispatch()

      const weddingInsert = useSelector(state => state.weddingInsert)
      const { loading, error, weddingInfo } = weddingInsert


      useEffect(() => {
            if (weddingInfo) {
                  Swal.fire('Successful', 'Wedding Hall Data Has been Succesfully Added', 'success').then(result => {
                        window.location.href = '/'
                  })
            }
      }, [history, weddingInfo])

      const submitHandler = (e) => {
            e.preventDefault()
                  dispatch(weddingAdd(wedHallName, wedSeats, wedDes, wedImage))
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
                                                                  <h3 class="display-4">Insert Wedding Hall</h3>
                                                                  </center>
                                                                  <br/>
                                                                  
                                                                  <form onSubmit={submitHandler}>
                                                                        <div class="form-group mb-3">
                                                                              < input id="Enter Wedding Hall Name" type="text" placeholder="Enter Wedding Hall Name" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4" 
                                                                              value={wedHallName}
                                                                              onChange={(e) => setHallName(e.target.value)} />
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              <input id="input seats" type="text" placeholder="Enter maximum seatings" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" 
                                                                              value={wedSeats}
                                                                              onChange={(e) => setSeats(e.target.value)}/>
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              <input id="input description" type="text" placeholder="Enter wedding hall description" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" 
                                                                              value={wedDes}
                                                                              onChange={(e) => setDes(e.target.value)}/>
                                                                        </div>
                                                                        <Form.Group controlId='image'>
                                                                            <div className="form-group bn">
                                                                                <Form.Label>Upload Document</Form.Label>
                                                                                <Form.Control type='text' className="form-control" placeholder='Enter Document URL'
                                                                                    value={wedImage}
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