import { createContext, useContext, useEffect, useState } from "react";
import { popupType, ContextTypeInterface } from "../interface/context/childreen";
import AddressGeterFunc from "../functions/context/GetAddressFunc";

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
    const [userTemLocation, setUserTemLocation] = useState<any>("")





    useEffect(() => {
        AddressGeterFunc({ setUserProfile, setUserTemLocation });
        return () => {
            setUserProfile(null)
            setUserTemLocation(null)
        }
    }, [])

    // useEffect(() => {
    //     return () => {
    //         setLocationSearch(null)
    //     }
    // }, [])

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
                setLocation,
                userTemLocation,
                setUserTemLocation,
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


