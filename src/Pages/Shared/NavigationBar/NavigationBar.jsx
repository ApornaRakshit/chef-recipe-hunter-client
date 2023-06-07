import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../../assets/images/logo.png"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';


const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

const handleLogOut =()=>{
    logOut()
    .then()
    .catch(error=> console.log(error))
}

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="warning" variant="warning">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="" srcset="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/chef/0'>Home</Link>
                            <Link href="/about">About</Link>
                            <Link to="/blog">Blog</Link>
                            <Link href="/career">Career</Link>
                        </Nav>
                        <Nav>
                            {
                                user && <FaUserCircle style={{ fontSize: '2rem' }}>
                                </FaUserCircle>
                            }
                            {user ?
                                <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                <Link to="/login"><Button variant="secondary">Login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default NavigationBar;