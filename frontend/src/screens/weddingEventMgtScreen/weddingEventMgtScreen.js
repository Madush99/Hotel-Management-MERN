import React from 'react'
import { Tabs } from "antd";
import { Button, Row, Col } from 'react-bootstrap'
import WeddingList from '../weddingListScreen/weddingListScreen'
import SignupScreen from '../WeddingInsertScreen/weddingInsertScreen'
import ConInsertScreen from '../conferenceInsertScreen/conferenceInsert'
import { Container } from 'react-bootstrap';

const { TabPane } = Tabs;


const WedEventMgtScreen = () => {
    return (
          <Container>
                <div className="ml-3">
                      <h2 className="text-center m-2" style={{ fontSize: "35px" }}>WEDDING & CONFERENCE MANAGEMENT</h2>
                      <Row className='align-items-center'>
                              <Col className='text-right'>
                                    <Button className='my-3'>
                                          <i className='fas fa-plus'>  Generate Report</i>
                                    </Button>
                              </Col>
                        </Row>
                      <Tabs defaultActiveKey="1">
                            <TabPane tab="WEDDING LIST" key="1">
                                  <div className="row">
                                        <WeddingList />

                                  </div>
                            </TabPane>
                            <TabPane tab="INSERT WEDDING HALL DETAILS" key="2">

                                  <div className="row">
                                        <SignupScreen />
                                  </div>

                            </TabPane>
                            <TabPane tab="INSERT CONFERENCE ROOM DETAILS" key="3">
                                <div className="row">
                                        <ConInsertScreen />
                                  </div>

                            </TabPane>
                            <TabPane tab="Users" key="4">



                            </TabPane>
                      </Tabs>
                </div>
          </Container>
    )
}

export default WedEventMgtScreen