import React, { Children } from "react";
import { Context } from "./context";
import useStorage from 'util/useStorage'

const StoreProvider = () =>{
    const [token, setToken] = useStorage('token');

    return(
        <Context.Provider>
            value={{
                token,
                setToken,
            }}
            {Children}
        </Context.Provider>
    )

}

export default StoreProvider;