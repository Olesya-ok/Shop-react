import "./ProductItem.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

const ProductItem = ({ product }) => {
    let navigate = useNavigate();
    const { addToCart } = useContext(CartContext);

    const onClickHandler = () => {
        navigate(`/product/${product.id}`);
    };

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="ProductItem">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.price}$</p>
            <button onClick={onClickHandler}>Show more...</button>
            <button onClick={handleAddToCart}>Add to Basket</button>
        </div>
    );
};

export default ProductItem;

