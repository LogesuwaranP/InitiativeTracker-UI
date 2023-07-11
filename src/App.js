import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin';
import User from './Components/UserPage/User';
import { DataProvider } from './Data/DataContext';

function App() {
  return (
    <div className="App">
      <DataProvider>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/user' element={<User/>} />
      </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
