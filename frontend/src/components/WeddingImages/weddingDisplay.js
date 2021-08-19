import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const WeddingDis = ({ wedding }) => {
      return (
            <Card className='my-3 p-3 rounded' border="info">
                  <Link to={`/wedding/${wedding._id}`}>
                        <Card.Img className='card-img' src={wedding.wedImage} variant='top' />
                  </Link>

                  <Card.Body>
                        <Link to={`/restaurant/${wedding._id}`}>
                            <Card.Title as='div'><h3>{wedding.wedHallName}</h3></Card.Title>
                            <Link to={`/restaurant/${wedding._id}`}>
                             <Card.Title as='div'><h5>{wedding.wedSeats} Seats</h5></Card.Title>
                        </Link>
                        </Link>
                  </Card.Body>
            </Card>
      )
}

export default WeddingDis