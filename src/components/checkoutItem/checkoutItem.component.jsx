import React from 'react'

import { removeItem , addItem } from '../../reduxs/cart/cart.actions';
import './checkoutItem.styles.scss';
import { clearItemFromCart } from '../../reduxs/cart/cart.actions';
import { connect } from 'react-redux';
const CheckoutItem = ( {cartItem ,clearItemFromCart,removeItem , addItem}) =>{
    const {name , imageUrl , price , quantity} = cartItem ; 
return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="img" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
            </span>
        <span className="price">{price}</span>
        <span className="remove-button" onClick={()=>clearItemFromCart(cartItem)}>&#9747;</span>
    </div>
)
}

const mapDispatchToProps = (dispatch) => ({
    clearItemFromCart : item => dispatch(clearItemFromCart(item)),
    removeItem : item => dispatch(removeItem(item)),
    addItem : item => dispatch(addItem(item)),
})
export default connect(null , mapDispatchToProps)(CheckoutItem);