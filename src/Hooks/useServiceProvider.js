import { useEffect, useState } from "react";

const useServiceProvider = () => {
    const [ services, setServices ] = useState([]);
    useEffect(() => {
        const unsubscribe = () => {
            fetch('./services.json')
                .then(res => res.json())
                .then(data => setServices(data))
        }
        return () => unsubscribe;
    }, [])
    return { services };
};

export default useServiceProvider;