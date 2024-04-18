import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Interviews from './pages/Interviews';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import AddInterview from './components/Interview/AddInterview';
import Directory from './pages/Directory';
import Club from './components/Directory/Club';
import Company from './components/Directory/Company';
import Culture from './components/Directory/Culture';
import Public from './components/Directory/Public';
import Advert from './pages/Advert';
import Contact from './pages/Contact';
import Market from './pages/Market';
import UserUpdatePage from './components/User/UserUpdatePage';
import Info from './pages/Info';
import History from './pages/History';


const MainApp: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path='/directory' element={<Directory/>}/>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/addInterview" element={<AddInterview/>}/>
          <Route path="/club" element={<Club/>}/>
          <Route path="/company" element={<Company/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/kultur" element={<Culture/>}/>
          <Route path="/public" element={<Public/>}/>
          <Route path="/advert" element={<Advert/>}/>
          <Route path="/market" element={<Market/>}/>
          <Route path="/userUpdate" element={<UserUpdatePage/>}/>
          <Route path='/info' element={<Info/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
  );
};
export default MainApp;