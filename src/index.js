import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';

const el = document.getElementById( 'root' );
const root = createRoot( el );

root.render(
    /*<Provider store={ store }>*/
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    /*</Provider>*/
);
