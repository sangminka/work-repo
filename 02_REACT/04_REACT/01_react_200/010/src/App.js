import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Routes } from 'react-router-dom';
import Customer from './pages/Customer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Routes path ='/customer' element = {<Customer/>}/>
      </Routes>
    </div>
  );
}

export default App;
