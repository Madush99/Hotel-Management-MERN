import React from 'react'
import { Tabs } from "antd";
import { Button, Row, Col } from 'react-bootstrap'
import AddFood from '../CreateFoodScreen/createFoodScreen'
import FoodList from '../FoodListScreen/foodListScreen'
import OrderList from '../OrderListScreen/orderListScreen'
import { Container } from 'react-bootstrap';

const { TabPane } = Tabs;

const FoodManagementScreen = () => {
      return (

            <Container>

                  <div className="ml-3">
                        <h2 className="text-center m-2" style={{ fontSize: "35px" }}>FOOD MANAGEMENT</h2>
                        <Row className='align-items-center'>
                              <Col className='text-right'>
                                    <Button className='my-3'>
                                          <i className='fas fa-plus'>  Generate Report</i>
                                    </Button>
                              </Col>
                        </Row>
                        <Tabs defaultActiveKey="1">
                              <TabPane tab="FOOD LIST" key="1">
                                    <div className="row">      
                                   <FoodList />

                                    </div>
                              </TabPane>
                              <TabPane tab="ADD FOOD" key="2">

                                    <div className="row">
                                    <AddFood />
                                    </div>

                              </TabPane>
                              <TabPane tab="Order List" key="3">


                              <OrderList />


                              </TabPane>
                              <TabPane tab="Users" key="4">



                              </TabPane>
                        </Tabs>
                  </div>
            </Container>
      )
}

export default FoodManagementScreen
