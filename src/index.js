import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./All Topics/Custom Hooks/UseCounter";

const root = ReactDOM.createRoot(document.getElementById('root')); // Corrected
root.render(
    <React.StrictMode>
        <Counter />
    </React.StrictMode>
);
 