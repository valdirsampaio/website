import React from "react"
import { Footer } from "./Footer";

export const DefaultFooter = ({ children }) => {
    return (
        <>
            {children}
            <Footer />
        </>
    );
};