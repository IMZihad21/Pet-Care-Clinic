import React, { createContext } from 'react';
import ServiceProvider from '../Utilities/ServiceProvider/ServiceProvider';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const allContext = ServiceProvider();
    return (
        <DataContext.Provider value={allContext}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;