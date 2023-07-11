import axios from 'axios';
import React, {useState, createContext, useEffect  } from 'react'

const DataContext =   createContext({});

export const DataProvider = ({children}) => {

    const [auth, setAuth] = useState("");
    const [userList, setUserList] = useState([]);

    useEffect(()=>{
        axios.get("https://localhost:7292/api/Users").then((response)=>{
            console.log(response);
            setUserList(response.data);
        })

    },[])
    return (
        <DataContext.Provider value={{
            auth, setAuth,
            userList, setUserList            

        }}>{children}</DataContext.Provider>
      )
}

export default DataContext;