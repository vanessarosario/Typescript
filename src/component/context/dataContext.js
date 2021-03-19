import { createContext } from "react";


export const datacontext = createContext();

export const dataprovider = ({children}) => {
    return (
        <datacontex.provide>
        {children}

        </datacontex.provide>

    )
} 