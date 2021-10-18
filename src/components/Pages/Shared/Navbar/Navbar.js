import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navClassList = "text-blue-400 hover:text-white text-xl hover:bg-blue-400 px-2 md:px-5 py-2 rounded";
    const activeNavClassList = "border-b-2 border-green-600 bg-blue-50";
    return (
        <div className="flex mx-2 md:mx-10 md:space-x-4">
            <NavLink className={navClassList} activeClassName={activeNavClassList} exact to="/">Home</NavLink>
            <NavLink className={navClassList} activeClassName={activeNavClassList} to="/services">Services</NavLink>
            <NavLink className={navClassList} activeClassName={activeNavClassList} to="/costs">Costs</NavLink>
            <NavLink className={navClassList} activeClassName={activeNavClassList} to="/informations">Informations</NavLink>
        </div>
    );
};

export default Navbar;