import React from 'react'
import { Tabs } from "antd";
import RestaurentList from '../AllRestaurant/restaurantTable'
import AddRestaurant from '../RestaurantCreate/restCreate'
import { Container } from 'react-bootstrap';

const { TabPane } = Tabs;


const RestaurantgementScreen = () => {
    return (
          <Container>
                <div className="ml-3">
                      <h2 className="text-center m-2" style={{ fontSize: "35px" }}>RESTAURANT MANAGEMENT</h2>
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
                            <TabPane tab="Add Room" key="3">





                            </TabPane>
                            <TabPane tab="Users" key="4">



                            </TabPane>
                      </Tabs>
                </div>
          </Container>
    )
}

export default RestaurantgementScreen
