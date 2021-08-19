import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listRooms } from '../../actions/roomAction'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'

const RoomsListScreen = ({ history }) => {

      const dispatch = useDispatch()

      const listAllRooms = useSelector((state) => state.listAllRooms)
      const { loading, error, rooms } = listAllRooms

      useEffect(() => {
            dispatch(listRooms())
      }, [dispatch])


      return (
            <>
                  <h1>Rooms</h1>
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
                                                <th>EMAIL</th>
                                                <th>ADMIN</th>
                                                <th></th>
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
                                                            <LinkContainer to=''>
                                                                  <Button variant='light' className='btn-sm'>
                                                                        <i className='fas fa-edit'></i>
                                                                  </Button>
                                                            </LinkContainer>
                                                            <Button
                                                                  variant='danger'
                                                                  className='btn-sm'
                                                            // onClick={() => deleteHandler(user._id)}
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
