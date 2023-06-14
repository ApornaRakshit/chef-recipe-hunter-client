import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/images/salad.jpg'
import second from '../../../assets/images/pizza.jpg'
import third from '../../../assets/images/fried.jpg'
import forth from '../../../assets/images/fruits.jpg'
import fifth from '../../../assets/images/noodles.jpg'
import sixth from '../../../assets/images/chickenFried.jpg'

const RecipeSection = () => {
    return (
        <div>
            <h3 className='chef-title pt-5'> Recipe Name </h3>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={first}/>
                        <Card.Body>
                            <Card.Title>Vegetables</Card.Title>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={second}/>
                        <Card.Body>
                            <Card.Title>Pizza</Card.Title>
                          
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={third}/>
                        <Card.Body>
                            <Card.Title>Fried</Card.Title>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={forth}/>
                        <Card.Body>
                            <Card.Title>Fruits</Card.Title>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={fifth}/>
                        <Card.Body>
                            <Card.Title>Noodles</Card.Title>
                           
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={sixth}/>
                        <Card.Body>
                            <Card.Title>Chicken</Card.Title>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default RecipeSection;