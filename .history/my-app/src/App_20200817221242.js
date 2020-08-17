import React from 'react';
import './App.css';
import "./components/paper"
import "./components/nav"

function App() {
  return (
    <div className="App">
      <LabelBottomNavigation()/>
      <SimplePaper()/>
    </div>
  );
}

export default App;
