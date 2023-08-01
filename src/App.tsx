// src/App.tsx

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      {/* Your components and routes go here */}
      <div className="App">
        {/* Your app content */}
      </div>
    </Provider>
  );
}

export default App;
