import './App.css';
import Header from './components/Header';
import Customer from './pages/Customer';
import Add_Customer from './pages/Add_Customer';
import {  Route, Routes } from 'react-router-dom'; 
function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/Customer' element = {<Customer/>}/>
          <Route path='/Add_Customer' element = {<Add_Customer/>}/>
        </Routes>
    </div>
  );
}

export default App;
