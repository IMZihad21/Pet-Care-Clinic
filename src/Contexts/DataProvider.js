import React, { createContext, useState } from 'react';
import useFetchServices from '../Hooks/useFetchServices';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [services, setServices] = useState([]);
    useFetchServices(setServices);
    const allContext = { services };
    return (
        <DataContext.Provider value={allContext}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;