import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './card.css'


const WeddingDis = ({ wedding }) => {
      return (
            <Card className='bs my-3 p-3 rounded'>
                  <Link to={`/wedding/${wedding._id}`}>
                        <Card.Img className='card-img' src={wedding.wedImages[0]} variant='top' />
                  </Link>

                  <Card.Body>
                        <center>
                        <Link to={`/restaurant/${wedding._id}`}>
                            <Card.Title as='div'><h1>{wedding.wedHallName}</h1></Card.Title>
                            <Link to={`/restaurant/${wedding._id}`}>
                             <Card.Title as='div'><h6>Maximum Seating: {wedding.wedSeats} Seats</h6></Card.Title>
                        </Link>
                        </Link>
                        </center>
                  </Card.Body>
            </Card>
      )
}

export default WeddingDis