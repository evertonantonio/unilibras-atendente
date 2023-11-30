import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './screens/Login/Login';
import Chat from './screens/Chat/Chat';


const App = () => {
  return (
    <Router>
      

      <Routes>
        <Route path="/" element={<Login />} > </Route>
      </Routes>

      
      <Routes>
        <Route path="/Chat" element={<Chat />} > </Route>
      </Routes>
      
    </Router>
  );
};

export default App;
