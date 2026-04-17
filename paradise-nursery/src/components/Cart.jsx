import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalAmount } = useSelector(state => state.cart);

  // Fonction pour gérer la diminution de quantité proprement
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeFromCart(item.id)); // Supprime si on descend en dessous de 1
    }
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <button onClick={() => navigate('/products')}>Go to Shop</button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} style={{width: '100px'}} />
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)} each</p>
                </div>

                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                </div>

                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>

                <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
          </div>

          <div className="cart-buttons">
            {/* Correction de la route vers /products */}
            <button onClick={() => navigate('/products')}>Continue Shopping</button>
            <button onClick={() => alert("Payment feature coming soon!")}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
