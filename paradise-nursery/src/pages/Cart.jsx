import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalAmount } = useSelector((state) => state.cart);

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty. Start adding some plants!</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>${item.price} each</p>
                </div>

                <div className="quantity-controls">
                  <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                </div>

                <p className="item-total">${(item.price * item.quantity).toFixed(2)}</p>

                <button 
                  className="remove-btn"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total: ${totalAmount.toFixed(2)}</h2>
          </div>

          <div className="cart-actions">
            <button onClick={() => navigate('/products')} className="continue-btn">
              Continue Shopping
            </button>
            <button 
              onClick={() => alert("Payment feature is coming soon!")}
              className="checkout-btn"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;