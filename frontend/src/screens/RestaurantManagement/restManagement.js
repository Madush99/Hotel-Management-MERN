import React, { useRef } from 'react'
import { Tabs } from "antd";
import { Button, Row, Col } from 'react-bootstrap'
import RestaurentList from '../AllRestaurant/restaurantTable'
import AddRestaurant from '../RestaurantCreate/restCreate'
import TableBookings from '../TableBookingListScreen/tableBookinglistScreen'
import ReservationReport from '../RestaurantTableBookingReport/ReservationReport'
import { Container } from 'react-bootstrap';
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";



const { TabPane } = Tabs;


const RestaurantgementScreen = () => {


      const pdfExportComponent = useRef(null)

      const handleExportWithComponent = (event) => {
            pdfExportComponent.current.save()


      }


      return (
            <Container>
                  <div className="ml-3">
                        <h2 className="text-center m-2" style={{ fontSize: "35px" }}>RESTAURANT MANAGEMENT</h2>
                        <br />
                        <Row className=''>

                              <Col className='text-left'>
                                    <form class="form-inline my-2 my-lg-0">
                                          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                          <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                                    </form>
                              </Col>

                              <Col className='text-right'>
                                    <Button primary={true} onClick={handleExportWithComponent}>Generate Report</Button>
                              </Col>
                        </Row>
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

                              <TabPane tab="TABLE BOOKINGS" key="3" onClick={handleExportWithComponent}>


                                    <div className='row'>

                                          <TableBookings />

                                    </div>

                              </TabPane>

                              <TabPane tab="RESERVATIONS" key="4">

                                    <div className="row">
                                          <PDFExport ref={pdfExportComponent} paperSize="A4">
                                                <ReservationReport />
                                          </PDFExport>
                                    </div>

                              </TabPane>

                        </Tabs>
                  </div>
            </Container>
      )
}

export default RestaurantgementScreen
