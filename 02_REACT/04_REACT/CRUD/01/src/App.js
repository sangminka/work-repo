import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        {/* 첫번째 페이지 */}
        <Route path='/' element = {<Main/>} />
        
        {/* 로그인 페이지 */}
        <Route path='/login' element = {<Login/>} />
        <Route path='/signup' element = {<SignUp/>} />


      </Routes>
    </div>
  );
}

export default App;
