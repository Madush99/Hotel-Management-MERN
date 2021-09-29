import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listRooms, deleteRoom } from '../../actions/roomAction'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'

const RoomsListScreen = ({ history, match }) => {

      const dispatch = useDispatch()

      const listAllRooms = useSelector((state) => state.listAllRooms)
      const { loading, error, rooms } = listAllRooms

      const roomDelete = useSelector((state) => state.roomDelete)
      const { success: successDelete } = roomDelete

      useEffect(() => {
            dispatch(listRooms())
            // if (successDelete) {
            //       Swal.fire('Room Deleted, Successfuly', 'success').then(result => {
            //             window.location.href = '/roomManagement'
            //       })
            // }
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
                  dispatch(deleteRoom(id))
            }
      }

      return (
            <>
                  <h1>Rooms List</h1>
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
                                                <th>ROOM NAME</th>
                                                <th>MAX GUESTS</th>
                                                <th>RENT PER DAY</th>
                                                <th>TYPE</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {rooms.map((rooms) => (
                                                <tr key={rooms._id}>
                                                      <td>{rooms._id}</td>
                                                      <td>{rooms.name}</td>
                                                      <td>{rooms.maxcount}</td>
                                                      <td>RS.{rooms.rentperday}</td>
                                                      <td>{rooms.type}</td>
                                                      <td>
                                                            <LinkContainer to={`/update/${rooms._id}`} >
                                                                  <Button variant='light' className='btn-sm'>
                                                                        <i className='fas fa-edit'></i>
                                                                  </Button>
                                                            </LinkContainer>
                                                            <Button
                                                                  variant='danger'
                                                                  className='btn-sm'
                                                                  onClick={() => deleteHandler(rooms._id)}
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

export default RoomsListScreen
