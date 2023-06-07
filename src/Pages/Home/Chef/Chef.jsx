import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefCard from '../Home/ChefCard/ChefCard';
import './Chef.css'

const Chef = () => {
    const { id } = useParams();
    const chefFood = useLoaderData()
   
    return (
        <div id='chefs' className='chefs'>
            <h4 className='chef-title pt-5'> Chef's making foods: </h4>
            <div className='chef-container'>
                
                {
                chefFood.map(chef => <ChefCard
                    key={chef._id}
                   chef={chef}
                >
                </ChefCard>)
            }
                </div>
            </div>
        
    );
};

export default Chef;