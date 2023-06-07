import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import app from '../../../firebase/firebase.config';

const LoginWith = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    console.log(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    //--------------GoogleSignIn---------------//

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                setUser(loggedInUser)
            })
            .catch(error => {
                console.log('error ', error.message)
            })
    }


    const handleGithubSignIn = ()=>{
        signInWithPopup(auth, githubProvider)
        .then(result=>{
            const logUser = result.user
            console.log(logUser)
            setUser(logUser)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='mr-2 text-end' >
            <Container>

                {
                    user ?
                        <button onClick={handleSignOut}>SignOut</button> :
                        <>
                            <Button onClick={handleGoogleSignIn} className='mb-2 mt-2' variant="outline-primary" size="sm">
                                <FaGoogle />Login with Google
                            </Button>
                            <Button onClick={handleGithubSignIn} className='mb-2' variant="outline-secondary" size="sm">
                                <FaGithub />Login with Github
                            </Button>
                        </>
                }
                {user && <div className='d-flex g-2'>
                    <h4>User:{user.displayName}</h4>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
                }
            </Container>
        </div>
    );
};

export default LoginWith;



