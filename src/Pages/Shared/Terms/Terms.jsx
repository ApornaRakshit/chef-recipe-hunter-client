import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quidem, quisquam dignissimos unde nobis deleniti, reiciendis repellendus rem ab vero nemo corporis dolorum hic aliquam dolorem totam officiis recusandae dolor!</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;