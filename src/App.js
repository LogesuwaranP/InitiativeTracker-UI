import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin';
import User from './Components/UserPage/User';
import { DataProvider } from './Data/DataContext';
import NewIdea from './Components/NewIdea/NewIdea';

function App() {
  return (
    <div className="App">
      <DataProvider>
        {/* <button>Send mail</button> */}
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/mail' element={<NewIdea/>}/>
      </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
