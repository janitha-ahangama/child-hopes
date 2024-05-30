import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AdminDashboard from './pages/AdminDashboard'
import ProjectForm from './pages/ProjectForm'
import EditProject from './pages/EditProject';
import ProjectDetails from './pages/ProjectDetails';
import { AuthContext } from './context/AuthContext'
import './App.css';

const App = () => {
  const {currentUser} = useContext(AuthContext);

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>
  };



  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/admin' element={<RequireAuth><AdminDashboard/></RequireAuth>}/>
        <Route path='/projectform' element={<ProjectForm/>}/>
        <Route path="/editproject/:projectId" element={<RequireAuth><EditProject /></RequireAuth>} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;
