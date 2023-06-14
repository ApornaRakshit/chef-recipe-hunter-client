import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaRegHeart } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';
import ChefRecipe from '../../Home/Chef Recipe Section/ChefRecipe';
import bannerPart from '../../../assets/images/slider2.jpg'

const Foods = () => {
    const foods = useLoaderData();
    const { _id, title, details, image_url, author, name, rating, yearsOfExperience, bio, likes, recipeNumber } = foods
    return (
        <div className='mx-auto p-5 overflow-x-hidden'>
           <img
                    className="d-block w-100 mx-auto pr-5"
                    src={bannerPart}
                    alt="First slide"
                />
            
            <h3 className='chef-title mx-auto'> Chef's Recipe</h3>
            <Row xs={1} md={2} lg={2} className="g-2">
                <Col>
                    <Card className='mx-auto'>
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



