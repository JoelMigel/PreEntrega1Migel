import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <span>{item.name}</span>
      <span>{item.price} $</span>
      <button onClick={() => onRemove(item)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
