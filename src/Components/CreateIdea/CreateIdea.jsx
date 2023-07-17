import React, { useState } from 'react'
import "./CreateIdea.css"
import TextBox from '../TextBox/TextBox';
import CheckboxMultiSelect from '../CheckboxMultiSelect/CheckboxMultiSelect';
import DataContext from '../../Data/DataContext';
import { useContext } from 'react';
import AnimatedMulti from '../CuzDrop/DropDown';
import axios from 'axios';


const CreateIdea = ({setToggle}) => {

  const [selectedItems, setSelectedItems] = useState([]);
  
   



  const[title, setTitle] = useState("");
  const[summary, setSummary] = useState("");
  const[discription,setDescription]=useState("");
  const [contributors,setContributors]=useState([])
  const [ideastatus,setideastatus]=useState("")


  function create() {
    // axios.post
    console.log(title,summary, discription,contributors);
    console.log(contributors);
    
  }

    
      
    
  return (
    <div className='create-idea-main overlay'>
      <div className='create-idea-form'>
        <div className='create-idea-owner'>
          <div className='profile'></div>
          <h2>User Name</h2>
          <div className='cancel' onClick={()=>setToggle(false)}>X</div>
        </div>
        <div className='create-idea-title'>
          <form action="">
              <label htmlFor="Name">Enter Title</label>
              <input placeholder='Enter Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
          </form>          
        </div>
        <div className='multiselect-container' >
            <label>Add Contri</label>
            <AnimatedMulti setContributors={setContributors}/>
        </div>
        <div className='create-idea-summary'>
          <label htmlFor="Name">Enter Summary</label>
          <TextBox mxhight={80} mihight={80} holder={"Type a summary..."} value={summary} setValue={setSummary}/>
        </div>
        <div className='create-idea-summary'>
          <label htmlFor="Name" >Description</label>
          <TextBox mxhight={150} mihight={150} holder={"Enter your description here ..."} value={discription} setValue={setDescription} />
        </div>
        <div className='submit-idea'> <div className='SUBMIT' onClick={create}>Create</div> </div>

      </div>
      
        
    </div>
  )
}

export default CreateIdea;
