import React from 'react'
import { Tabs } from "antd";
import CreateRoomScreen from '../CreateRoomScreen/createRoomScreen';
import RoomsListScreen from '../RoomsListScreen/roomsListScreen';
import { Container } from 'react-bootstrap';

const { TabPane } = Tabs;

const RoomManagementScreen = () => {
      return (
            <Container>
                  <div className="ml-3">
                        <h2 className="text-center m-2" style={{ fontSize: "35px" }}>ROOM MANAGEMENT</h2>
                        <Tabs defaultActiveKey="1">
                              <TabPane tab="ROOM LIST" key="1">
                                    <div className="row">
                                          <RoomsListScreen />

                                    </div>
                              </TabPane>
                              <TabPane tab="ADD ROOM" key="2">

                                    <div className="row">
                                          <CreateRoomScreen />
                                    </div>

                              </TabPane>
                              <TabPane tab="Add Room" key="3">





                              </TabPane>
                              <TabPane tab="Users" key="4">



                              </TabPane>
                        </Tabs>
                  </div>
            </Container>
      )
}

export default RoomManagementScreen
