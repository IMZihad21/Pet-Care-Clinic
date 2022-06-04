import { useEffect, useState } from "react";

const useServiceProvider = () => {
    const [ services, setServices ] = useState([]);

    const getServices = async () => {
        const response = await fetch("https://gist.githubusercontent.com/IMZihad21/b77f5e38eb1a141d2471855a7c7d835f/raw/petCareServices.json");
        const data = await response.json();
        setServices(data);
    }

    useEffect(() => {
        getServices();
    }, [])

    return { services };
};

export default useServiceProvider;