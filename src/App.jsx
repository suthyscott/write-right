import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth'
import Home from './components/Home'
import ToggleAdd from './components/ToggleAdd'
import Header from  './components/Header'
import {Routes, Route} from 'react-router-dom'

function App() {
  // console.log(new Date().toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'}))
  console.log(new Date())
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Auth/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/add' element={<ToggleAdd/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
