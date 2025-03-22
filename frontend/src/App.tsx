import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Hero } from './pages/Hero';
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import { Builder } from './pages/Builder';
import { parseXml } from './steps';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/signin" element={<Signin isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/" element={<Hero isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/builder" element={<Builder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


