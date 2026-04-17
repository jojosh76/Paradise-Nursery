import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';   // On va le créer juste après

import Header from './components/Header';
import ProductList from './components/ProductList';
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
                <a href="/products"><button>Get Started</button></a>
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