import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listRooms } from '../../actions/roomAction'
import Message from '../../components/Message'
import Loader from '../../components/Loader'

const RoomsReport = () => {

      const dispatch = useDispatch()

      const listAllRooms = useSelector((state) => state.listAllRooms)
      const { loading, error, rooms } = listAllRooms

      useEffect(() => {
            dispatch(listRooms())
      }, [dispatch])


      return (
            <div>
                  {
                        loading ? (
                              <Loader />
                        ) : error ? (
                              <Message variant='danger'>{error}</Message>
                        ) : (
                              <>

                                    <tr>
                                          <th>ID</th>
                                          <th>ROOM NAME</th>
                                          <th>MAX COUNT</th>
                                          <th>RENT PER DAY</th>
                                          <th>TYPE</th>
                                    </tr>


                                    {rooms.map((rooms) => (
                                          <tr key={rooms._id}>
                                                <td>{rooms._id}</td>
                                                <td>{rooms.name}</td>
                                                <td>{rooms.maxcount}</td>
                                                <td>RS.{rooms.rentperday}</td>
                                                <td>{rooms.type}</td>

                                          </tr>
                                    ))}

                              </>
                        )
                  }
            </div>
      )
}

export default RoomsReport
