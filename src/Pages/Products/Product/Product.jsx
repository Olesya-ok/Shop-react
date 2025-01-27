import "./Product.css";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../CartContext/CartContext";

const Product = () => {
    const [product, setProduct] = useState({});
    let { productId } = useParams();
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then((res) => setProduct(res.data));
    }, [productId]);

    const onAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="Product">
            <img src={product.image} alt={product.title} />
            <div className="Container">
                <h1>{product.title}</h1>
                <h2>Price: {product.price}$</h2>
                <h2>Category: {product.category}</h2>
                <p>{product.description}</p>
                <button onClick={onAddToCart}>Add to Basket</button>
            </div>
        </div>
    );
};

export default Product;

