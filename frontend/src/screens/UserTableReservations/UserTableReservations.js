import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from "sweetalert2";
import { Tag, Divider } from 'antd';

const user = JSON.parse(localStorage.getItem('userInfo'))

const UserTableReservations = () => {

    const [myReservations, setMyReservations] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(async () => {
        try {
            setLoading(true)
            const data = await (
                await axios.post('/api/tableBooking/tableReservations', {
                    userid: JSON.parse(localStorage.getItem('userInfo'))._id,
                })
            ).data
            setMyReservations(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }, [])

    async function cancelReservation(bookingid, restaurantid) {

        try {
            setLoading(true)
            const result = await (await axios.post('/api/tableBooking/cancelReservation', { bookingid })).data
            setLoading(false)
            Swal.fire('Congrats', 'Your Table Reservation has cancelled', 'success').then(result => {
                window.location.href = '/profile'
            })
        } catch (error) {
            Swal.fire('Oops', 'Something went wrong', 'error').then(result => {
                window.location.href = '/profile'
            })
            setLoading(false)
        }
    }
    return (
        <>
            <div>
                {loading ? (
                    <h1>loading...</h1>
                ) : error ? (
                    <h1>Error...</h1>
                ) : (
                    myReservations.map(reserve => {
                        return <div className="row justify-content-center">
                            <div className="col-md-6 my-auto">
                                <div className='bs m-1 p-2 '>
                                    <h1><center>Table Reservations</center></h1>
                                    <br />
                                    <center>
                                        <p><b>ReservationId : {reserve._id}</b></p>
                                        <p><b>Restaurant Name : {reserve.restaurantName}</b></p>
                                        <p><b>Date : {reserve.date}</b></p>
                                        <p><b>Status</b> : {reserve.status === 'booked' ? (<Tag color="green">Confirmed</Tag>) : (<Tag color="red"><i class="fa fa-times" ></i>
                                            Cancelled</Tag>)}</p>
                                    </center>
                                    <div className='text-right'>
                                        {reserve.status === 'booked' && (<button className='btn btn-outline-danger' style={{ borderRadius: '20px' }} onClick={() => cancelReservation(reserve._id, reserve.restaurantid)}>Cancel Booking</button>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                )}
            </div>
        </>
    )
}

export default UserTableReservations
