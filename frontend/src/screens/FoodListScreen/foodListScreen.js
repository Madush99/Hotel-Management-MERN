import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allFoods, deleteFood } from '../../actions/foodsAction'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'

const FoodListScreen = ({ history, match }) => {

      const dispatch = useDispatch()

      const foodsAll = useSelector((state) => state.foodsAll)
      const { loading, error, foods } = foodsAll

      const foodsDelete = useSelector((state) => state.foodsDelete)
      const { success: successDelete } = foodsDelete

      useEffect(() => {
            dispatch(allFoods())
            // if (successDelete) {
            //       Swal.fire('Room Deleted, Successfuly', 'success').then(result => {
            //             window.location.href = '/roomManagement'
            //       })
            // }
      }, [dispatch,successDelete])


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
                  dispatch(deleteFood(id))
            }
      }

      return (
            <>
                  <h1>Foods List</h1>
                  {
                        loading ? (
                              <Loader />
                        ) : error ? (
                              <Message variant='danger'>{error}</Message>
                        ) : (
                              <Table striped bordered hover responsive className='table-sm'>
                                    <thead>
                                          <tr>
                                                <th>ID</th>
                                                <th>NAME</th>
                                                <th>CATEGORY</th>
                                                <th>PRICE</th>
                                                <th>DESCRIPTION</th>
                                                <th></th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {foods.map((foods) => (
                                                <tr key={foods._id}>
                                                      <td>{foods._id}</td>
                                                      <td>{foods.name}</td>
                                                      <td>{foods.category}</td>
                                                      <td>RS.{foods.price}</td>
                                                      <td>{foods.description}</td>
                                                      
                                                      <td>
                                                            <LinkContainer to={`/foodUpdate/${foods._id}`} >
                                                                  <Button variant='light' className='btn-sm'>
                                                                        <i className='fas fa-edit'></i>
                                                                  </Button>
                                                            </LinkContainer>
                                                            <Button
                                                                  variant='danger'
                                                                  className='btn-sm'
                                                                  onClick={() => deleteHandler(foods._id)}
                                                            >
                                                                  <i className='fas fa-trash'></i>
                                                            </Button>
                                                      </td>
                                                </tr>
                                          ))}
                                    </tbody>
                              </Table>
                        )
                  }
            </>
      )
}

export default FoodListScreen
