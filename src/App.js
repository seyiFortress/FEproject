import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './signUp/Signup';
import Login from './logIn/Login';
import Welcome from './dashboard/Welcome';

function App() {
  return (
    <div className="sono-font">
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Login/>}/>  */}
           <Route path='/login' element={<Login/>}/>
          {/* <Route path='/sign-up' element={<Signup/>}/> */}
           {/* <Route path='/welcome' element={<Welcome/>}/> */}
          {/* <Route path='*' element={<h1>404... Page Not Found</h1>}/>  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
