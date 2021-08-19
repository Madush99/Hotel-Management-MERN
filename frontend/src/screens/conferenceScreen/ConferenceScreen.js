import React, { useEffect } from 'react'
import { allConference } from '../../actions/conferenceAction.js'
import { useDispatch, useSelector } from 'react-redux'
import ConferenceDis from '../../components/ConferenceImages/conferencesDisplay.js'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { Row, Col } from 'react-bootstrap'


const ConferenceScreen = () => {

      const dispatch = useDispatch()

      const conAll = useSelector((state) => state.conAll)
      const { loading, error, conference } = conAll

      useEffect(() => {
            dispatch(allConference())
      }, [dispatch])


      return (
            <>
            
            <br></br>
                <h1 style={{ textAlign: "center" }}>Conference Rooms</h1>
                {
                        loading ? (<Loader />) : error ? (<Message variant='danger'>{error}</Message>
                        ) : (
                <Row className='ro' style={{ backgroundColor: "#bbbbbb" }} >
                              {conference.map((conference) =>

                                    <Col key={conference._id} sm={12} md={6} lg={4} xl={4}>
                                          <ConferenceDis conference={conference} />
                                    </Col> 
                              
                               )}
                  </Row>
                  )}
                 
            </>
      )
}

export default ConferenceScreen