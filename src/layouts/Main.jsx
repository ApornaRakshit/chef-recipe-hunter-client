import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../Pages/Home/Banner/Banner';
import LoginWith from '../Pages/Shared/Login With/LoginWith';

import ChefRecipe from '../Pages/Home/Chef Recipe Section/ChefRecipe';
import RecipeSection from '../Pages/Home/Recipe Section/RecipeSection';
import { Outlet } from 'react-router-dom';
import Chefs from '../Pages/Home/Chef Section/Chefs';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';


const Main = () => {
    return (
        <div>
            <LoginWith></LoginWith>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Container>
                <Col>
                    <Row lg={2}>
                        <Chefs></Chefs>
                    </Row>
                    <Row lg={1}>
                        <Outlet></Outlet>
                    </Row>
                    <Row lg={1}>
                        <RecipeSection></RecipeSection>
                    </Row>
                    <Row lg={1}>
                        <ChefRecipe></ChefRecipe>
                    </Row>
                </Col>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;