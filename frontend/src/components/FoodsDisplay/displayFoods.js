import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './foods.css'

const Food = ({ food }) => {
      return (
            <Card className='my-3 p-3 rounded'>
                  <Link to={`/food/${food._id}`}>
                        <Card.Img className='card-img' src={food.image} variant='top' />
                  </Link>

                  <Card.Body>
                        <Link to={`/food/${food._id}`}>
                              <Card.Title as='div' style={{ color: "#daa520" }}><strong>{food.name}</strong></Card.Title>
                        </Link>

                        <Card.Text as='h3' style={{fontSize:"18px"}}>
                              Rs.{food.price}
                        </Card.Text>
                  </Card.Body>
            </Card>
      )
}

export default Food
