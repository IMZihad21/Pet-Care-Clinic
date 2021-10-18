import React from 'react';
import useData from '../../../Hooks/useData';

const MiniServices = () => {
    const {services, serviceLoading} = useData();
    if(serviceLoading === false){
        console.log(services);
    }
    return (
        <div>
            
        </div>
    );
};

export default MiniServices;