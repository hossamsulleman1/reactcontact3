import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Paper from './components/Paper';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <SimplePaper/>
    </div>
  );
}

export default App;
