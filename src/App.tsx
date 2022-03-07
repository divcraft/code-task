import React from 'react';
import { Provider } from 'react-redux'
import { OrdersContent } from './components';
import { store } from './state'

function App() {
  return (
    <Provider store={store}>
      <OrdersContent />
    </Provider>
  );
}

export default App;
