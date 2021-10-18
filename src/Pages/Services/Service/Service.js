import React from 'react';
import { useHistory } from 'react-router';

const Service = ({ service }) => {
    const { serviceID, serviceName, serviceImg, serviceDescription } = service;
    const history = useHistory();
    const handleServiceDetails = () => {
        history.push(`/services/${serviceID}`)
    };
    return (
        <div className="md:flex bg-blue-200 shadow-lg rounded-xl">
            <div className="md:w-1/3 my-auto">
                <img className="w-full rounded-xl" src={serviceImg} alt={serviceName} />
            </div>
            <div className="md:w-2/3 m-auto">
                <h1 className="text-2xl font-bold py-2">{serviceName}</h1>
                <p className="text-xl mx-2">{serviceDescription}</p>
                <button onClick={handleServiceDetails} className="rounded-lg bg-green-600 text-white hover:bg-green-500 px-12 py-2 m-2">More Details</button>
            </div>
        </div>
    );
};

export default Service;