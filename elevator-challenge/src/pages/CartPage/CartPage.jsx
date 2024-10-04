import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';
import './CartPage.css';

const CartPage = () => {
  const GlobalState = useContext(CartContext);
  const state = GlobalState.state;
  const dispatch = GlobalState.dispatch;

  const total = state.reduce((total, product) => {
    return (total + product.price * product.quantity)
  }, 0)

  return (
    <>
      {state.length === 0 ? (
        <div className="empty-cart-message">
          <svg width="0" height="0">
            <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop stopColor="#55AADD" offset="0%" />
              <stop stopColor="#637EEA" offset="100%" />
            </linearGradient>
          </svg>
          <FaShoppingCart className='theme-icon' style={{ fill: "url(#blue-gradient)" }} />
          <p>Your cart is currently empty.</p>
        </div>
      ) : (
        <>
          <ul className='cart-list'>
            {state.map((product, index) => (
              <li key={index}>
                <img src={product.image} alt={product.title} />
                <span>{product.title}</span>
                <span className='cart-price'>{(product.quantity * product.price).toFixed(2)}</span>
                <div className='product-quantity'>
                  <button
                    onClick={() => {
                      if (product.quantity > 1) {
                        dispatch({ type: 'DECREASE', productPayload: product });
                      }
                    }}
                  >
                    -
                  </button>
                  <p>{product.quantity}</p>
                  <button onClick={() => dispatch({ type: 'INCREASE', productPayload: product })}>
                    +
                  </button>
                </div>
                <button className='remove' onClick={() => dispatch({ type: 'REMOVE', productPayload: product })}>
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>

          <div className='total'>
            <strong>
              {total.toFixed(2)}
            </strong>
          </div>
        </>


      )}
    </>
  );
};

export default CartPage;
