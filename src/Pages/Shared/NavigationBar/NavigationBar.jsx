import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../../assets/images/logo.png"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';


const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="" srcset="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='text-bg-light' to='/chef/0'>Home</Link>
                            <Link className='text-bg-light' href="/about">About</Link>
                            <Link className='text-bg-light' to="/blog">Blog</Link>
                            <Link className='text-bg-light' href="/career">Career</Link>
                        </Nav>
                        <Nav>
                            <Container>
                                {
                                    user && <FaUserCircle className='text-light bg-dark' style={{ fontSize: '2rem' } 
                                    }>
                                    </FaUserCircle>
                                }
                                {user ?
                                    //<Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                    //<Link to="/login"><Button variant="secondary">Login</Button></Link>
                                    <>
                                        <span>{user?.displayName}</span>
                                        <button onClick={handleLogOut} className="btn btn-light">Logout</button>
                                    </> : <>
                                        <li><Link className='text-bg-light' to="/login">Login</Link></li>
                                    </>

                                }
                            </Container>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default NavigationBar;