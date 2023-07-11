import axios from 'axios';
import React, {useState, createContext, useEffect  } from 'react'

const DataContext =   createContext({});

export const DataProvider = ({children}) => {

    const [auth, setAuth] = useState("");
    return (
        <DataContext.Provider value={{
            auth, setAuth            

        }}>{children}</DataContext.Provider>
      )
}

export default DataContext;