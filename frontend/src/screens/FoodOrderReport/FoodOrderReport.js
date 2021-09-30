import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Button, Form, Row, Col, Container } from 'react-bootstrap'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import logo from './riverfront.png'
import { listOrders } from '../../actions/orderAction'
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';



const FoodOrderReport = () => {

    const dispatch = useDispatch()

    let count = 1;
    let tot = 0;

    const orderList = useSelector(state => state.orderList)
    const { loading, error, orders } = orderList

    useEffect(() => {
        dispatch(listOrders())
    }, [dispatch])

    const pdfExportComponent = useRef(null);

    const handleExportWithComponent = (event) => {
        pdfExportComponent.current.save();
    }

    return (


        <div>
            <Row className='align-items-center'>
                <Col className='text-right'>
                    <Button className='my-3' onClick={handleExportWithComponent} >
                        <i className='fas fa-plus'>  Generate Report</i>
                    </Button>
                </Col>
            </Row>

            {
                loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                    <PDFExport ref={pdfExportComponent} paperSize="A3" margin='100'>
                        <div>
                        <Container className='justify-content-center' style={{ width: '50%' }}>
                            <img style={{ width: '50px' }} src={logo} className='smallimg'></img>
                        </Container>
                        <Container style={{ alignItems: 'center' }} >

                            <center> <h1>---ORDERS REPORT---</h1></center>
                            <br />
                            <center>
                            <tr >
                                <th style={{ paddingLeft: '10px' }}>NO </th>
                                <th style={{ paddingLeft: '10px' }}>ID</th>
                                <th style={{ paddingLeft: '10px' }}>USER</th>
                                <th style={{ paddingLeft: '10px' }}>DATE</th>
                                <th style={{ paddingLeft: '10px' }}>TOTAL PRICE</th>
                                <th style={{ paddingLeft: '10px' }}>PAID</th>
                            </tr>


                            {orders.map((orders) => (
                                <tr key={orders._id}>
                                    <td style={{ paddingLeft: '10px' }}>{tot = count++}</td>
                                    <td style={{ paddingLeft: '10px' }}>{orders._id}</td>
                                    <td style={{ paddingLeft: '10px' }}>{orders.user && orders.user.name}</td>
                                    <td style={{ paddingLeft: '10px' }}>{orders.createdAt.substring(0, 10)}</td>
                                    <td style={{ paddingLeft: '10px' }}>Rs.{orders.totalPrice}</td>
                                    <td style={{ paddingLeft: '10px' }}>{orders.isPaid ? (orders.paidAt.substring(0, 10)) : (<i className='fas fa-times' style={{ color: 'red' }}></i>)}</td>

                                </tr>
                                
                            ))}
                            </center>
                            <br />
                            <center><p><b>Total Number of Orders: {tot}</b></p></center>

                        </Container>
                        </div>
                    </PDFExport>
                )
            }
        </div>

    )
}

export default FoodOrderReport
