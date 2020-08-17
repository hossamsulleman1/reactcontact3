import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Demo from './demo';
import LabelBottomNavigation from './components/Nav.js';
import SimplePaper from './components/Paper.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <LabelBottomNavigation/>
      <SimplePaper/>
    </div>
  );
}

export default App;
