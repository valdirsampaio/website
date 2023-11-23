import React, { useContext } from "react"
import { Header } from "./Header";

export const DefaultHeader = ({ children }) => {

    return (
        <>
            <Header />
            {children}
        </>
    );
};