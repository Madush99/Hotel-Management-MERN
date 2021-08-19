import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { allRestaurants } from '../../actions/restaurantsActions'
import { REST_CREATE_RESET } from '../../constants/restaurentsConstants'




const RestaurantListScreen = () => {


    const dispatch = useDispatch()

    const restaurantsAll = useSelector((state) => state.restaurantsAll)
    const { loading, error, restaurants } = restaurantsAll




    useEffect(() => {
        dispatch(allRestaurants())
    }, [dispatch])


    return (
        <>
            
            {
                loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                    : (
                        <>
                        <Row className='align-items-center'>
                <Col>
                    <h1 style={{ textAlign: "center", marginTop:"20px" }}>Restaurants List</h1>
                </Col>
                </Row>
                            <Container>
                                <Table class="table">
                                    <thead class="table-light">
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Type</th>
                                            <th>PhoneNo</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                         {restaurants.map(restaurant => (
                                            <tr key={restaurant._id}>
                                                <td>{restaurant._id}</td>
                                                <td>{restaurant.name}</td>
                                                <td>{restaurant.type}</td>
                                                <td>{restaurant.phoneNo}</td>
                                                <td>{restaurant.email}</td>

                                            </tr>
                                            ))}
                                    </tbody>
                                </Table>  
                            </Container>

                        </>
                    )}
        </>
    )
}


export default RestaurantListScreen
