import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const ConferenceDis = ({ conference }) => {
      return (
            <Card className='bs my-3 p-3 rounded'>
                  <Link to={`/con/${conference._id}`}>
                        <Card.Img className='card-img' src={conference.conImages[0]} variant='top' />
                  </Link>
                  <center>
                  <Card.Body>
                        <Link to={`/con/${conference._id}`}>
                            <Card.Title as='div'><h1>{conference.conName}</h1></Card.Title>
                            <Link to={`/con/${conference._id}`}>
                             <Card.Title as='div'><h6>Maximum Capacity: {conference.conSeats} Seats</h6></Card.Title>
                        </Link>
                        <Link to={`/con/${conference._id}`}>
                             <Card.Title as='div'><h6>Price Per Hour: RS.{conference.conPrice}</h6></Card.Title>
                        </Link>
                        </Link>
                  </Card.Body>
                  </center>
            </Card>
      )
}

export default ConferenceDis