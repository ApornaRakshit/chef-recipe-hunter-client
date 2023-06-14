import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LoginWith from '../Pages/Shared/Login With/LoginWith';


import { Outlet } from 'react-router-dom';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';

const FoodTrends = () => {
    return (
        <div>
            <LoginWith></LoginWith>
            <Header>
            </Header>
            <NavigationBar>
            </NavigationBar>
            {/*<Container>
                <Col>
                    <Row lg={7}>
                    <Outlet></Outlet>
                    </Row>
                    <Row lg={3}>
                        <ChefRecipe></ChefRecipe>
                    </Row>
                </Col>
            </Container>*/}
            <Row lg={1}>
                <Outlet></Outlet>
            </Row>
            <Footer>
            </Footer>
        </div>
    );
};

export default FoodTrends;