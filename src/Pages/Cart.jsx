import { useContext } from "react";
import { CartContext } from '../Context/CartContext';
import './cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-img" />
              <div>
                <h2>{item.name}</h2>
                <p>Size: {item.size}</p>
                <p>${item.price}</p>

                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    updateQuantity(item.id, item.size, parseInt(e.target.value))
                  }
                />

                <button onClick={() => removeFromCart(item.id, item.size)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <h2>Total: ${total.toFixed(2)}</h2>
      <button className="checkout-btn">Proceed to Checkout</button>
    </div>
  );
};

export default Cart;