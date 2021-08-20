import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './style.css'

const Rest = ({ restaurant }) => {
      return (
            <Card className='my-3 p-3 rounded'>
                  <Link to={`/restaurant/${restaurant._id}`}>
                        <Card.Img className='card-img' src={restaurant.images[0]} variant='top' />
                  </Link>

                  <Card.Body>
                        <Link to={`/restaurant/${restaurant._id}`}>
                              <Card.Title as='div' style={{ color: "#daa520" }}><strong>{restaurant.name}</strong></Card.Title>
                        </Link>
                  </Card.Body>
            </Card>
      )
}

export default Rest
