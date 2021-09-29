import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listBookings } from '../../actions/bookingActions'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Container } from 'react-bootstrap'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import logo from '../bookingReportScreen/riverfront.png'
import '../bookingReportScreen/report.css'
import { Tag, Divider } from 'antd';

const BookinReportScreen = () => {

      const dispatch = useDispatch()
      let count = 1;
      let tot = 0;
      const listAllBookings = useSelector((state) => state.listAllBookings)
      const { loading, error, bookings } = listAllBookings

      useEffect(() => {
            dispatch((listBookings()))
      }, [dispatch])

      const pdfExportComponent = useRef(null);

      const handleExportWithComponent = (event) => {
            pdfExportComponent.current.save();
      }


      return (
            <>
                  {
                        loading ? (
                              <Loader />
                        ) : error ? (
                              <Message variant='danger'>{error}</Message>
                        ) : (
                              <>

                                    <Container style={{ alignItems: 'center' }} >
                                          <tbody>
                                                <PDFExport ref={pdfExportComponent} paperSize="A3">
                                                      <img src={logo} className='smallimg'></img>

                                                      <hr className='df'></hr>
                                                      <center>  <h1 style={{ alignItems: 'center' }}>R O O M   B O O K I N G S</h1></center>
                                                      <br />
                                                      <tr>
                                                            <th>NO</th>
                                                            <th style={{ paddingLeft: '10px' }}>Room Name</th>
                                                            <th style={{ paddingLeft: '10px' }}>From Date</th>
                                                            <th style={{ paddingLeft: '10px' }}>To Date</th>
                                                            <th style={{ paddingLeft: '10px' }}>Total Days</th>
                                                            <th style={{ paddingLeft: '10px' }}>Charge</th>
                                                      </tr>
                                                      {bookings.map((book) => (
                                                            <tr key={book._id} >

                                                                  {tot = count++}
                                                                  <td style={{ paddingLeft: '10px' }}>{book.rooms}</td>
                                                                  <td style={{ paddingLeft: '10px' }}>{book.fromdate}</td>
                                                                  <td style={{ paddingLeft: '10px' }}>{book.todate}</td>
                                                                  <center>  <td style={{ paddingLeft: '10px' }}>{book.totalDays}</td></center>
                                                                  <td style={{ paddingLeft: '10px' }}>{book.totalAmount}</td>
                                                                  <td>
                                                                        <p><b>Status</b>: {book.status === 'booked' ? (<Tag color="green">Confirmed</Tag>) : (<Tag color="red">Cancelled</Tag>)}</p>

                                                                  </td>
                                                            </tr>


                                                      ))}
                                                      <br></br>
                                                      <h3>Total Number Of Rooms Booked: {tot}</h3>
                                                </PDFExport>
                                          </tbody>
                                    </Container>
                              </>
                        )
                  }
            </>
      )
}

export default BookinReportScreen
