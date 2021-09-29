import React, { useEffect } from 'react'
import { allWeddings } from '../../actions/weddingAction.js'
import { useDispatch, useSelector } from 'react-redux'
import WeddingDis from '../../components/WeddingImages/weddingDisplay.js'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { Row, Col } from 'react-bootstrap'
import WeddingCarouselContainer from '../../components/WeddingImages/weddingCorousel.js'
import WedSearch from '../../components/WeddingSearch/WeddingSearch.js'

const WeddingScreen = () => {

      const dispatch = useDispatch()

      const wedAll = useSelector((state) => state.wedAll)
      const { loading, error, weddings } = wedAll

      useEffect(() => {
            dispatch(allWeddings())
      }, [dispatch])


      return (
            <>
            <WeddingCarouselContainer/>
            <br></br>
                <h1 style={{ textAlign: "center" }}>Wedding Halls</h1>
                <center>
                <WedSearch/>
                </center>
                {
                        loading ? (<Loader />) : error ? (<Message variant='danger'>{error}</Message>
                        ) : (
                <Row className='ro'>
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