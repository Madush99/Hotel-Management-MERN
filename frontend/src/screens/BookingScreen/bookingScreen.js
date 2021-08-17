import React from 'react'



import moment from 'moment'
import Aos from 'aos'
import 'aos/dist/aos.css'
Aos.init()
Aos.refresh()

const BookingScreen = () => {
      return (
            <div className='m-5'>
                  <div className="row p-3 mb-5 bs" data-aos='flip-right' duration='2000'>

                        <div className="col-md-6 my-auto">

                              <div>
                                    <h1>room Name</h1>
                                    {/* <img src={room.imageurls[0]} style={{ height: '400px' }} /> */}
                              </div>

                        </div>
                        <div className="col-md-6 text-right">
                              <div>
                                    <h1><b>Booking Details</b></h1>
                                    <hr />

                                    <p><b>Name</b> : #</p>
                                    <p><b>From Date</b> : #</p>
                                    <p><b>To Date</b> : #</p>
                                    <p><b>Max Count </b>:#</p>
                              </div>

                              <div className='mt-5'>
                                    <h1><b>Amount</b></h1>
                                    <hr />
                                    <p>Total Days : <b>#</b></p>
                                    <p>Rent Per Day : <b>#</b></p>
                                    <h1><b>Total Amount : # /-</b></h1>
                                    {/* 
                                    <StripeCheckout
                                          amount={totalAmount * 100}
                                          shippingAddress
                                          token={tokenHander}
                                          stripeKey='pk_test_51IYnC0SIR2AbPxU0TMStZwFUoaDZle9yXVygpVIzg36LdpO8aSG8B9j2C0AikiQw2YyCI8n4faFYQI5uG3Nk5EGQ00lCfjXYvZ'
                                          currency='INR'
                                    > */}


                                    <button className='btn btn-primary'>Pay Now</button>

                                    {/* </StripeCheckout> */}
                              </div>



                        </div>

                  </div>
            </div >
      )
}

export default BookingScreen
