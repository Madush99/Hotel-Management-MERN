import React, { useEffect } from 'react'
import { allWeddings } from '../../actions/weddingAction.js'
import { useDispatch, useSelector } from 'react-redux'
import WeddingDis from '../../components/WeddingImages/weddingDisplay.js'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { Row, Col } from 'react-bootstrap'


const WeddingScreen = () => {

      const dispatch = useDispatch()

      const wedAll = useSelector((state) => state.wedAll)
      const { loading, error, weddings } = wedAll

      useEffect(() => {
            dispatch(allWeddings())
      }, [dispatch])


      return (
            <>
            
            <br></br>
                <h1 style={{ textAlign: "center" }}>Weddings</h1>
                {
                        loading ? (<Loader />) : error ? (<Message variant='danger'>{error}</Message>
                        ) : (
                <Row className='ro' style={{ backgroundColor: "#bbbbbb" }} >
                              {weddings.map((wedding) =>

                                    <Col key={wedding._id} sm={12} md={6} lg={4} xl={4}>
                                          <WeddingDis wedding={wedding} />
                                    </Col>
                                   
                                    
                              
                               )}
                  </Row>
                  )}
                 
            </>
      )
}

export default WeddingScreen