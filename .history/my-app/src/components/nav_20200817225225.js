import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BottomNavigationAction } from '@material-ui/core';

function Nav() {
  return (
    <div className="App">
      <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
 
    </div>
  );
}

export default Nav;

