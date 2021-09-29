import React, { useEffect } from 'react'
import Carousel from '../../components/RestaurantImages/restaurantsCarousal'
import {allRestaurants, filterRestaurants} from '../../actions/restaurantsActions'
import Search from '../../components/Search/Search'
import { useDispatch, useSelector } from 'react-redux'
import Rest from '../../components/RestaurantImages/resturantsDisplay'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { Row, Col } from 'react-bootstrap'
import './style.css'
import Aos from 'aos'


const RestaurantScreen = () => {

      

      const dispatch = useDispatch()
    

      const restaurantsAll = useSelector((state) => state.restaurantsAll)
      const { loading, error, restaurants } = restaurantsAll

      useEffect(() => {
            dispatch(allRestaurants())
      }, [dispatch])


      return (
            <>
            <Carousel />
            <Search />
            <br></br>
                <h1 style={{ textAlign: "center" }}>RESTAURANTS & Bars</h1>
                {
                        loading ? (<Loader />) : error ? (<Message variant='danger'>{error}</Message>
                        ) : (
                              <Row className='ro' style={{ backgroundColor: "#eaeaf7" }} >
                              {restaurants.map((restaurant) =>

                                    <Col key={restaurant._id} sm={12} md={6} lg={4} xl={4}>
                                          <Rest restaurant={restaurant} />
                                    </Col>
                                   
                                    
                              
                               )}
                  </Row>
                  )}
                 
            </>
      )
}

export default RestaurantScreen