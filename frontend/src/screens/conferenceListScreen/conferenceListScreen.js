import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { allConference, deleteConference } from '../../actions/conferenceAction'
import Swal from 'sweetalert2'





const ConferenceListScreen = () => {


    const dispatch = useDispatch()

    const conAll = useSelector((state) => state.conAll)
    const { loading, error, conference } = conAll


    const conDelete = useSelector((state) => state.conDelete)
    const { success: successDelete } = conDelete

    useEffect(() => {
        dispatch(allConference())
    }, [dispatch])


    const deleteHandler = (id) => {
        if (Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })) {
            dispatch(deleteConference(id))
        }
    }

    return (
        <>
        <center>
            <h1>Conference Room List</h1>
        </center>
            {
                loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                    <Container style={{marginTop:"-30px"}}>
                        <Table class="table">
                            <thead class="table-light">
                                <tr>
                                    <th>ID</th>
                                    <th>Conference Room</th>
                                    <th>maximum Seating</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Features</th>

                                </tr>
                            </thead>
                            <tbody>
                                {conference.map(conference => (
                                    <tr key={conference._id}>
                                        <td>{conference._id}</td>
                                        <td>{conference.conName}</td>
                                        <td>{conference.conSeats}</td>
                                        <td>{conference.conDes}</td>
                                        <td>{conference.conPrice}</td>
                                        <td>{conference.conFeatures}</td>
            
                                        <td>
                                            <LinkContainer to={`/conUpdate/${conference._id}`}>
                                                <Button variant='light' className='btn-sm'>
                                                    <i className='fas fa-edit'></i>
                                                </Button>
                                            </LinkContainer>
                                            <br/>
                                            <Button
                                                variant='danger'
                                                className='btn-sm'
                                                onClick={() => deleteHandler(conference._id)}
                                            >
                                                <i className='fas fa-trash'></i>
                                            </Button>
                                        </td>
                                    </tr>


                                ))}
                            </tbody>
                        </Table>
                    </Container>
                )
            }
        </>
    )
}


export default ConferenceListScreen
