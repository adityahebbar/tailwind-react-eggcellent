import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleMobileMenu() {
      if (window.innerWidth > 752) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener('resize', handleMobileMenu);

    return () => window.removeEventListener('resize', handleMobileMenu);
  }, []);

  const toggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <Navbar toggle={toggle} />
      <Dropdown isMenuOpen={isMenuOpen} toggle={toggle} />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/menu" component={Menu} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
