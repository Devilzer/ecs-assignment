import React from 'react';
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function Cart() {
    const cart = useSelector(state => state.cart.cart);
    const products = useSelector(state => state.product.products);
    var total = 0;
    for(let item of cart){
      const cartItem = products.find(obj=>obj.bookID===item.id);
      total = total + ((cartItem.price)*item.quantity);
    }
    return (
        <div className="cart-container">
          {cart.length===0 && <div className="empty">
            Cart is empty!
          </div>}
          <div className="cartItems-container">
            {
              cart.map((product,index)=>(
              
              <CartItem
                key={index}
                product = {product}
              />

              ))
            }
          </div>
          
          <div className="total">
             <span>RS</span>&nbsp; {total} &nbsp;&nbsp;
          </div>
      </div>
    )
}

export default Cart;
