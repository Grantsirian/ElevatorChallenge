import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FaTrash } from 'react-icons/fa';
import './CartPage.css';

const CartPage = () => {
  const GlobalState = useContext(CartContext);
  const state = GlobalState.state;
  const dispatch = GlobalState.dispatch;

  return (
    <>
      {state.length === 0 ? (
        <div className="empty-cart-message">
          <p>Your cart is currently empty.</p>
        </div>
      ) : (
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
              <button onClick={() => dispatch({ type: 'REMOVE', productPayload: product })}>
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CartPage;
