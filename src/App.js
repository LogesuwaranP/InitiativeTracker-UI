import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin';
import User from './Components/UserPage/User';
import { DataProvider } from './Data/DataContext';
import NewIdea from './Components/NewIdea/NewIdea';
import Home from './Components/Home/Home';
import DragAndDrop from './Components/DragAndDrop/DragAndDrop';
import CreateIdea from './Components/CreateIdea/CreateIdea';
import IdeaForm from './Components/IdeaForm/IdeaForm';
import DetailedView from './Components/DetailedView/DetailedView';
import EditProfile from './Components/EditProfile/EditProfile';


function App() {
 

  return (
    <div className="App">
      <DataProvider>
        <Home/>
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/mail' element={<NewIdea/>}/>
        <Route path='/drag' element={<DragAndDrop/>}/>
        <Route path='/idea-detailes' element={<DetailedView/>}/>
        <Route path='/profile-edit' element={<EditProfile/>}/>
      </Routes>
      
      </DataProvider>
    </div>
  );
}

export default App;
