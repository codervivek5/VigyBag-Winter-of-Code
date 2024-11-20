import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLayout from './User/UserLayout';
import Home from './User/pages/Home/Home';
import PA_or_Contro from './User/pages/Popups/PA_or_Contro'
import About from './User/pages/About/About'
import Projects from './User/pages/Projects/Projects'
import Mentors from './User/pages/Mentors/Mentors'
import Auth from './User/pages/Mentors/Login'
import Leaderboard  from './User/pages/Leaderboard/Leaderboard';
import Error  from './User/pages/Error/Error';
import TermsAndConditions from './User/pages/TermsAndConditions/TermsAndConditions';


// Main App Component
const App = () => {
  return (
    <Router>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} /> 
          
          <Route path='about' element={<About/>} /> 
          <Route path='projects' element={<Projects />} /> 
          <Route path='mentors' element={<Mentors />} /> 
          <Route path='auth' element={<Auth/>} /> 
          <Route path='leaderboard' element={<Leaderboard/>} /> 
          <Route path='terms-and-conditions' element={<TermsAndConditions/>} /> 
          

          
        </Route>
        <Route path='select' element={<PA_or_Contro />} /> 
        <Route path='*' element={<Error/>} /> 
      </Routes>
    </Router>
  );
};

export default App;