import { useState } from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LandingPage from './Pages/LandingPage';

function App() {


  return (
    <>

    <Routes>
      <Route element={<LandingPage/>} path='/'/>
      <Route element={<HomePage/>}n path='/home'/>
    </Routes>
      
    </>
  )
}

export default App
