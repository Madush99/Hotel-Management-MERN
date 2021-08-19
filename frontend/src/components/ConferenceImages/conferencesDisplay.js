import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const ConferenceDis = ({ conference }) => {
      return (
            <Card className='my-3 p-3 rounded' border="info">
                  <Link to={`/conference/${conference._id}`}>
                        <Card.Img className='card-img' src={conference.conImage} variant='top' />
                  </Link>

                  <Card.Body>
                        <Link to={`/conference/${conference._id}`}>
                            <Card.Title as='div'><h3>{conference.conName}</h3></Card.Title>
                            <Link to={`/conference/${conference._id}`}>
                             <Card.Title as='div'><h5>{conference.conSeats} Seats</h5></Card.Title>
                        </Link>
                        </Link>
                  </Card.Body>
            </Card>
      )
}

export default ConferenceDis