import React, { useState, useEffect } from 'react'
import { Table, Form, Button, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { listMyOrders } from '../../actions/orderAction'


const UserFoodOrders = ({ history }) => {

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const myOrders = useSelector((state) => state.myOrders);
    const { loading: loadingOrders, error: errorOrders, orders } = myOrders;

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        } else {
            dispatch(listMyOrders())

        }
    }, [dispatch, history, userInfo])

    return (
        <>
            <div>
                <h1>My oders</h1>
                {loadingOrders ? <Loader /> : errorOrders ? <Message variant='danger'>
                    {errorOrders}
                </Message> : (
                    <Table stripped bordered hover resposive className='table-sm'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>DATE</th>
                                <th>TOTAL</th>
                                <th>PAID</th>
                                <th>ORDER DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.createdAt.substring(0, 10)}</td>
                                    <td>{order.totalPrice}</td>
                                    <td>{order.isPaid ? order.paidAt.substring(0, 10) : (
                                        <i className='fas fa-times' style={{ color: 'red' }}>
                                        </i>
                                    )}</td>
                                    <td>
                                        <LinkContainer to={`/order/${order._id}`}>
                                            <Button className='btn-sm' variant='light'>Details</Button>
                                        </LinkContainer>
                                    </td>


                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}
            </div>
        </>
    )
}

export default UserFoodOrders
