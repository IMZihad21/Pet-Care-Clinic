import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-blue-400 p-4 md:p-10">
            <div className="md:flex mx-2">
                <div className="md:w-1/2">
                    <h1 className="text-2xl text-white py-3">About Us</h1>
                    <p className="text-xl text-white">Pet Care is on a mission to make veterinary care affordable and accessible for everyone. We believe that every pet needs and deserves high-quality veterinary care. We advocate for strategies and public policy that improve the lives of pets in underserved communities</p>
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-2xl text-white py-3">Contact</h1>
                    <p className="text-xl text-white"><span>Phone: </span>+880-153-324533</p>
                    <p className="text-xl text-white"><span>Telephone: </span>+02-153-324533</p>
                    <p className="text-xl text-white"><span>Email: </span>support@petcare.com</p>
                    <button className="bg-green-600 rounded-xl px-5 py-2 mt-2 text-lg text-white">Contact Us</button>
                </div>
            </div>
            <div className="my-4">
                <h1 className="text-2xl text-white py-3">Follow Us</h1>
                <div className="space-x-5">
                    <Link to="/social"><i className="fab fa-facebook text-2xl text-white"></i></Link>
                    <Link to="/social"><i className="fab fa-instagram text-2xl text-white"></i></Link>
                    <Link to="/social"><i className="fab fa-twitter text-2xl text-white"></i></Link>
                    <Link to="/social"><i className="fab fa-youtube text-2xl text-white"></i></Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;