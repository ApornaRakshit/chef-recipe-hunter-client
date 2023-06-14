import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/images/recipe1.jpg'
import second from '../../../assets/images/pizza.jpg'
import third from '../../../assets/images/fried.jpg'
import forth from '../../../assets/images/recipe4.jpg'
import fifth from '../../../assets/images/recipe5.jpg'
import sixth from '../../../assets/images/chickenFried.jpg'



const ChefRecipe = () => {

    return (
        <>
            <div class="carousel-item">
                
            </div>
            <div className='mb-4'>

            <h3 className='chef-title pt-5'> Recipe Part: </h3>
                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={first} />
                            <Card.Body>
                                <Card.Title>Vegetables recipe</Card.Title>
                                <Card.Text>
                                    <Card.Title>Ingredients</Card.Title>
                                    <li>Sault</li>
                                    <li>Chili</li>
                                    <li>Vegetables</li>
                                    <li>Oil</li>
                                    <li>Ginger</li>
                                    <p>This recipe makes two large sheet pans of roasted vegetables. Because there are so many vegetables, place them onto two parchment lined sheet pans and mix with half the olive oil and seasonings. Use your hands to mix them up and make sure everything is evenly coated!...</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer><Button variant="info">Favorite</Button>{' '}</Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={second} />
                            <Card.Body>
                                <Card.Title>Pizza recipe</Card.Title>
                                <Card.Text>
                                    <Card.Title>Ingredients</Card.Title>
                                    <li>2 cup all purpose flour</li>
                                    <li>100 ml tomato ketchup</li>
                                    <li>1 tomato</li>
                                    <li>2 onion</li>
                                    <li>1 teaspoon chilli flakes</li>
                                    <li>1 teaspoon baking powder</li>
                                    <p>Method: Take a dough kneading plate and add all-purpose flour to it. Next, add salt and baking powder in it and sieve the flour once. Then, make a well in the centre and add .. sugar....</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer><Button variant="info">Favorite</Button>{' '}</Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={third} />
                            <Card.Body>
                                <Card.Title> fried recipe</Card.Title>
                                <Card.Text>
                                    <Card.Title>Ingredients</Card.Title>
                                    <li>Sault</li>
                                    <li>Chili</li>
                                    <li>Fried</li>
                                    <li>Oil</li>
                                    <li>Ginger</li>
                                    <p>To be cooked on high flame.Add chopped veggies and fry for about 2 minutes.Reduce the flame to medium. Increase the heat and pour the soya sauce, vinegar and any hot sauce if you prefer.Add cooled rice, ground black pepper and spring onion greens.Fry on the highest flame for about 2 minutes.</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer><Button variant="info">Favorite</Button>{' '}</Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={forth} />
                            <Card.Body>
                                <Card.Title>Fruits Salad recipe</Card.Title>
                                <Card.Text>
                                    <Card.Title>Ingredients</Card.Title>
                                    <li>1 lb. strawberries, hulled and quartered</li>
                                    <li>6 oz. blueberries</li>
                                    <li>6 oz. raspberries</li>
                                    <li>3 kiwis, peeled and sliced</li>
                                    <li>1 orange, peeled and wedges cut in half</li>
                                    <p>Method: In a small bowl whisk together honey, orange juice, and lemon zest. Add fruit to a large bowl and pour over dressing, tossing gently to combine. Chill until ready to serve</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer><Button variant="info">Favorite</Button>{' '}</Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={fifth} />
                            <Card.Body>
                                <Card.Title>Noodles recipe</Card.Title>
                                <Card.Text>
                                    <Card.Title>Ingredients</Card.Title>
                                    <li>Sault</li>
                                    <li>Chili</li>
                                    <li>Noodles</li>
                                    <li>Oil</li>
                                    <li>Ginger</li>
                                    <p>Method: Boiling is the method most often used for cooking pasta. It is also used in conjunction with some of the other cooking methods, such as stir-frying and baking. When boiling pasta ...</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer><Button variant="info">Favorite</Button>{' '}</Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={sixth} />
                            <Card.Body>
                                <Card.Title>Chicken fried recipe</Card.Title>
                                <Card.Text>
                                    <Card.Title>Ingredients</Card.Title>
                                    <li>Sault</li>
                                    <li>Chili</li>
                                    <li>Chicken</li>
                                    <li>Oil</li>
                                    <li>Ginger</li>
                                    <p>
                                        Step 1: Soak in buttermilk. Remove any excess moisture from your chicken pieces by patting them dry with paper towels.Coat the chicken. In a large resealable plastic bag, add the ingredients listed for the coating.Let it res.Fry, then serve.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer><Button variant="info">Favorite</Button>{' '}</Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default ChefRecipe;