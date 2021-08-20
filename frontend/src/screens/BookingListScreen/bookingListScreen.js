import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listBookings } from '../../actions/bookingActions'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'

const BookingListScreen = () => {

      const dispatch = useDispatch()

      const listAllBookings = useSelector((state) => state.listAllBookings)
      const { loading, error, bookings } = listAllBookings

      useEffect(() => {
            dispatch((listBookings()))
      }, [dispatch])

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
                                                <th>NAME</th>
                                                <th>FROMDATE</th>
                                                <th>TODATE</th>
                                                <th>TOTALDAYS</th>
                                                <th>TOTALAMOUNT</th>
                                                <th>STATUS</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {bookings.map((book) => (
                                                <tr key={book._id}>
                                                      <td>{book.rooms}</td>
                                                      <td>{book.fromdate}</td>
                                                      <td>{book.todate}</td>
                                                      <td>{book.totalDays}</td>
                                                      <td>{book.totalAmount}</td>
                                                      <td>{book.status}</td>
                                                      <td>
                                                            <LinkContainer to='' >
                                                                  <Button variant='light' className='btn-sm'>
                                                                        <i className='fad fa-times' style={{ color: 'red' }}></i>
                                                                  </Button>
                                                            </LinkContainer>
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

export default BookingListScreen
