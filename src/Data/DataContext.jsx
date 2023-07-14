import axios from 'axios';
import React, {useState, createContext, useEffect  } from 'react';
import IdeaCard from '../Components/Card/IdeaCard';

const DataContext =   createContext({});

export const DataProvider = ({children}) => {

    const [auth, setAuth] = useState("");
    const [userList, setUserList] = useState([]);
    const [column1Items, setColumn1Items] = useState([]);
    const [column2Items, setColumn2Items] = useState([]);
    const [column3Items, setColumn3Items] = useState([<IdeaCard/>, <IdeaCard/>]);
    const [column4Items, setColumn4Items] = useState([]);
    const [column5Items, setColumn5Items] = useState([<IdeaCard/>, <IdeaCard/>]);
    
    
    useEffect(()=>{
        axios.get("https://localhost:7292/api/Users").then((response)=>{
            console.log(response);
            setUserList(response.data);
        })

    },[])

    function asign1(data) {
        var array = [];
        data.map((item)=>{
            array.push(<IdeaCard 
                TaskId={item.TaskId}
                Title={item.Title}
                Status={item.Status}
                />);
        })
        setColumn1Items(array);        
    }

    function asign2(data) {
        var array = [];
        data.map((item)=>{
            array.push(<IdeaCard 
                TaskId={item.TaskId}
                Title={item.Title}
                Status={item.Status}
                />);
        })
        setColumn2Items(array);        
    }

    useEffect(()=>{
        axios.get("https://64af058ec85640541d4e0a7b.mockapi.io/tracker/tracker").then((response)=>{
            console.log(response.data);
            asign1(response.data);            
        })

        axios.get("https://64af058ec85640541d4e0a7b.mockapi.io/tracker/progress").then((response)=>{
            console.log(response.data);
            asign2(response.data);            
        })

    },[])
    return (
        <DataContext.Provider value={{
            auth, setAuth,
            userList, setUserList,
            column1Items, setColumn1Items,
            column2Items, setColumn2Items,
            column3Items, setColumn3Items,
            column4Items, setColumn4Items,
            column5Items, setColumn5Items,
            
        }}>{children}</DataContext.Provider>
      )
}

export default DataContext;