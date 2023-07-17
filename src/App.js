import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin';
import UserPg from './Components/UserPage/User';
import DataContext, { DataProvider } from './Data/DataContext';
import NewIdea from './Components/NewIdea/NewIdea';

import DragAndDrop from './Components/DragAndDrop/DragAndDrop';
import DetailedView from './Components/DetailedView/DetailedView';
import EditProfile from './Components/EditProfile/EditProfile';
import Authentication from './Components/Authentication/Authentication';
import Sidebar from './Nav/Nav';





function App() {

  
  
  
 

  return (
    <div className="App">    
      <DataProvider>
        <Sidebar/>
      <Routes>
        <Route path='/' element={<DragAndDrop/>}/>
        {/* <Route path='/user' element={<UserPg/>} />
        <Route path='/admin' element={<Admin/>} /> */}
        {/* <Route path='/user' element={<User/>} /> */}
        <Route path='/mail' element={<NewIdea/>}/>
        <Route path='/login' element={<Authentication/>}/>
        <Route path='/idea-detailes' element={<DetailedView/>}/>
        <Route path='/profile-edit' element={<EditProfile/>}/>
      </Routes>
      
      </DataProvider>
    </div>
  );
}

export default App;
