import { createContext, useState } from "react";
import { useContext } from "react";



export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token , setToken] = useState(localStorage.getItem('token'));

    const storetokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    };

    let isLoggedIn = !!token;

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem('token');
    };

    // This is where you would typically manage authentication state
    return (
        <AuthContext.Provider value={{ isLoggedIn, storetokenInLS , LogoutUser}}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContextValue;
}