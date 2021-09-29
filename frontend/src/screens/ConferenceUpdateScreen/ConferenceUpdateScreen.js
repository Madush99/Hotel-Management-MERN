import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { conferenceById, updateConDetails } from '../../actions/conferenceAction'
import Message from '../../components/Message.js'
import Loader from '../../components/Loader.js'
import { Form } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { CONFERENCE_UPDATE_RESET } from '../../constants/conferenceConstant'


const ConferenceUpdateScreen = ({ match, history }) => {

    const conferenceId = match.params.id


      const [conName, setName] = useState('')
      const [conSeats, setSeats] = useState('')
      const [conDes, setDes] = useState('')
      const [conPrice, setPrice] = useState('')
      const [conFeatures, setFeatures] = useState('')
      const [conImg1, setImg1] = useState('')
      const [conImg2, setImg2] = useState('')
      const [conImg3, setImg3] = useState('')
      const [uploading, setUploading] = useState(false)

      const dispatch = useDispatch()

      const conById = useSelector((state) => state.conById)
      const { loading, error, conference } = conById


      const conUpdate = useSelector((state) => state.conUpdate)
      const { loading:loadingUpdate, error:errorUpdate, success:successUpdate } = conUpdate

      useEffect(() => {
          if(successUpdate){
              dispatch({type:CONFERENCE_UPDATE_RESET})
              Swal.fire('Successful', 'Successfully Updated Conference Room', 'success').then(result => {
                window.location.href = '/wedEveMgt'
          })

          }
            if (!conference.conName || conference._id !== conferenceId ) {
                dispatch(conferenceById(conferenceId))
                  }
                  else{
                    setName(conference.conName)
                    setSeats(conference.conSeats)
                    setDes(conference.conDes)
                    setPrice(conference.conPrice)
                    setFeatures(conference.conFeatures)
                    setImg1(conference.conImages[0])
                    setImg2(conference.conImages[1])
                    setImg3(conference.conImages[2])
                  }            


      }, [dispatch, conferenceId, conference, match, successUpdate])

      const submitHandler = (e) => {
            e.preventDefault()
                  dispatch(updateConDetails({_id: conferenceId, conName, conDes, conSeats, conPrice, conFeatures, conImg1, conImg2, conImg3 }))
      }

      const uploadFileHandler1 = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try {
            // const config = {
            //     headers: {
            //         'Content-Type': 'multipart/form-data'
            //     }
            // }
            const { data } = await axios.post('http://localhost:6500/api/uploads/image', formData)
            setImg1(data)
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
          // const config = {
          //     headers: {
          //         'Content-Type': 'multipart/form-data'
          //     }
          // }
          const { data } = await axios.post('http://localhost:6500/api/uploads/image', formData)
          setImg2(data)
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
          // const config = {
          //     headers: {
          //         'Content-Type': 'multipart/form-data'
          //     }
          // }
          const { data } = await axios.post('http://localhost:6500/api/uploads/image', formData)
          setImg3(data)
          setUploading(false)
      } catch (error) {
          console.error(error)
          setUploading(false)
      }
  }

      return (
            
            <>
                  <center>
                        <div class="container-fluid">
                                                <div class="container">
                                                      <div class="row">
                                                            <div class="col-lg-10 col-xl-7 mx-auto">
                                                                  <div className='nm'>
                                                                  {errorUpdate && <Message variant='danger'>{error}</Message>}
                                                                  {loadingUpdate && <Loader />}
                                                                  </div>
                                                                  <center>
                                                                  <h4>Update Conference Rooms</h4>
                                                                  </center>
                                                                  <br/>
                                                                  
                                                                  <form onSubmit={submitHandler}>
                                                                        <div class="form-group mb-3">
                                                                              < input id="Enter Wedding Hall Name" type="text" placeholder="Enter Conference Room Name" required="" autofocus="" className="form-control " 
                                                                              value={conName}
                                                                              onChange={(e) => setName(e.target.value)} />
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              <input id="input seats" type="text" placeholder="Enter Maximum Seatings" required="" class="form-control" 
                                                                              value={conSeats}
                                                                              onChange={(e) => setSeats(e.target.value)}/>
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              <input id="input description" type="text" placeholder="Enter Description" required="" class="form-control" 
                                                                              value={conDes}
                                                                              onChange={(e) => setDes(e.target.value)}/>
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              <input id="input description" type="number" placeholder="Enter Price" required="" class="form-control" 
                                                                              value={conPrice}
                                                                              onChange={(e) => setPrice(e.target.value)}/>
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              <input id="input description" type="text" placeholder="Enter Features" required="" class="form-control" 
                                                                              value={conFeatures}
                                                                              onChange={(e) => setFeatures(e.target.value)}/>
                                                                        </div>
                                                                        <br/>
                                                                        <Form.Group controlId='image'>
                                                                            <div className="form-group bn">
                                                                                <Form.Label>Add Image</Form.Label>
                                                                                <Form.Control type='text' className="form-control" placeholder='Enter Image URL'
                                                                                    value={conImg1}
                                                                                    onChange={(e) => setImg1(e.target.value)}
                                                                                ></Form.Control>
                                                                            </div>
                                                                            
                                                                            <Form.File id="file" label='Choose File' custom onChange={uploadFileHandler1}></Form.File>
                                                                            {uploading && <Loader />}
                                                                        </Form.Group>
                                                                        <br/>
                                                                        <Form.Group controlId='image'>
                                                                            <div className="form-group bn">
                                                                                <Form.Label>Add Image</Form.Label>
                                                                                <Form.Control type='text' className="form-control" placeholder='Enter Image URL'
                                                                                    value={conImg2}
                                                                                    onChange={(e) => setImg2(e.target.value)}
                                                                                ></Form.Control>
                                                                            </div>
                                                                            <Form.File id="file" label='Choose File' custom onChange={uploadFileHandler2}></Form.File>
                                                                            {uploading && <Loader />}
                                                                        </Form.Group>
                                                                        <br/>
                                                                        <Form.Group controlId='image'>
                                                                            <div className="form-group bn">
                                                                                <Form.Label>Add Image</Form.Label>
                                                                                <Form.Control type='text' className="form-control" placeholder='Enter Image URL'
                                                                                    value={conImg3}
                                                                                    onChange={(e) => setImg3(e.target.value)}
                                                                                ></Form.Control>
                                                                            </div>
                                                                            <Form.File id="file" label='Choose File' custom onChange={uploadFileHandler3}></Form.File>
                                                                            {uploading && <Loader />}
                                                                        </Form.Group>

                                                                        <br/>
                                                                        <button type="submit" class="btn btn-outline-warning btn-block text-uppercase mb-2 rounded-pill shadow-sm">Submit</button>

                                                                        
                                                                  </form>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    
                              
                        
                        </center>
            </>
      )
}

export default ConferenceUpdateScreen