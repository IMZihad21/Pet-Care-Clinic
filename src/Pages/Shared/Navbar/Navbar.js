import React from 'react';
import { NavLink } from 'react-router-dom';
import useProvider from '../../../Hooks/useProvider';

const Navbar = () => {
    const { user, logOut } = useProvider();
    const navClassList = "text-blue-400 hover:text-white text-xl hover:bg-blue-400 px-2 md:px-5 py-2 rounded";
    const activeNavClassList = "border-b-2 border-green-600 bg-blue-50";
    return (
        <div className="md:flex justify-between" id="top">
            <div className="flex mx-2 md:mx-10 md:space-x-4">
                <NavLink className={navClassList} activeClassName={activeNavClassList} exact to="/">Home</NavLink>
                <NavLink className={navClassList} activeClassName={activeNavClassList} to="/services">Services</NavLink>
                <NavLink className={navClassList} activeClassName={activeNavClassList} to="/costs">Costs</NavLink>
                <NavLink className={navClassList} activeClassName={activeNavClassList} to="/informations">Informations</NavLink>
            </div>
            <div className="mx-16 md:mx-10 md:space-x-4 my-5 md:my-0">
                {
                    user.uid ?
                        (<div className="flex space-x-4">
                            {user.displayName && <div className="flex border-b-2 border-green-900 bg-blue-50 text-blue-400 rounded">
                                {
                                    user.photoURL && <div className="w-16 md:w-12 p-1 m-auto">
                                        <img className="w-full rounded-full" src={user.photoURL} alt={user.displayName} />
                                    </div>
                                }
                                <h1 className="text-xl px-1 md:px-2 md:py-2">{user.displayName || ""}</h1>
                            </div>}
                            <button className={navClassList} onClick={logOut}>Sign Out</button>
                        </div>) :
                        (<NavLink className={navClassList} activeClassName={activeNavClassList} to="login">Login</NavLink>)
                }
            </div>
        </div>
    );
};

export default Navbar;