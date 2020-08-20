import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import AddPlayerModal from './components/players/AddPlayerModal';
import Shots from './components/shots/Shots';
import PlayerListModal from './components/players/PlayerListModal';
import AddShotsModal from './components/shots/AddShotsModal';
import AddBtn from './components/layout/AddBtn';

import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <AddBtn />
      <div className="container">
        <Shots />
        <AddPlayerModal />
        <AddShotsModal />
        <PlayerListModal />
      </div>
    </Provider>
  );
};

export default App;
