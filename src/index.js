import React from 'react';
import ReactDOM  from 'react-dom/client';
import Main from './Main';


const main = ReactDOM.createRoot(document.getElementById("root"));
main.render(
    <React.StrictMode>
        <Main salah = "Salah"/>
    </React.StrictMode>
)