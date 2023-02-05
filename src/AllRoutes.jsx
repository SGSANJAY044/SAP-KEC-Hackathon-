import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
function AllRoutes() {
    return (
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signin' element={<Register/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    );
  }
  
  export default AllRoutes;