import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const Register = () => {

    const { createUser } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

    const handleRegister = event => {
        event.preventDefault();
        setSuccess('empty')
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value
        const password = form.password.value;

        console.log(name, email, photo, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                setError('')
                event.target.reset();
                setSuccess('User has been created successfully')
            })
            .catch(error => {
                setError(error.message)
                
            })
    }

    const handleAccepted =event =>{
        setAccepted(event.target.checked)
    }

    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={handleAccepted}
                    type="checkbox" 
                    label={<>Accept <Link to="/terms">Terms and Conditions</Link></>} />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <p className='text-success'>{success}</p>
                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className='text-secondary'>
                    Already have an account! <Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className='text-success'></Form.Text>
                <Form.Text className='text-danger'></Form.Text>
            </Form>
            
        </Container>
    );
};

export default Register;