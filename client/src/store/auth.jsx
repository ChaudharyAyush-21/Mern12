import { useEffect } from "react";
import { createContext, useState } from "react";
import { useContext } from "react";



export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token , setToken] = useState(localStorage.getItem('token'));
    const [user , setUser] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [services, setServices] = useState("");
    const authorizationToken = `Bearer ${token}`;

    const storetokenInLS = (serverToken) => {
        setToken(serverToken);
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
            setIsLoading(true);
            const response = await fetch(`http://localhost:4000/api/auth/user`, {
                method: 'GET',
                headers: {
                    'Authorization': authorizationToken,
                },
            });
            if (response.ok) {
                const data = await response.json();
                console.log("User data:", data.userData);
                setUser(data.userData);
                setIsLoading(false);
                
            } else {
                console.error("Failed to fetch user data");
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const getServices = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/data/service`, {
                method: 'GET',
        });
            if (response.ok) {
                const data = await response.json();
                console.log("Services data:", data.msg);
                setServices(data.msg);
            } else {
                console.error("Failed to fetch services");
            }
        } catch (error) {
            console.log(`service error: ${error}`);
        }
    };

    useEffect(() => {
        getServices();
        userAuthentication();
    },[]);

    // This is where you would typically manage authentication state
    return (
        <AuthContext.Provider value={{ isLoggedIn, storetokenInLS , LogoutUser , user ,services , authorizationToken , isLoading }}>
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