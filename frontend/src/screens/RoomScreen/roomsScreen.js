import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { allRooms } from '../../actions/roomAction.js'
import '../RoomScreen/rooms.css'
import { DatePicker, Space } from "antd";

const RoomsScreen = () => {

      const dispatch = useDispatch()

      const roomsAll = useSelector((state) => state.roomsAll)
      const { loading, error, rooms } = roomsAll

      useEffect(() => {
            dispatch(allRooms())
      }, [dispatch])

      return (
            <>
                  <div className="container">
                        <div className="row bs p-3 m-5">
                              <div className="col-md-4">
                                    <DatePicker style={{ height: "38px" }} format='DD-MM-YYYY' className='m-2' />
                              </div>

                              <div className="col-md-4">
                                    <input
                                          type="text"
                                          className="form-control i2 m-2"
                                          placeholder='Search Rooms'
                                    // value={searchkey}
                                    // onKeyUp={filterBySearch}
                                    // onChange={(e) => { setsearchkey(e.target.value) }}
                                    />
                              </div>
                              <div className="col-md-4">
                                    <select className="form-control m-2"  >

                                          <option value="all">All</option>
                                          <option value="delux">Delux</option>
                                          <option value="non-delux">Non Delux</option>

                                    </select>
                              </div>
                        </div>
                  </div>
                  <div className="container">
                        <div className="row justify-content-center mt-5">
                              {loading ? (
                                    <h1>loading....</h1>
                              ) : error ? (
                                    <h1>Error...</h1>
                              ) : (

                                    <div className="col-md-9 mt-2">
                                          {rooms.map((room) => (
                                                <div className='row bs' key={room._id}>
                                                      <div className='col-md-4'>
                                                            <img src={room.imageurls[0]} className='smallimg'></img>
                                                      </div>
                                                      <div className='col-md-7'>
                                                            <h1>{room.name}</h1>
                                                            <b>
                                                                  <p>Max Count: {room.maxcount}</p>
                                                                  <p>Phone Number: {room.phonenumber}</p>
                                                                  <p>Type: {room.type}</p>
                                                            </b>

                                                            <div style={{ float: 'right' }}>
                                                                  <LinkContainer to={`/roombook/${room._id}`}>
                                                                        <button className='btn btn-outline-warning'>Book Now</button>
                                                                  </LinkContainer>
                                                                  <LinkContainer to={`/room/${room._id}`}>
                                                                        <button className='btn btn-outline-warning'>View Details</button>
                                                                  </LinkContainer>
                                                            </div>
                                                      </div>
                                                </div>
                                          ))}

                                    </div>

                              )}
                        </div>
                  </div>

            </>
      )
}

export default RoomsScreen
