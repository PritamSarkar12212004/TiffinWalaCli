import { createContext, use, useContext, useState } from "react";
import { popupType, ContextTypeInterface } from "../interface/context/childreen";

const Context = createContext<ContextTypeInterface | undefined>(undefined);
export const ContextProvider = ({ children }: { children: React.ReactNode }) => {


    // popup for error handling
    const [popup, setPopup] = useState<popupType>({
        status: false,
        message: "",
        type: "success",
        title: "",
        func: () => { },
    });
    const [UserFprofile, setUserProfile] = useState<any>(null)

    const [location, setLocation] = useState<any>(null)

    return (
        <Context.Provider
            value={{
                // popup for error handling
                popup,
                setPopup,
                // user profile
                UserFprofile,
                setUserProfile,
                location,
                setLocation
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const userContext = () => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error('userContext must be used within a ContextProvider');
    }
    return context;
};


