import React from 'react';
import './App.css';
import "./components/paper"
import "./components/nav"
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function App() {
  return (
    <div className="App">
      <LabelBottomNavigation>
      <SimplePaper>
    </div>
  );
}

export default App;
