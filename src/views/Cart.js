import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateQuantity, removeItem } from '../store/modules/cart'
import product from '../store/modules/product';
import { Image } from 'react-bootstrap';



const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateQuantity({productId, quantity}))
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeItem(productId))
  };
  
  
    return (
        <div>
        <h1>Cart :</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product.id}>
                {/* <Image>{item.product.image}</Image> */}
                <h3>{product.name}</h3>
                <p>Price: {item.product.price}</p>
                <p>
                  Quantity:
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.product.id, parseInt(e.target.value))}
                  />
                </p>
                <button onClick={() => handleRemoveItem(item.product.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>

  )
}




export default Cart
