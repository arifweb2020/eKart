import React from 'react';
import { Provider } from 'react-redux';
import  store  from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import NavBar from './components/navigation/NavBar';


let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavBar />
        <AppRoutes />
      </PersistGate>
    </Provider>
  );
}

export default App;
