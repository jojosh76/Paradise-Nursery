import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';   // ← Cette ligne doit marcher après installation

const Header = () => {
  const { totalQuantity } = useSelector(state => state.cart);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Paradise Nursery</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart size={24} />
          <span className="cart-count">{totalQuantity}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;