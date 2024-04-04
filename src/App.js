import React from 'react'
import Main from './sections/Main'


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Dashboard/Login';
import SignUp from './Dashboard/SignUp';
import Dashboard from './Dashboard/Dashboard';
import MainDashboard from './Dashboard/MainDashboard';
import GlobalStyles from './styles/GlobalStyles';
export default function App() {
  return (
    <>
    <GlobalStyles/>
      <Router>
        <Routes>
          <Route exact path='/' element={<Main/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/SignUp' element={<SignUp/>} />
          <Route exact path='/dashboard' element={<MainDashboard/>} />
        </Routes>
      </Router>
    </>
  )
}