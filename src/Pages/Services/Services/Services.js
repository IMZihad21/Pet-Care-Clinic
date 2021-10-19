import React from 'react';
import useProvider from '../../../Hooks/useProvider';
import Service from '../Service/Service';

const Services = () => {
    const { services } = useProvider();
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 m-5">
            {
                services.map(service => <Service
                    key={service.serviceID}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;