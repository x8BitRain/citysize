import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import MapView from './components/Map.jsx';
import MapUI from './components/MapUI.jsx';

function App() {
  return (
    <React.Fragment>
    <MapView />
    <MapUI />
    </React.Fragment>
  );
}

export default App;
