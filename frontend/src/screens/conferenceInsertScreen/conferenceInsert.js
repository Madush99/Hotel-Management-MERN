import React, {useState, useEffect} from 'react'
import './conferenceInsert.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { conferenceAdd } from '../../actions/conferenceAction.js'
import Message from '../../components/Message.js'
import Loader from '../../components/Loader.js'
import { Form } from 'react-bootstrap'



const ConferenceInsertScreen = ({ location, history }) => {


      const [conName, setConName] = useState('')
      const [conSeats, setConSeats] = useState('')
      const [conPrice, setConPrice] = useState(0)
      const [conDes, setConDes] = useState('')
      const [conFeatures, setConFeatures] = useState('')
      const [conImage, setConImage] = useState('')
      const [uploading, setUploading] = useState(false)

      const dispatch = useDispatch()

      const conferenceInsert = useSelector(state => state.conferenceInsert)
      const { loading, error, conferenceInfo } = conferenceInsert

      const redirect = location.search ? location.search.split('=')[1] : '/'

      useEffect(() => {
            if (conferenceInfo) {
                  history.push(redirect)
            }

      }, [history, conferenceInfo, redirect])

      const submitHandler = (e) => {
            e.preventDefault()
                  dispatch(conferenceAdd(conName, conSeats, conPrice, conFeatures, conDes, conImage))
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
            setConImage(data)
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
                                                                  <h3 class="display-4">Insert Conference Room</h3>
                                                                  </center>
                                                                  <br/>
                                                                  
                                                                  <form onSubmit={submitHandler}>
                                                                        <div class="form-group mb-3">
                                                                              < input id="Enter Wedding Hall Name" type="text" placeholder="Enter Conference Hall Name" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4" 
                                                                              value={conName}
                                                                              onChange={(e) => setConName(e.target.value)} />
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              <input id="input seats" type="text" placeholder="Enter maximum seatings" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" 
                                                                              value={conSeats}
                                                                              onChange={(e) => setConSeats(e.target.value)}/>
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              <input id="input description" type="text" placeholder="Enter Conference Room description" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" 
                                                                              value={conDes}
                                                                              onChange={(e) => setConDes(e.target.value)}/>
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              <input id="input description" type="number" placeholder="Enter Conference Room Price" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" 
                                                                              value={conPrice}
                                                                              onChange={(e) => setConPrice(e.target.value)}/>
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              <input id="input description" type="text" placeholder="Enter Conference Features" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" 
                                                                              value={conFeatures}
                                                                              onChange={(e) => setConFeatures(e.target.value)}/>
                                                                        </div>
                                                                        <Form.Group controlId='image'>
                                                                            <div className="form-group bn">
                                                                                <Form.Label>Upload Document</Form.Label>
                                                                                <Form.Control type='text' className="form-control" placeholder='Enter Document URL'
                                                                                    value={conImage}
                                                                                    onChange={(e) => setConImage(e.target.value)}
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

export default ConferenceInsertScreen