import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { FaTrash } from 'react-icons/fa';
import './CartPage.css';

const CartPage = () => {
  const GlobalState = useContext(CartContext);
  const state = GlobalState.state;
  console.log('state', state)
  const dispatch = GlobalState.dispatch
  return (
    <>
      <ul className='cart-list'>
        {state.map((product, index) => (
          <li key={index}>
            {console.log('product', product)}
            <img src={product.image} alt={product.title} />
            <span>{product.title}</span>
            <span className='cart-price'>{product.price}</span>
            <button><FaTrash /></button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CartPage