import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import './ProductList.css';   // tu peux créer ce fichier plus tard

const plants = [
  { id: 1, name: "Monstera Deliciosa", price: 25, category: "Indoor Plants", img: "https://source.unsplash.com/random/300x300/?monstera" },
  { id: 2, name: "Snake Plant", price: 18, category: "Indoor Plants", img: "https://source.unsplash.com/random/300x300/?snakeplant" },
  { id: 3, name: "Fiddle Leaf Fig", price: 45, category: "Indoor Plants", img: "https://source.unsplash.com/random/300x300/?figtree" },
  { id: 4, name: "Peace Lily", price: 22, category: "Flowering Plants", img: "https://source.unsplash.com/random/300x300/?peace lily" },
  { id: 5, name: "Aloe Vera", price: 15, category: "Succulents", img: "https://source.unsplash.com/random/300x300/?aloe" },
  { id: 6, name: "ZZ Plant", price: 20, category: "Indoor Plants", img: "https://source.unsplash.com/random/300x300/?zzplant" },
  { id: 7, name: "Pothos", price: 12, category: "Indoor Plants", img: "https://source.unsplash.com/random/300x300/?pothos" },
  { id: 8, name: "Rubber Plant", price: 30, category: "Indoor Plants", img: "https://source.unsplash.com/random/300x300/?rubberplant" },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = (id) => cartItems.some(item => item.id === id);

  return (
    <div className="product-list">
      <h1>Our Plants Collection</h1>

      <div className="categories">
        <h2>Indoor Plants</h2>
        <div className="products">
          {plants.filter(p => p.category === "Indoor Plants").map(plant => (
            <div key={plant.id} className="product-card">
              <img src={plant.img} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>${plant.price}</p>
              <button 
                onClick={() => dispatch(addToCart(plant))}
                disabled={isInCart(plant.id)}
              >
                {isInCart(plant.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>

        <h2>Flowering Plants</h2>
        <div className="products">
          {plants.filter(p => p.category === "Flowering Plants").map(plant => (
            <div key={plant.id} className="product-card">
              <img src={plant.img} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>${plant.price}</p>
              <button 
                onClick={() => dispatch(addToCart(plant))}
                disabled={isInCart(plant.id)}
              >
                {isInCart(plant.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>

        <h2>Succulents</h2>
        <div className="products">
          {plants.filter(p => p.category === "Succulents").map(plant => (
            <div key={plant.id} className="product-card">
              <img src={plant.img} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>${plant.price}</p>
              <button 
                onClick={() => dispatch(addToCart(plant))}
                disabled={isInCart(plant.id)}
              >
                {isInCart(plant.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
