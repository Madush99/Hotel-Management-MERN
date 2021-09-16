import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { allRestaurants, deleteRest } from '../../actions/restaurantsActions'
import { REST_CREATE_RESET } from '../../constants/restaurentsConstants'
import Swal from 'sweetalert2'




const RestaurantListScreen = () => {


    const dispatch = useDispatch()

    const restaurantsAll = useSelector((state) => state.restaurantsAll)
    const { loading, error, restaurants } = restaurantsAll


    const restDelete = useSelector((state) => state.restDelete)
    const { success: successDelete } = restDelete

    useEffect(() => {
        dispatch(allRestaurants())
    }, [dispatch, successDelete])


    const deleteHandler = (id) => {
        if (Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })) {
            dispatch(deleteRest(id))
        }
    }

    return (
        <>
            <h1>Restaurants</h1>
            {
                loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                    <Container style={{marginTop:"-30px"}}>
                        <Table class="table">
                            <thead class="table-light">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>PhoneNo</th>
                                    <th>Email</th>
                                    <th>Location</th>

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
                                        <td>{restaurant.location}</td>
                                        <td>
                                        <LinkContainer to={`/updateRestaurant/${restaurant._id}`} >
                                                                  <Button variant='light' className='btn-sm'>
                                                                        <i className='fas fa-edit'></i>
                                                                  </Button>
                                                            </LinkContainer>
                                            <Button
                                                variant='danger'
                                                className='btn-sm'
                                                onClick={() => deleteHandler(restaurant._id)}
                                            >
                                                <i className='fas fa-trash'></i>
                                            </Button>
                                        </td>
                                    </tr>


                                ))}
                            </tbody>
                        </Table>
                    </Container>
                )
            }
        </>
    )
}


export default RestaurantListScreen
