import React from 'react'
import { Tabs } from "antd";
import { Button, Row, Col } from 'react-bootstrap'
import RestaurentList from '../AllRestaurant/restaurantTable'
import AddRestaurant from '../RestaurantCreate/restCreate'
import TableBookings from '../TableBookingListScreen/tableBookinglistScreen'
import ReservationReport from '../RestaurantTableBookingReport/ReservationReport'
import { Container } from 'react-bootstrap';





const { TabPane } = Tabs;


const RestaurantgementScreen = () => {



      return (
            <Container>
                  <div className="ml-3">
                        <h2 className="text-center m-2" style={{ fontSize: "35px" }}>RESTAURANT MANAGEMENT</h2>
                        <br />

                        <br />
                        <Tabs defaultActiveKey="1">
                              <TabPane tab="RESTAURANT LIST" key="1">
                                    <div className="row">
                                          <RestaurentList />

                                    </div>
                              </TabPane>
                              <TabPane tab="ADD RESTAURANT" key="2">

                                    <div className="row">
                                          <AddRestaurant />
                                    </div>

                              </TabPane>

                              <TabPane tab="TABLE BOOKINGS" key="3">


                                    <div className='row'>

                                          <TableBookings />

                                    </div>

                              </TabPane>

                              <TabPane tab="RESERVATIONS" key="4">

                                    <div className="row">

                                          <ReservationReport />

                                    </div>

                              </TabPane>

                        </Tabs>
                  </div>
            </Container>
      )
}

export default RestaurantgementScreen
