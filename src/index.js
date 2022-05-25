import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from './Game';
import Hooks from './Hooks';
import HookExample from './HookExample';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HookExample />
  </React.StrictMode>
);

