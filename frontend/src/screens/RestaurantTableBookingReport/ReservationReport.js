import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Form,Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../components/FormContainer'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { listBookings } from '../../actions/tableBookinAction'



const ReservationReport = (history) => {
    const dispatch = useDispatch()

    const tablebookingList = useSelector(state => state.tablebookingList)
    const { loading, error, tablebookings } = tablebookingList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listBookings())
        } else {
            history.push('/login')
        }
    }, [dispatch, history, userInfo])

    return (
        <>
            <h1 style={{marginTop:"50px"}}><center>Table Reservation Report</center></h1>
           
                <Container style={{marginTop:"-50px"}} >
                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                    : (
                       <Container style={{marginLeft:"150px", marginRight:"300px"}}>
                             {tablebookings.map((bookings)=>{
                                return <Row key={bookings._id}>
                                    <Col md={3}>
                                    <h1>Customer Name:</h1>
                                    <h1>Restaurant Name:</h1>
                                    <h1>Date:</h1>
                                    <h1>Phone No:</h1>
                                    <h1>Adults:</h1>
                                    <h1>Chidrens:</h1>
                                    <h1>Reserve Time:</h1>
                                    </Col>

                                    <Col md={8} style={{marginLeft:"-80px"}} >
                                    <h1>{bookings.userid}</h1>
                                    <h1>{bookings.restaurantid}</h1>
                                    <h1>{bookings.date}</h1>
                                    <h1>{bookings.phoneNo}</h1>
                                    <h1>{bookings.adults}</h1>
                                    <h1>{bookings.childrens}</h1>
                                    <h1>{bookings.time}</h1>
                                    <br />
                                    </Col>
                                   
                                    
                                </Row>
                             })}
                                
                       </Container>
                    )}
            </Container>
           
        </>
    )
}


export default ReservationReport