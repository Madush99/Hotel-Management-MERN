import React from 'react'
import { Tabs } from "antd";
import { Button, Row, Col } from 'react-bootstrap'
import WeddingListScreen from '../weddingListScreen/weddingListScreen'
import SignupScreen from '../WeddingInsertScreen/weddingInsertScreen'
import ConInsertScreen from '../conferenceInsertScreen/conferenceInsert'
import ConferenceListScreen from '../conferenceListScreen/conferenceListScreen'
import { Container } from 'react-bootstrap';
import ConferenceReport from '../ConferenceReport/ConferenceReport.js'
import WeddingReport from '../WeddingReportScreen/WeddingReportScreen.js'

const { TabPane } = Tabs;


const WedEventMgtScreen = () => {
    return (
          <Container>
                <div className="ml-3">
                      <h2 className="text-center m-2" style={{ fontSize: "35px" }}>WEDDING & CONFERENCE MANAGEMENT</h2>

                      <Tabs defaultActiveKey="1">
                            <TabPane tab="WEDDING HALL LIST" key="1">
                                  <div className="row">
                                        <WeddingListScreen />

                                  </div>
                            </TabPane>
                            <TabPane tab="INSERT WEDDING HALL DETAILS" key="2">

                                  <div className="row">
                                        <SignupScreen />
                                  </div>

                            </TabPane>


                            <TabPane tab="CONFERENCE ROOM LIST" key="3">
                                  <div className="row">
                                        <ConferenceListScreen />

                                  </div>
                            </TabPane>

                            <TabPane tab="INSERT CONFERENCE ROOM DETAILS" key="4">
                                <div className="row">
                                        <ConInsertScreen />
                                  </div>

                            </TabPane>
                            
                            <TabPane tab="CONFERENCE ROOM REPORT" key="5">
                                  <div className="row">
                                        <ConferenceReport/>

                                  </div>
                            </TabPane>

                            <TabPane tab="WEDDING HALL REPORT" key="6">
                                  <div className="row">
                                        <WeddingReport/>

                                  </div>
                            </TabPane>
                            
                            
                      </Tabs>
                </div>
          </Container>
    )
}

export default WedEventMgtScreen