import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import  { DataProvider } from './Data/DataContext';
import NewIdea from './Components/NewIdea/NewIdea';
import UserPage from "./Components/User/UserPage"
import DragAndDrop from './Components/DragAndDrop/DragAndDrop';
import DetailedView from './Components/DetailedView/DetailedView';
import EditProfile from './Components/EditProfile/EditProfile';
import Authentication from './Components/Authentication/Authentication';
import Sidebar from './Nav/Nav';
import Profile from './Components/Profile/Profile';





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
        <Route path='/idea-detailes/:id' element={<DetailedView/>}/>
        <Route path="/profile-edit" element={<EditProfile/>}/>
        <Route path='/users' element={<UserPage/>}/>
        <Route path='/profile' element={<Profile/>}/>
        
      </Routes>
      
      </DataProvider>
    </div>
  );
}

export default App;
