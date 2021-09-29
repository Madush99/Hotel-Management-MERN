import { React, useRef } from 'react'
import { Tabs } from "antd";
import { Button, Row, Col } from 'react-bootstrap'
import CreateRoomScreen from '../CreateRoomScreen/createRoomScreen';
import RoomsListScreen from '../RoomsListScreen/roomsListScreen';
import { Container } from 'react-bootstrap';
import BookingListScreen from '../BookingListScreen/bookingListScreen';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import BookinReportScreen from '../bookingReportScreen/bookinReportScreen';
import RoomsReport from '../RoomsReport/roomsReport';

const { TabPane } = Tabs;

const RoomManagementScreen = () => {

      const pdfExportComponent = useRef(null);

      const handleExportWithComponent = (event) => {
            pdfExportComponent.current.save();
      }

      return (

            <Container>

                  <div className="ml-3">
                        <h2 className="text-center m-2" style={{ fontSize: "35px" }}>ROOM MANAGEMENT</h2>

                        <Tabs defaultActiveKey="1">
                              <TabPane tab="ROOM LIST" key="1">
                                    <div className="row">
                                          <Col className='text-right'>
                                                <Button primary={true} onClick={handleExportWithComponent}>Generate Report PDF</Button>
                                          </Col>
                                          <RoomsListScreen />
                                          <PDFExport ref={pdfExportComponent} paperSize="A4">
                                                <RoomsReport />
                                          </PDFExport>
                                    </div>
                              </TabPane>
                              <TabPane tab="ADD ROOM" key="2">

                                    <div className="row">
                                          <CreateRoomScreen />
                                    </div>

                              </TabPane>
                              <TabPane tab="BOOKINGS" key="3">

                                    <div className="row">
                                          <Col className='text-right'>
                                                <Button primary={true} onClick={handleExportWithComponent}>Generate Report PDF</Button>
                                          </Col>
                                          <BookingListScreen />
                                          <PDFExport ref={pdfExportComponent} paperSize="A3">
                                                <BookinReportScreen />
                                          </PDFExport>

                                    </div>

                              </TabPane>

                        </Tabs>
                  </div>
            </Container >
      )
}

export default RoomManagementScreen
