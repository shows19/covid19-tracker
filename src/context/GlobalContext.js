import React, { useState, createContext } from 'react';

export const GlobalContext = createContext();
const initialCountries = [{Country:'',CountryCode:''}];

export const GlobalProvider = ({children}) => {
    const [countries, setCountries] = useState(initialCountries);

    return(
        <GlobalContext.Provider value={{countries, setCountries}}>{children}</GlobalContext.Provider>
    )
}