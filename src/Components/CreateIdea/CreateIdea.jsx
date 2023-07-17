import React, { useState } from 'react'
import "./CreateIdea.css"
import TextBox from '../TextBox/TextBox';
import CheckboxMultiSelect from '../CheckboxMultiSelect/CheckboxMultiSelect';
import DataContext from '../../Data/DataContext';
import { useContext } from 'react';
import AnimatedMulti from '../CuzDrop/DropDown';


const CreateIdea = ({setToggle}) => {

  const [selectedItems, setSelectedItems] = useState([]);
  
   

  const handleChange = (event) => {
    
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedItems(selectedOptions);
    console.log(selectedOptions);
  };

    
      
    
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
              <input placeholder='Enter Title' />
          </form>          
        </div>
        <div className='multiselect-container' >
            <label>Add Contri</label>
            <AnimatedMulti />
        </div>
        <div className='create-idea-summary'>
          <label htmlFor="Name">Enter Title</label>
          <TextBox mxhight={80} mihight={80} holder={"Type a summary..."}/>
        </div>
        <div className='create-idea-summary'>
          <label htmlFor="Name">Enter Title</label>
          <TextBox mxhight={150} mihight={150} holder={"Enter your description here ..."}/>
        </div>
        <div className='submit-idea'> <div className='SUBMIT'>Create</div> </div>

      </div>
      
        
    </div>
  )
}

export default CreateIdea;
