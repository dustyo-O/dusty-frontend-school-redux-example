import React from 'react';

import { CountButton } from './components/CountButton/CountButton';
import { Ducks } from './components/Ducks/Ducks';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <CountButton />
      <Ducks />
    </div>
  );
}

export { App };
