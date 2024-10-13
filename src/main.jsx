
import  ReactDOM  from 'react-dom/client'

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from './App'
import './index.css'
import "modern-normalize";
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
    
            <App />
   
        </BrowserRouter>
      </PersistGate>
    </Provider>
  // </React.StrictMode>
);