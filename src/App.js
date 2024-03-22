
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Register from './Components/Register/Register';
import Login from './Components/LogIn/Login';
import Home from './Components/HomePage/Home';
import OTP from './Components/OTP';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/otp' element={<OTP />} />
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
