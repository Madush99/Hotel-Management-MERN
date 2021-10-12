import React from 'react'
import { Container } from 'react-bootstrap';
import { Tabs } from "antd";
import { Button, Row, Col } from 'react-bootstrap'
import UserRoomBookimgs from '../UserRoomBookings/userRoomBookimgs';
import UserTableReservations from '../UserTableReservations/UserTableReservations';
import UserFoodOrders from '../UserFoodOrders/UserFoodOrders';

const { TabPane } = Tabs;

const UserProfile = () => {
      const user = JSON.parse(localStorage.getItem('userInfo'))

      return (
            <>
                  <Container>

                        <div className="ml-3">
                              <h2 className="text-center m-2" style={{ fontSize: "35px" }}>User Profile</h2>
                              <Row className='align-items-center'>
                                    <Col className='text-right'>

                                    </Col>
                              </Row>
                              <Tabs defaultActiveKey="1">
                                    <TabPane tab="USER INFORMATION" key="1">
                                          <div className="row">

                                                <h1>Name : {user.name}</h1>
                                                <h1>Email : {user.email}</h1>
                                          </div>
                                    </TabPane>
                                    <TabPane tab="ROOM BOOKINGS" key="2">
                                          <div className="row">

                                                <UserRoomBookimgs />
                                          </div>
                                    </TabPane>
                                    <TabPane tab="RESTAURANT BOOKINGS" key="3">

                                          <div className="row">
                                                <UserTableReservations />
                                          </div>

                                    </TabPane>
                                    <TabPane tab="EVENT BOOKINGS" key="4">

                                          <div className="row">

                                          </div>

                                    </TabPane>
                                    <TabPane tab="FOOD ORDERS" key="5">

                                          <div className="row">
                                                <UserFoodOrders />
                                          </div>

                                    </TabPane>
                              </Tabs>
                        </div>
                  </Container >
            </>
      )
}

export default UserProfile