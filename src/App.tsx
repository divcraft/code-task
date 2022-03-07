import React from 'react';
import { Provider } from 'react-redux'
import { List } from './components/List';
import { store } from './state'

function App() {
  return (
    <Provider store={store}>
      <List />
    </Provider>
  );
}

export default App;
