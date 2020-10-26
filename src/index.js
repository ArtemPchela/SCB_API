import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import '../node_modules/bootstrap/scss/bootstrap-grid.scss';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

//languages
import './i18n';

ReactDOM.render(
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <App/>
        </Suspense>
    </BrowserRouter>,
    document.getElementById('root')
);
