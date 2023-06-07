import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {

    const { user } = useContext(AuthContext);
    return (
        <div>
        </div>
    );
};

export default Header;


