import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/home';
import Login from './Components/Login/login';
import DashBoard from './Components/DashBoard/dashboard';
import Course from './Components/Course/course';

const App = ()=>(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/dashboard' element={<DashBoard/>}></Route>
      <Route path='/course/:title' element={<Course/>}></Route>
    </Routes>
  </BrowserRouter>
)

export default App;
