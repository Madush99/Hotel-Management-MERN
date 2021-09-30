import React, { useEffect, useRef } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Form, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../components/FormContainer'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { allConference } from '../../actions/conferenceAction.js'
import logo from './riverfront.png'
import './conferencereport.css'
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

const ConferenceReport = (history) => {
    const dispatch = useDispatch()

    let count = 1
    let tot = 0

    const conAll = useSelector((state) => state.conAll)
      const { loading, error, conference } = conAll






    useEffect(() => {
        dispatch(allConference())
    }, [dispatch])

    const pdfExportComponent = useRef(null)

    const handleExportWithComponent = (event) => {
        pdfExportComponent.current.save()


    }

    return (
        <>
            <div>
                <Row className=''>

                    <Col className='gen'>
                        <Button className='rep' primary={true} onClick={handleExportWithComponent}>Generate Report</Button>
                    </Col>
                </Row>
            </div>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                : (
                    <PDFExport ref={pdfExportComponent} paperSize="A3" margin='100'>
                        <div style={{ background: '#1b1b1b' }}>
                            <Container className='tb' style={{ boxSizing: 'border-box' }}>

                                <Container className='justify-content-center' style={{ width: '50%' }}>
                                    <img style={{ width: '50px' }} src={logo} className='smallimg'></img>
                                </Container>

                                <p className='pt mt-4' ><b>~~~~~CONFERENCE ROOM REPORT~~~~~</b></p>
                                <br /><center>
                                    <tr className='tpp'>
                                        <th style={{ paddingLeft: '20px' }}>NO </th>

                                        <th style={{ paddingLeft: '20px' }}>CONFERENCE ROOM NAME</th>
                                        <th style={{ paddingLeft: '20px' }}>SEATING CAPACITY</th>
                                        <th style={{ paddingLeft: '20px' }}>DESCRIPTION</th>
                                        <th style={{ paddingLeft: '20px' }}>PRICE</th>
                                        <th style={{ paddingLeft: '20px' }}>FEATURES</th>
                                    </tr>


                                    {conference.map((conference) => (

                                        <tr className='tmm' key={conference._id} >
                                            <td style={{ paddingLeft: '10px' }}>{tot = count++}</td>

                                            <td style={{ paddingLeft: '10px' }}>{conference.conName}</td>
                                            <td style={{ paddingLeft: '10px' }}>{conference.conSeats}</td>
                                            <td style={{ paddingLeft: '10px' }}>{conference.conDes}</td>
                                            <td style={{ paddingLeft: '10px' }}>{conference.conPrice}</td>
                                            <td style={{ paddingLeft: '10px' }}>{conference.conFeatures}</td>
                    
                                        </tr>

                                    ))}
                                </center>
                                <br />
            



                            </Container>
                        </div>
                    </PDFExport>
                )}


        </>
    )
}


export default ConferenceReport