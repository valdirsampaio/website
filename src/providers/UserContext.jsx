import { createContext, useEffect, useState } from "react";
import React from 'react';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    return (
        <UserContext.Provider value={{}} >
            {children}
        </UserContext.Provider >
    )
}