import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import Products from "../Pages/Products/Products";
import Adress from "../Pages/Adress/Adress";
import Basket from "../Pages/Basket/Basket";
import Product from "../Pages/Products/Product/Product";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Products />} />
            <Route path="product/:productId" element={<Product />} />
            <Route path="adress" element={<Adress />} />
            <Route path="basket" element={<Basket />} />
        </Route>
    )
);

export default router;





