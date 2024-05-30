import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

// Define the initial state for the authentication context
const INITIAL_STATE = {
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

// Create the authentication context
export const AuthContext = createContext(INITIAL_STATE);

// Create the authentication context provider
export const AuthContextProvider = ({ children }) => {
    // Use the reducer function to manage state
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    // Update local storage when currentUser changes
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.currentUser));
    }, [state.currentUser]);

    // Provide the current user state and dispatch function to child components
    return (
        <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};