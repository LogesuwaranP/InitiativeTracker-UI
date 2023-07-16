import React, { useState } from 'react'
import "./CreateIdea.css"
import TextBox from '../TextBox/TextBox';
import CheckboxMultiSelect from '../CheckboxMultiSelect/CheckboxMultiSelect';


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
        </div>
        <div className='create-idea-title'>
          <form action="">
              <label htmlFor="Name">Enter Title</label>
              <input placeholder='Enter Title' />
          </form>          
        </div>
        <div className='multiselect-container' >
            <label>Add Contri</label>
            <CheckboxMultiSelect />
        </div>
        <div className='create-idea-summary'>
          <label htmlFor="Name">Enter Title</label>
          <TextBox mxhight={80} mihight={80}/>
        </div>
        <div className='create-idea-summary'>
          <label htmlFor="Name">Enter Title</label>
          <TextBox mxhight={150} mihight={150}/>
        </div>
        <div className='submit-idea'> <div className='SUBMIT'>Create</div> </div>

      </div>
      
        
    </div>
  )
}

export default CreateIdea;
