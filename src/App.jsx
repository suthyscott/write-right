import { useContext } from 'react';
import './App.css';
import Auth from './components/Auth'
import Home from './components/Home'
import ToggleAdd from './components/ToggleAdd'
import Header from  './components/Header'
import {Routes, Route} from 'react-router-dom'
import AuthContext from './store/authContext';
import { Navigate } from 'react-router-dom';

function App() {
  const {token} = useContext(AuthContext)
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={token ? <Navigate to='/home'/> : <Auth/>}/>
        <Route path='/home' element={token ? <Home/> : <Navigate to='/'/>}/>
        <Route path='/add' element={token ? <ToggleAdd/> : <Navigate to='/'/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
