import { useState, createContext, useEffect } from "react";
import { userObserver } from "../auth/firebase";

export const AuthContext = createContext(); //kullanmak için export edilmeli


const AuthContextProvider = (props) => {

    // eslint-disable-next-line no-unused-vars
    const [currentUser, setcurrentUser] = useState();


    useEffect(() => {
        userObserver(setcurrentUser)
    }, [])
    




    return (
        <AuthContext.Provider value = {{currentUser}} >
            {props.children}
        </AuthContext.Provider>
    )
}
 export default AuthContextProvider;





