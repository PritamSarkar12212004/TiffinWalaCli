import { createContext, useContext, useState } from "react";
import { ContextinterFace } from "../../interface/context/ContextinterFace";


const Context = createContext<ContextinterFace | undefined>(undefined);
export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    // temp phone number for navigation
    const [tempPhomne, setTempPhomne] = useState<any>(null);

    // mai screen
    const [userInfo, setUserInfo] = useState<{
        location: any,
        userinfo: any
    }>(null)

    // whole page loader
    const [pageLoader, setPageLoader] = useState<boolean>(false);
    return (
        // temp phone number for navigation
        <Context.Provider
            value={{
                tempPhomne,
                setTempPhomne,

                // main screen
                userInfo,
                setUserInfo,
                pageLoader,
                setPageLoader
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


