import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './App.css';
import reducers from '../../reducers';

import Counter from '../Counter';
import Display from '../Display';
import Text from '../Text';

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Display />
        <Counter />
        <Text />
      </div>
    </Provider>
  );
}

export default App;
