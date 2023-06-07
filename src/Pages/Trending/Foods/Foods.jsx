import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaRegHeart } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';
import ChefRecipe from '../../Home/Chef Recipe Section/ChefRecipe';

const Foods = () => {
    const foods = useLoaderData();
    const { _id, title, details, image_url, author, name, rating, yearsOfExperience, bio, likes, recipeNumber } = foods
    return (
        <div className='mx-auto w-'>

            {/*<Card className='mt-2 mb-12 p-4'>
                <Card.Img style={{ height: '70%' }} variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>*/}

            <Row xs={1} md={2} lg={2} className="g-4">
                <Col>
                    <Card className='m-4 mx-auto'>
                        <Card.Img style={{ height: '50%' }} variant="top" src={author?.img} />
                        <Card.Body>
                            <Card.Title>
                                <p>{author?.name}</p>
                            </Card.Title>
                            <Card.Text>
                                {bio}
                            </Card.Text>
                            <div className='mb-0 g-0'>
                                <div>
                                    <p>Number of recipes:{recipeNumber}</p>
                                    <p>Experience: {yearsOfExperience} Years</p>
                                </div>

                                <div className='mb-0 mr-0 d-flex flex-grow-1'>
                                    <FaRegHeart></FaRegHeart>
                                    <p>Like: {likes}</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            <ChefRecipe></ChefRecipe>

        </div>
    );
};

export default Foods;



