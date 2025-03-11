import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './signUp/Signup';
import Login from './logIn/Login';
import Welcome from './dashboard/Welcome';

function App() {
  return (
    <div className="sono-font">
        <Routes>  
          <Route index element={<Login/>}/> 
          <Route path='/log-in' element={<Login/>}/>
          <Route path='/sign-up' element={<Signup/>}/>
          <Route path='/welcome' element={<Welcome/>}/>
          <Route path='*' element={<h1>404... Page Not Found</h1>}/> 
        </Routes>
    </div>
  );
}

export default App;
