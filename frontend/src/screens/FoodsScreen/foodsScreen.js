import React, { useEffect } from 'react'
import Carousel from '../../components/FoodsDisplay/foodsCarosal'
import {allFoods} from '../../actions/foodsAction'
import { useDispatch, useSelector } from 'react-redux'
import Food from '../../components/FoodsDisplay/displayFoods'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { Row, Col } from 'react-bootstrap'
import './food.css'
import FoodSearch from '../../components/FoodSearch/FoodSearch'


const FoodScreen = () => {

      const dispatch = useDispatch()

      const foodsAll = useSelector((state) => state.foodsAll)
      const { loading, error, foods } = foodsAll

      useEffect(() => {
            dispatch(allFoods())
      }, [dispatch])


      return (
            <>
            <Carousel />
            <FoodSearch />
            <br></br>
                <h1 style={{ textAlign: "center" }}>MENU</h1>
                {
                        loading ? (<Loader />) : error ? (<Message variant='danger'>{error}</Message>
                        ) : (
                              <Row className='ro' style={{ backgroundColor: "#eaeaf7" }} >
                              {foods.map((food) =>

                                    <Col key={food._id} sm={12} md={6} lg={4} xl={4}>
                                          <Food food={food} />
                                    </Col>
                                   
                                    
                              
                               )}
                  </Row>
                  )}
                 
            </>
      )
}

export default FoodScreen