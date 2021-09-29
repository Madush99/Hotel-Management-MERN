import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { weddingById, updateWedDetails } from '../../actions/weddingAction.js'
import Message from '../../components/Message.js'
import Loader from '../../components/Loader.js'
import { Form } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { WEDDING_UPDATE_RESET } from '../../constants/weddingConstant.js'


const WeddingUpdateScreen = ({ match, history }) => {

    const weddingId = match.params.id

      const [wedHallName, setHallName] = useState('')
      const [wedSeats, setSeats] = useState('')
      const [wedDes, setDes] = useState('')
      const [wedImg1, setImg1] = useState('')
      const [wedImg2, setImg2] = useState('')
      const [wedImg3, setImg3] = useState('')
      const [uploading, setUploading] = useState(false)

      const dispatch = useDispatch()

      const wedById = useSelector((state) => state.wedById)
      const { loading, error, weddings } = wedById

      const wedUpdate = useSelector((state) => state.wedUpdate)
      const { loading:loadingUpdate, error:errorUpdate, success:successUpdate } = wedUpdate

      useEffect(() => {
            if (successUpdate) {
                dispatch({type:WEDDING_UPDATE_RESET})
                Swal.fire('Successful', 'Successfully Updated Wedding Room', 'success').then(result => {
                    window.location.href = '/wedEveMgt'
              }) 
            }

            if (!weddings.wedHallName || weddings._id !== weddingId) {
                dispatch(weddingById(weddingId))
                  }
            else{
                setHallName(weddings.wedHallName)
                setSeats(weddings.wedSeats)
                setDes(weddings.wedDes)
                setImg1(weddings.wedImages[0])
                setImg2(weddings.wedImages[1])
                setImg3(weddings.wedImages[2])
            }

      }, [dispatch, weddingId, weddings, match, successUpdate])

      const submitHandler = (e) => {
            e.preventDefault()
                  dispatch(updateWedDetails({_id: weddingId, wedHallName, wedSeats, wedDes, wedImg1, wedImg2, wedImg3}))
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
      //     const config = {
      //         headers: {
      //             'Content-Type': 'multipart/form-data'
      //         }
      //     }
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
  
                  
                        <div class="container-fluid">
                              


                                    

                                    
                                          

                                                <div class="container">
                                                      <div class="row">
                                                            <div class="col-lg-10 col-xl-7 mx-auto">
                                                                  <div className='nm'>
                                                                  {error && <Message variant='danger'>{error}</Message>}
                                                                  {loading && <Loader />}
                                                                  </div>
                                                                  <center>
                                                                  <h4>Update Wedding Hall</h4>
                                                                  </center>
                                                                  <br/>
                                                                  
                                                                  <form onSubmit={submitHandler}>
                                                                        <div class="form-group mb-3">
                                                                              < input id="Enter Wedding Hall Name" type="text" placeholder="Enter Wedding Hall Name" required="" autofocus="" className="form-control" 
                                                                              value={wedHallName}
                                                                              onChange={(e) => setHallName(e.target.value)} />
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              <input id="input seats" type="text" placeholder="Enter maximum seatings" required="" class="form-control" 
                                                                              value={wedSeats}
                                                                              onChange={(e) => setSeats(e.target.value)}/>
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              <input id="input description" type="text" placeholder="Enter wedding hall description" required="" class="form-control" 
                                                                              value={wedDes}
                                                                              onChange={(e) => setDes(e.target.value)}/>
                                                                        </div>
                                                                        <Form.Group controlId='image'>
                                                                            <div className="form-group bn">
                                                                                <Form.Label>Add Image</Form.Label>
                                                                                <Form.Control type='text' className="form-control" placeholder='Enter Document URL'
                                                                                    value={wedImg1}
                                                                                    onChange={(e) => setImg1(e.target.value)}
                                                                                ></Form.Control>
                                                                            </div>
                                                                            <Form.File id="file" label='Choose File' custom onChange={uploadFileHandler1}></Form.File>
                                                                            {uploading && <Loader />}
                                                                        </Form.Group>

                                                                        <Form.Group controlId='image'>
                                                                            <div className="form-group bn">
                                                                                <Form.Label>Add Image</Form.Label>
                                                                                <Form.Control type='text' className="form-control" placeholder='Enter Document URL'
                                                                                    value={wedImg2}
                                                                                    onChange={(e) => setImg2(e.target.value)}
                                                                                ></Form.Control>
                                                                            </div>
                                                                            <Form.File id="file" label='Choose File' custom onChange={uploadFileHandler2}></Form.File>
                                                                            {uploading && <Loader />}
                                                                        </Form.Group>

                                                                        <Form.Group controlId='image'>
                                                                            <div className="form-group bn">
                                                                                <Form.Label>Add Image</Form.Label>
                                                                                <Form.Control type='text' className="form-control" placeholder='Enter Document URL'
                                                                                    value={wedImg3}
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
                                   
                             
                        
                  
            </>
      )
}

export default WeddingUpdateScreen