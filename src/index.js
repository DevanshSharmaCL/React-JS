import React from "react";
import ReactDOM from "react-dom/client";
import Memo from "./Memo";

const root = ReactDOM.createRoot(document.getElementById('root')); // Corrected
root.render(
    <React.StrictMode>
        <Memo />
    </React.StrictMode>
);
 