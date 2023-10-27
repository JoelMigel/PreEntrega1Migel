import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, onRemove }) => {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default Cart;

