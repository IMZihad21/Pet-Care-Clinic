import { useEffect, useState } from "react";

const ServiceProvider = () => {
    const [ services, setServices ] = useState([]);
    const [ serviceLoading, setServiceLoading ] = useState(true)
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .finally(() => setServiceLoading(false))
    }, [])
    return {
        services,
        serviceLoading
    };
};

export default ServiceProvider;