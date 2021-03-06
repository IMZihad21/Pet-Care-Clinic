import React from 'react';
import { Redirect, useParams } from 'react-router';
import useProvider from '../../../Hooks/useProvider';

const ServiceDetails = () => {
    const { serviceCode } = useParams();
    const serviceID = parseInt(serviceCode);
    const { services } = useProvider();
    const service = services.find(service => service.serviceID === serviceID)
    if (service) {
        const { serviceName, serviceImg, serviceDescription } = service;
        return (
            <div className="md:flex">
                <div className="md:w-1/3">
                    <img className="w-full" src={serviceImg} alt={serviceName} />
                </div>
                <div className="md:w-2/3 m-auto">
                    <h1 className="text-4xl md:text-8xl font-bold py-20">{serviceName}</h1>
                    <p className="text-2xl md:text-5xl font-semibold">{serviceDescription}</p>
                    <button className="rounded-lg bg-green-600 text-white hover:bg-green-500 px-20 py-5 my-10">Make Appointment</button>
                </div>
            </div>
        );
    }
    else{
        return <Redirect to="/"></Redirect>
    }
};

export default ServiceDetails;