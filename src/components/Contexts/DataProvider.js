import React, { createContext } from 'react';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const allContext = "test"
    return (
        <DataContext.Provider value={allContext}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;