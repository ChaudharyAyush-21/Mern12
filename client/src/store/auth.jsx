import { useEffect } from "react";
import { createContext, useState } from "react";
import { useContext } from "react";



export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token , setToken] = useState(localStorage.getItem('token'));

    const [user , setUser] = useState("");

    const storetokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    };

    let isLoggedIn = !!token;

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem('token');
    };

    //Authentication for the user data
    const userAuthentication = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/auth/user`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            });
            if (response.ok) {
                const data = await response.json();
                console.log("User data:", data.userData);
                setUser(data.userData);
                
            } else {
                console.error("Failed to fetch user data");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        userAuthentication();
    },[]);

    // This is where you would typically manage authentication state
    return (
        <AuthContext.Provider value={{ isLoggedIn, storetokenInLS , LogoutUser , user}}>
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