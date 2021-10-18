import React, { createContext, useState } from 'react';
import useFirebase from '../Hooks/useFirebase';
import useServiceProvider from '../Hooks/useServiceProvider';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const serviceContext = useServiceProvider();
    const firebaseContext = useFirebase();
    const allContext = { ...serviceContext, ...firebaseContext };
    return (
        <DataContext.Provider value={allContext}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;