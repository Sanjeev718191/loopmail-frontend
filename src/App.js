import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signup' element={<Home />} />
        <Route path='/signup' element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
