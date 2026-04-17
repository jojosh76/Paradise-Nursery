import React, { useState } from 'react';
import './App.css';
import ProductList from './pages/ProductList';   // ou './components/ProductList'
import Cart from './components/Cart';
import AboutUs from './pages/AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="App">
      {!showProductList ? (
        // Landing Page
        <div className="home">
          <div className="home-content">
            <h1>Paradise Nursery</h1>
            <p>Bring Nature Into Your Home</p>
            <button onClick={() => setShowProductList(true)}>
              Get Started
            </button>
          </div>
        </div>
      ) : (
        // Affichage de la liste des produits
        <ProductList />
      )}

      {/* Tu peux ajouter la navigation plus tard */}
    </div>
  );
}

export default App;
