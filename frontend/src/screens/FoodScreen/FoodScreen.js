import React from 'react'  
import { Container, Row, Col } from 'react-bootstrap'


const FoodScreen = ({food}) => {
    return (
        <>
            <h1>Food Products</h1>
            <Row>
                {food.map(food => (
                    <Col sm ={12} md={6} lg={4} xl={3}>
                        <h3>{food.name}</h3>
                    </Col>
                )) }
            </Row>
        </>
    )

    }

    export default FoodScreen
