import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './page/Home';
import Contact from './page/Contract';
import Footer from './component/Footer';


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"  Component={Home} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;