import React, { useContext } from 'react'
import Userprofile from './Userprofile'
import DataContext from '../../Data/DataContext';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const ApproverPage = () => {
    const {column1Items}=useContext(DataContext);
    const[pending, setPending] = useState([]);
    useEffect(()=>{
        axios.get("https://localhost:7265/api/Idea/newidea").then((response)=>{
            setPending(response.data);        
            console.log(response.data);    
        }).catch((errors)=>{
            console.log(errors);
        });
    },[])

    // console.log(column1Items[0].props);


  return (
    <div className='approver'>
        sdfgd
        {
            pending.map((p)=> {return(
                <Userprofile
                    name={p.name}
                    title={p.title}
                    shortdescription={p.shortdescription}
                    longdescription={p.longdescription}
                    createdTime={p.createdTime}
                    id={p.id}
                    
                />)


            })
        }

    </div>
  )
}

export default ApproverPage
