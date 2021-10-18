import { useEffect } from "react";

const useFetchServices = (setServices) => {
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
};

export default useFetchServices;