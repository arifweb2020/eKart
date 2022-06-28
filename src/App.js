import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import NavBar from './comonents/navigation/NavBar';


function App() {
  return (
    <Provider store={store}>
      <NavBar/>
      <AppRoutes/>
    </Provider>
  );
}

export default App;
