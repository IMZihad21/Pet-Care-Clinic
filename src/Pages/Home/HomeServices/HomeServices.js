import React from 'react';
import useProvider from '../../../Hooks/useProvider';
import Service from '../../Services/Service/Service';

const HomeServices = () => {
    const { services } = useProvider();
    const slicedServices = services.slice(0, 6);
    return (
        <div>
            <h1 className="text-4xl font-semibold text-blue-400 py-5">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-5 p-2">
                {
                    slicedServices.map(service => <Service
                        key={service.serviceID}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default HomeServices;