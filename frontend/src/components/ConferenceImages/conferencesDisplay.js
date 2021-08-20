import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const ConferenceDis = ({ conference }) => {
      return (
            <Card className='my-3 p-3 rounded' border="info">
                  <Link to={`/conference/${conference._id}`}>
                        <Card.Img className='card-img' src={conference.conImage} variant='top' />
                  </Link>
                  <center>
                  <Card.Body>
                        <Link to={`/conference/${conference._id}`}>
                            <Card.Title as='div'><h1>{conference.conName}</h1></Card.Title>
                            <Link to={`/conference/${conference._id}`}>
                             <Card.Title as='div'><h6>Maximum Capacity: {conference.conSeats} Seats</h6></Card.Title>
                        </Link>
                        <Link to={`/conference/${conference._id}`}>
                             <Card.Title as='div'><h6>Price: RS.{conference.conPrice}</h6></Card.Title>
                        </Link>
                        </Link>
                  </Card.Body>
                  </center>
            </Card>
      )
}

export default ConferenceDis