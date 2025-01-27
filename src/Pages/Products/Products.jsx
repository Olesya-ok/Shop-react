import {useEffect, useState} from "react";
import axios from "axios";
import ProductItem  from "./ProductItem/ProductItem";
import "./Products.css"


const Products = () => {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                setProducts(response.data);
            })
    }, []);

    return (
        <div className="Products">
            {
                products.map((product) => <ProductItem product={product} key={product.id} />)
            }
        </div>
    )
}

export default Products;