

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { DefaultLayout } from './layouts/default-layout.tsx';

import Users from './views/Users.tsx';
import About from './views/About.tsx';
import Home from './views/Home.tsx';

import './App.css'

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Navigate to="/home" /> } />
      <Route path='/home' element={ <Home /> } />
      <Route element={ <DefaultLayout /> }>
        <Route path='/users' element={ <Users /> } />
        <Route path='/about' element={ <About /> } />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
