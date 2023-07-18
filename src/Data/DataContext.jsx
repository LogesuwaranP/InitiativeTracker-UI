import axios from 'axios';
import React, {useState, createContext, useEffect, useLayoutEffect  } from 'react';
import IdeaCard from '../Components/Card/IdeaCard';
import { useNavigate } from 'react-router-dom';
import errors from 'validators/lib/errors';

const DataContext =   createContext({});

export const DataProvider = ({children}) => {
    const navigate = useNavigate();

    const [auth, setAuth] = useState('');
    const [userList, setUserList] = useState([]);
    const [column1Items, setColumn1Items] = useState([]);
    const [column2Items, setColumn2Items] = useState([]);
    const [column3Items, setColumn3Items] = useState([<IdeaCard/>, <IdeaCard/>]);
    const [column4Items, setColumn4Items] = useState([]);
    const [column5Items, setColumn5Items] = useState([<IdeaCard/>, <IdeaCard/>]);
    const [userName , setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const[toggle, setToggle] = useState(true);
    const[title, setTitle] = useState("");
    const[summary, setSummary] = useState("");
    const[discription,setDescription]=useState("");
    const [contributors,setContributors]=useState([])
    const[data, setData] = useState({});
    const [ideastatus,setideastatus]=useState("")

    function checkValues() {
        console.log("Values checking from context");
        navigate("/drag")
        console.log("user signup==="+"email:"+email+"-userName:"+userName+"-password"+password+"-confirmPassword"+confirmPassword)
    }
    
    
    // useEffect(()=>{
    //     axios.get("https://localhost:7265/api/User").then((response)=>{
    //         //  console.log(response.data);
    //         // setUserList(response.data);
    //     })
    //     console.log(auth);
    // },[])

    function authMiddleware() {
            console.log(auth);
            if(!auth)
            {
              navigate("/login")
            }
            else{
                console.log(auth);
            }               
    }

    function authUser() {

        axios.post("https://localhost:7265/auth",
        {
            email:email,
            password:password
        }).then((response)=>{
            console.log(response);
            setAuth(response.data)
            if(response.data)
            {
                navigate("/");
            } 
        }).catch((errors)=>{
            alert(errors.response.data)
        })               
                 
    }

    function asign1(data) {
        var array = [];
        data.map((item)=>{
            array.push(<IdeaCard 
                id={item.id}
                title={item.title}
                status={item.status}
                />);
                return 1;
        })
        setColumn1Items(array);        
    }

    function asign2(data) {
        var array = [];
        data.map((item)=>{
            array.push(<IdeaCard 
                id={item.TaskId}
                title={item.Title}
                status={item.Status}
                />);
                return 1;
        })
        setColumn2Items(array);        
    }

    useEffect(()=>{
        axios.get("https://localhost:7265/api/Idea/newidea").then((response)=>{
            console.log(response.data);
            asign1(response.data);            
        }).catch(errors)
        {
            console.log(errors);
        }

        // axios.get("https://64af058ec85640541d4e0a7b.mockapi.io/tracker/progress").then((response)=>{
        //     console.log(response.data);
        //     asign2(response.data);            
        // })

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
            userName , setUserName,
            email, setEmail,
            password, setPassword,
            confirmPassword, setConfirmPassword,
            checkValues,authMiddleware,
            toggle, setToggle,
            authUser,
            title, setTitle,
            summary, setSummary,
            discription,setDescription,
            contributors,setContributors,
            data, setData
            


        }}>{children}</DataContext.Provider>
      )
}

export default DataContext;