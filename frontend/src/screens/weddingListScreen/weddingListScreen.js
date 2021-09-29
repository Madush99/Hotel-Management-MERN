import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { allWeddings, deletewedding } from '../../actions/weddingAction'
import Swal from 'sweetalert2'





const WeddingListScreen = () => {


    const dispatch = useDispatch()

    const wedAll = useSelector((state) => state.wedAll)
    const { loading, error, weddings } = wedAll


    const wedDelete = useSelector((state) => state.wedDelete)
    const { success: successDelete } = wedDelete

    useEffect(() => {
        dispatch(allWeddings())
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
            dispatch(deletewedding(id))
        }
    }

    return (
        <>
            <center>
            <h1>Wedding Hall List</h1>
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
                                    <th>Wedding Hall</th>
                                    <th>maximum Seating</th>
                                    <th>Hall Description</th>

                                </tr>
                            </thead>
                            <tbody>
                                {weddings.map(wedding => (
                                    <tr key={wedding._id}>
                                        <td>{wedding._id}</td>
                                        <td>{wedding.wedHallName}</td>
                                        <td>{wedding.wedSeats}</td>
                                        <td>{wedding.wedDes}</td>
            
                                        <td>
                                            <LinkContainer to={`/wedUpdate/${wedding._id}`}>
                                                <Button variant='light' className='btn-sm'>
                                                    <i className='fas fa-edit'></i>
                                                </Button>
                                            </LinkContainer>
                                            <br/>
                                            <Button
                                                variant='danger'
                                                className='btn-sm'
                                                onClick={() => deleteHandler(wedding._id)}
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


export default WeddingListScreen
