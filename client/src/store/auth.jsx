import { createContext } from "react";
import { useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const storetokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    };

    // This is where you would typically manage authentication state
    return (
        <AuthContext.Provider value={{storetokenInLS}}>
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