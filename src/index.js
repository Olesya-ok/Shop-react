import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import router from './routes/Route';
import { CartProvider } from "./Context/CartContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
        <RouterProvider router={router} />
    </CartProvider>
);



