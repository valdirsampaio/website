import { createContext, useEffect, useState } from "react";
import React from 'react';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [aboutPage, setAboutPage] = useState(false);

    setTimeout(function(){
        setLoading(false);
    }, 2000);

    return (
        <UserContext.Provider value={{ loading, setLoading, aboutPage, setAboutPage }} >
            {children}
        </UserContext.Provider >
    )
}