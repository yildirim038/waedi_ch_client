import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import Home from './pages/Home';
import Register from './pages/Register';
import Interviews from './pages/Interviews';
import Galleries from './pages/Galleries';
import Events from './pages/Events';
import AddInterview from './components/Interview/AddInterview';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/galleries" element={<Galleries />} />
          <Route path="/events" element={<Events />} />
          <Route path="/addInterview" element={<AddInterview/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
