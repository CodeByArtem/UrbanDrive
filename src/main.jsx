
import  ReactDOM  from 'react-dom/client'

import { ModalProvider } from './components/contex/ModalProvider';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from './App'
import './index.css'
import "modern-normalize";
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ModalProvider>
            <App />
          </ModalProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);