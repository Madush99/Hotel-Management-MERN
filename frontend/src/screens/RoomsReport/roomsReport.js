import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listRooms } from '../../actions/roomAction'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import logo from './riverfront.png'

import { Container } from 'react-bootstrap'
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

const RoomsReport = () => {

      const dispatch = useDispatch()

      let count = 1;
      let tot = 0;
      const listAllRooms = useSelector((state) => state.listAllRooms)
      const { loading, error, rooms } = listAllRooms

      useEffect(() => {
            dispatch(listRooms())
      }, [dispatch])
      const pdfExportComponent = useRef(null);

      const handleExportWithComponent = (event) => {
            pdfExportComponent.current.save();
      }

      return (
            <div>
                  {
                        loading ? (
                              <Loader />
                        ) : error ? (
                              <Message variant='danger'>{error}</Message>
                        ) : (
                              <>
                                    <Container style={{ alignItems: 'center' }} >



                                          <img src={logo} className='smallimg'></img>

                                          <hr className='df'></hr>
                                          <center> <h1>R O O M   B O O K I N G S</h1></center>
                                          <br />
                                          <tr>
                                                <th style={{ paddingLeft: '10px' }}>NO </th>
                                                <th style={{ paddingLeft: '10px' }}>ID</th>
                                                <th style={{ paddingLeft: '10px' }}>ROOM NAME</th>
                                                <th style={{ paddingLeft: '10px' }}>MAX GUESTS</th>
                                                <th style={{ paddingLeft: '10px' }}>RENT PER DAY</th>
                                                <th style={{ paddingLeft: '10px' }}>TYPE</th>
                                          </tr>


                                          {rooms.map((rooms) => (
                                                <tr key={rooms._id}>
                                                      <td style={{ paddingLeft: '10px' }}>{tot = count++}</td>
                                                      <td style={{ paddingLeft: '10px' }}>{rooms._id}</td>
                                                      <td style={{ paddingLeft: '10px' }}>{rooms.name}</td>
                                                      <center>  <td style={{ paddingLeft: '10px' }}>{rooms.maxcount}</td></center>
                                                      <td style={{ paddingLeft: '10px' }}>LKR {rooms.rentperday}</td>
                                                      <td style={{ paddingLeft: '10px' }}>{rooms.type}</td>

                                                </tr>
                                          ))}
                                          <br />
                                          <p><b>Total Number of Rooms: {tot}</b></p>

                                    </Container>

                              </>
                        )
                  }
            </div>
      )
}

export default RoomsReport
