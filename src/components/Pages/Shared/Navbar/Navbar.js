import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link exact to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/costs">Costs</Link>
            <Link to="/informations">Informations</Link>
        </div>
    );
};

export default Navbar;