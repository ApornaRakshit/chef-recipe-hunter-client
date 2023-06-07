import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://chef-cooking-server.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div >
            <h4>Chef's Name</h4>
            <div className='mt-2 mb-3 gap-5 d-flex'>
                {
                    chefs.map(chef => <p
                        key={chef.id}
                    >
                        <Col xs={6} md={4}>
                            <Image style={{height: '40px' }} src={chef.chefImage} roundedCircle />
                        </Col>
                        <Button variant="outline-info">
                            <Link to={`/chef/${chef.id}`} className='text-black text-decoration-none'>{chef.foodName} </Link></Button>{' '}

                    </p>)
                }
            </div>

        </div>
    );
};
export default Chefs;







