import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { listBookings } from '../../actions/tableBookinAction'
import { Tag, Divider } from 'antd';

const TbookingsListScreen = ({ history }) => {
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
            <h1>Table Bookings</h1>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                : (
                    <Table striped bordered hover responsive className='table-sm'>
                        <thead>
                            <tr>
                                <th>BOOKING ID</th>
                                <th>USER NAME</th>
                                <th>RESTAURANT NAME</th>
                                <th>DATE</th>
                                <th>PHONE NO</th>
                                <th>ADULTS</th>
                                <th>CHILDRENS</th>
                                <th>TIME</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tablebookings.map(tbooking => (
                                <tr key={tbooking._id}>
                                    <td>{tbooking._id}</td>
                                    <td>{tbooking.userName}</td>
                                    <td>{tbooking.restaurantName}</td>
                                    <td>{tbooking.date}</td>
                                    <td>{tbooking.phoneNo}</td>
                                    <td>{tbooking.adults}</td>
                                    <td>{tbooking.childrens}</td>
                                    <td>{tbooking.time}</td>
                                    <td>{tbooking.status === 'booked' ? (<Tag color='green'>Confirmed</Tag>) : (<Tag color='red'><i class="fa fa-times" aria-hidden="true"></i>
                                        Cancelled</Tag>)}</td>
                                    {/* <td>
                                        <LinkContainer to=''>
                                            <Button variant='light' className='btn-sm'>
                                                <i className='fas fa-edit'></i>
                                            </Button>
                                        </LinkContainer>
                                        <Button variant='danger' className='btn-sm'>
                                          
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </td> */}
                                </tr>


                            ))}
                        </tbody>
                    </Table>
                )
            }
        </>
    )
}

export default TbookingsListScreen
