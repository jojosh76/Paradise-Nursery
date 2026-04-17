import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Ajout de Link
import { Provider } from 'react-redux';
import store from './redux/store';

import Header from './components/Header';
import ProductList from './pages/ProductList'; // VERIFIE BIEN LE DOSSIER ICI
import Cart from './components/Cart';
import AboutUs from './pages/AboutUs';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <div className="home">
              <div className="home-content">
                <h1>Paradise Nursery</h1>
                <p>Bring Nature Into Your Home</p>
                {/* Utilisation de Link au lieu de <a> pour éviter le refresh */}
                <Link to="/products">
                  <button className="get-started-btn">Get Started</button>
                </Link>
              </div>
            </div>
          } />
          
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;