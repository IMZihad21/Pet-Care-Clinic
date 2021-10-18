import React, { createContext, useState } from 'react';
import useFetchServices from '../Hooks/useFetchServices';
import useFirebase from '../Hooks/useFirebase';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [services, setServices] = useState([]);
    useFetchServices(setServices);
    const firebaseContext = useFirebase();
    const allContext = { services, ...firebaseContext };
    return (
        <DataContext.Provider value={allContext}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;