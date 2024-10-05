import React from 'react';
import './styles/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './pages/MainLayout';

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
