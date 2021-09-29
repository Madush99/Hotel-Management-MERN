import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { allRooms } from '../../actions/roomAction.js'
import axios from "axios";
import '../RoomScreen/rooms.css'
import moment from "moment";
import { DatePicker, Space } from "antd";
import 'antd/dist/antd.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import RoomsCarousel from '../../components/RoomsCorousel/roomsCarousel'
import Message from '../../components/Message'
import Loader from '../../components/Loader'


AOS.init();
const { RangePicker } = DatePicker;

const RoomsScreen = () => {

      const [hotels, sethotels] = useState([]);
      const [duplicatehotes, setduplicatehotes] = useState([]);
      const [fromdate, setfromdate] = useState('');
      const [todate, settodate] = useState('')
      const [loading, setloading] = useState(false);
      const [searchkey, setsearchkey] = useState('')
      const [type, settype] = useState('all')


      function filterByDate(dates) {
            setfromdate(moment(dates[0]).format('DD-MM-YYYY'))
            settodate(moment(dates[1]).format('DD-MM-YYYY'))

            var temp = []

            for (const room of duplicatehotes) {
                  var availability = false;
                  if (room.currentBookings.length > 0) {
                        for (const booking of room.currentBookings) {

                              if (room.currentBookings.length) {
                                    if (
                                          !moment(moment(dates[0]).format('DD-MM-YYYY')).isBetween(booking.fromdate, booking.todate) &&
                                          !moment(moment(dates[1]).format('DD-MM-YYYY')).isBetween(booking.fromdate, booking.todate)
                                    ) {
                                          if (
                                                moment(dates[0]).format('DD-MM-YYYY') !== booking.fromdate &&
                                                moment(dates[0]).format('DD-MM-YYYY') !== booking.todate &&
                                                moment(dates[1]).format('DD-MM-YYYY') !== booking.fromdate &&
                                                moment(dates[1]).format('DD-MM-YYYY') !== booking.todate
                                          ) {
                                                availability = true;
                                          }
                                    }
                              }


                        }
                        if (availability === true || room.currentBookings.length === 0) {
                              temp.push(room)
                        }
                        sethotels(temp)
                  }
            }
      }

      useEffect(async () => {
            try {
                  setloading(true);
                  const rooms = await (await axios.get("/api/rooms/allrooms")).data;
                  console.log(rooms);
                  sethotels(rooms);
                  setduplicatehotes(rooms)
                  setloading(false);
            } catch (error) {
                  console.log(error);
                  setloading(false);
            }
      }, []);

      function filterBySearch() {
            const dupdate = duplicatehotes.filter(rooms => rooms.name.toLowerCase().includes(searchkey))
            sethotels(dupdate)
      }

      function filterByType(e) {
            settype(e)
            if (e !== 'all') {
                  const dupdate = duplicatehotes.filter(room => room.type.toLowerCase().includes(e.toLowerCase()))
                  sethotels(dupdate)
            }
            else {
                  sethotels(duplicatehotes)
            }

      }


      return (
            <>
                  <RoomsCarousel />
                  <div className="row bs p-3 m-5 dark" data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom">
                        <div className="col-md-4">
                              <RangePicker style={{ height: "38px", width: "98%" }} onChange={filterByDate} format='DD-MM-YYYY' className='m-2' />
                        </div>

                        <div className="col-md-4">
                              <input
                                    type="text"
                                    className="form-control i2 m-2"
                                    placeholder='Search Rooms'
                                    value={searchkey}
                                    onKeyUp={filterBySearch}
                                    onChange={(e) => { setsearchkey(e.target.value) }}
                              />
                        </div>
                        <div className="col-md-4">
                              <select className="form-control m-2" value={type} onChange={(e) => { filterByType(e.target.value) }} >

                                    <option value="all">All</option>
                                    <option value="Non-Deluxe">Non Deluxe</option>
                                    <option value="deluxe">Deluxe</option>

                              </select>
                        </div>
                  </div>


                  <div className="row justify-content-center mt-5"  >
                        {loading ? (
                              <Loader />
                        ) : (

                              <div className="col-md-9 mt-2">
                                    {hotels.map((room) => (
                                          <div className='row bs' key={room._id}>
                                                <div className='col-md-4'>
                                                      <img src={room.imageUrls[0]} className='smallimg'></img>
                                                </div>
                                                <div className='col-md-7'>
                                                      <h1>{room.name}</h1>
                                                      <b>
                                                            <p>Max Count: {room.maxcount}</p>
                                                            <p></p>
                                                            <p>Type: {room.type}</p>
                                                      </b>

                                                      <div style={{ float: 'right' }} className='vb'>

                                                            {(fromdate && todate) && (<LinkContainer to={`/roombook/${room._id}/${fromdate}/${todate}`}>
                                                                  <button className='btn btn-outline-warning'>Book Now</button>
                                                            </LinkContainer>)}


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
