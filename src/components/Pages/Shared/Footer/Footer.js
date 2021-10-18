import React from 'react';

const Footer = () => {
    const commonH1Style = "text-2xl text-white py-3";
    const commonPStyle = "text-xl text-white";
    return (
        <div className="bg-blue-400 p-4 md:p-10">
            <div className="md:flex mx-2">
                <div className="md:w-1/2">
                    <h1 className={commonH1Style}>About Us</h1>
                    <p className={commonPStyle}>Pet Care is on a mission to make veterinary care affordable and accessible for everyone. We believe that every pet needs and deserves high-quality veterinary care. We advocate for strategies and public policy that improve the lives of pets in underserved communities</p>
                </div>
                <div className="md:w-1/2">
                    <h1 className={commonH1Style}>Contact Us</h1>
                    <p className={commonPStyle}><span>Phone: </span>+880-153-324533</p>
                    <p className={commonPStyle}><span>Telephone: </span>+02-153-324533</p>
                    <p className={commonPStyle}><span>Email: </span>support@petcare.com</p>
                </div>
            </div>
            <div className="my-4">
                <h1 className={commonH1Style}>Follow Us</h1>
                <div className="space-x-5">
                    <a href="#"><i className="fab fa-facebook text-2xl text-white"></i></a>
                    <a href="#"><i className="fab fa-instagram text-2xl text-white"></i></a>
                    <a href="#"><i className="fab fa-twitter text-2xl text-white"></i></a>
                    <a href="#"><i className="fab fa-youtube text-2xl text-white"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;