import React, { useState } from 'react';
import { Header } from './components/header';
import { MainContent } from './components/main-content';
import { MainNav } from './components/main-nav';
import { className } from './utils';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenuOpen = () => setIsMenuOpen(!isMenuOpen);
  const classes = className({
    'app': true,
    'is-menu-open': isMenuOpen
  });

  return (
    <div className={classes}>
      <Header toggleMenuOpen={toggleMenuOpen}/>
      <MainNav toggleMenuOpen={toggleMenuOpen}/>
      <MainContent/>
    </div>
  );
}

export default App;
