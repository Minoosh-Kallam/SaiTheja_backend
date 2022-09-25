import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Login from './LoginComponents/Login';
import Signup from './LoginComponents/Signup';

function App() {
  return (
    <BrowserRouter >
      <Routes >
        <Route path='/signup' element={<Login />} />
        <Route path = '/signin' element={<Signup />} />
        <Route path='' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
