import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin';
import User from './Components/UserPage/User';
import DataContext, { DataProvider } from './Data/DataContext';
import NewIdea from './Components/NewIdea/NewIdea';
import Nav from './Nav/Nav';

import { useContext } from 'react';
import Home from './Components/Home/Home';
import DragAndDrop from './Components/DragAndDrop/DragAndDrop';


function App() {
 

  return (
    <div className="App">
      <DataProvider>
        <Home/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/mail' element={<NewIdea/>}/>
        <Route path='/drag' element={<DragAndDrop/>}/>
      </Routes>
      
      </DataProvider>
    </div>
  );
}

export default App;
