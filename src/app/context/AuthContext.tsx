"use client";
import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";

// Define the shape of the AuthContext
interface UserData {
    id: string;
    email: string;
    name: string;
}

interface AuthContextType {
    isLoggedIn: boolean;
    login: (userData: UserData) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== "undefined") {  //
            const user = localStorage.getItem("user");
            if (user) {
                setIsLoggedIn(true);
            }
        }
    }, []);

    const login = (userData: UserData) => {
        if (!userData) {
            console.error("User data is undefined");
            return;
        }
        if (typeof window !== "undefined") {
            localStorage.setItem("user", JSON.stringify(userData));
            setIsLoggedIn(true);
        }
    };

    const logout = () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("user");
            setIsLoggedIn(false);
        }
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, logout }}>
            {children}
        </AuthContext.Provider>
    );
};