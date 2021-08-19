import React from 'react'
import { Tabs } from "antd";
import CreateRoomScreen from '../CreateRoomScreen/createRoomScreen';

const { TabPane } = Tabs;

const RoomManagementScreen = () => {
      return (
            <div className="ml-3">
                  <h2 className="text-center m-2" style={{ fontSize: "35px" }}>ROOM MANAGEMENT</h2>
                  <Tabs defaultActiveKey="1">
                        <TabPane tab="ADD ROOM" key="1">
                              <div className="row">
                                    <CreateRoomScreen />
                              </div>
                        </TabPane>
                        <TabPane tab="Rooms" key="2">

                              <div className="row">

                              </div>

                        </TabPane>
                        <TabPane tab="Add Room" key="3">





                        </TabPane>
                        <TabPane tab="Users" key="4">



                        </TabPane>
                  </Tabs>
            </div>
      )
}

export default RoomManagementScreen
