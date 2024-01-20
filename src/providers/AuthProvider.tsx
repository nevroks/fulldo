import React, {createContext, useState} from 'react';

export const AuthContext=createContext({})
export const AuthProvider = ({children}) => {
    const [isAuthorized,setIsAuthorized]=useState(false)
    return (
        <AuthContext.Provider value={{isAuthorized,setIsAuthorized}}>
            {children}
        </AuthContext.Provider>
    );
};





export default AuthProvider;