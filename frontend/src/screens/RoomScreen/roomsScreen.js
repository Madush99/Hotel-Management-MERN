import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { allRooms } from '../../actions/roomAction.js'
import '../RoomScreen/rooms.css'
import moment from "moment";
import { DatePicker, Space } from "antd";
import 'antd/dist/antd.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const { RangePicker } = DatePicker;

const RoomsScreen = () => {

      const [fromdate, setfromdate] = useState('');
      const [todate, settodate] = useState('')


      const dispatch = useDispatch()

      const roomsAll = useSelector((state) => state.roomsAll)
      const { loading, error, rooms } = roomsAll

      useEffect(() => {
            dispatch(allRooms())
      }, [dispatch])


      function filterByDate(dates) {
            setfromdate(moment(dates[0]).format('DD-MM-YY'))
            settodate(moment(dates[1]).format('DD-MM-YY'))
      }

      return (
            <>
                  <div className="container">
                        <div className="row bs p-3 m-5 dark" data-aos="fade-up"
                              data-aos-anchor-placement="center-bottom">
                              <div className="col-md-4">
                                    <RangePicker style={{ height: "38px" }} onChange={filterByDate} format='DD-MM-YYYY' className='m-2' />
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

                  <div className="row justify-content-center mt-5"  >
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

                                                      <div style={{ float: 'right' }} className='vb'>

                                                            <LinkContainer to={`/roombook/${room._id}/${fromdate}/${todate}`}>
                                                                  <button className='btn btn-outline-warning'>Book Now</button>
                                                            </LinkContainer>


                                                      </div>
                                                      <div style={{ float: 'right' }} className='vb'>

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


            </>
      )
}

export default RoomsScreen
