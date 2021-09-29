import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listBookings } from '../../actions/bookingActions'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Container } from 'react-bootstrap'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import logo from './riverfront.png'
import '../bookingReportScreen/report.css'


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
                  <h1>Rooms List</h1>
                  {
                        loading ? (
                              <Loader />
                        ) : error ? (
                              <Message variant='danger'>{error}</Message>
                        ) : (
                              <>

                                    <Button primary={true} onClick={handleExportWithComponent} style={{ marginLeft: '1000px' }}>Generate PDF Report</Button>

                                    <Container style={{ paddingLeft: '400px' }} >

                                          <h1>Booked Rooms List</h1>
                                          <tbody>
                                                <PDFExport ref={pdfExportComponent} paperSize="A4">
                                                      <img src={logo} className='smallimg'></img>

                                                      <hr className='df'></hr>
                                                      {bookings.map((book) => (
                                                            <tr key={book._id} >
                                                                  {tot = count++}.
                                                                  <td>{book.rooms}</td>
                                                                  <td>{book.fromdate}</td>
                                                                  <td>{book.todate}</td>
                                                                  <td>{book.totalDays}</td>
                                                                  <td>{book.totalAmount}</td>

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
