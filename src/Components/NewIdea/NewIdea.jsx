import axios from 'axios'
import React,{useContext} from 'react'
import DataContext from '../../Data/DataContext';

const NewIdea = () => {
  const {userList} = useContext(DataContext);
  var emailArray =[];

    userList.map((user)=>{
      emailArray.push(user.email);
    })

    console.log(emailArray);  


    const sendAll =()=>{
        axios.post("https://localhost:7292/mail", emailArray).then((response)=>{
            alert(response.data)
        })
    }

  return (
    <div>
      <h1>New Idea </h1>
      <button onClick={sendAll}>New idea posted</button>
    </div>
  )
}

export default NewIdea
