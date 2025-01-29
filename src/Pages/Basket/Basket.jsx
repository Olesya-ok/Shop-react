import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./Basket.css";
import Products from "../Products/Products";
import {useNavigate} from "react-router-dom";

const Basket = () => {
    const { cart, removeFromCart, clearCart, addToCart } = useContext(CartContext);

    const totalAmount = cart.reduce((acc, product) => acc + product.price * product.amount, 0);
    const formattedTotalAmount = totalAmount.toFixed(2);

    const navigate = useNavigate();

    function goHome() {
        navigate("/");
    }

    return (
        <div className="Basket">
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="CartItems">
                    {cart.map((product) => (
                        <div key={product.id} className="CartItem">
                            <img src={product.image} alt={product.title} />
                            <div>
                                <h2>{product.title}</h2>
                                <p>For one product price: {product.price}$</p>
                                <p>Quantity: {product.amount}</p>
                                <p>Total for all: {product.price * product.amount}</p>
                                <div className="QuantityControls">
                                    <button onClick={() => addToCart(product)}>+</button>
                                    <button
                                        onClick={() =>
                                            product.amount > 1
                                                ? removeFromCart(product.id, false)
                                                : removeFromCart(product.id)
                                        }
                                    > - </button>
                                </div>
                                <button onClick={() => removeFromCart(product.id)}>Remove all</button>

                            </div>
                        </div>
                    ))}
                </div>
            )}
            {cart.length > 0 && (
                <div className="CartActions">
                    <p>Total Amount: {formattedTotalAmount}</p>
                    <button onClick={clearCart}>Clear Cart</button>
                    <button onClick={goHome}>To main page</button>
                    <button onClick={() => alert("Order placed!")}>Place Order</button>
                </div>
            )}
        </div>
    );
};

export default Basket;



