

//Traigo la libreria de REACT
import React from 'react';

//Traigo la libreria de ReactDOM
import ReactDOM from 'react-dom/client';

import App from "./App.js"
import NavBar from './components/NavBar.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NavBar/>);