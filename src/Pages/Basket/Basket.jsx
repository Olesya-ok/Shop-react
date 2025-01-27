import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import "./Basket.css";

const Basket = () => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext); // Получаем данные из контекста

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
                                <p>{product.price}$</p>
                                <button onClick={() => removeFromCart(product.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {cart.length > 0 && (
                <div className="CartActions">
                    <button onClick={clearCart}>Clear Cart</button>
                    <button onClick={() => alert("Order placed!")}>Place Order</button>
                </div>
            )}
        </div>
    );
};

export default Basket;

