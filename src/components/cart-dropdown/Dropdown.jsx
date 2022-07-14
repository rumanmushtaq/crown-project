import React from "react";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/customButton.component";
import {useNavigate} from 'react-router-dom';

import checkoutPage from "../../pages/checkoutPage/checkoutPage.component";
import { selectCartItems } from "../../reduxs/cart/cartSelector";
import  {createStructuredSelector} from 'reselect'
import { connect } from "react-redux";
import "./Dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
  let navigate = useNavigate();

  const goToCheckOut= () => {
    navigate('/checkout')
  }
  return (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      { console.log(cartItems)}{
      cartItems.length ? 
      cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
    : <span className="empty-message">You have not selected any thing</span>}
    </div>
    <CustomButton onClick={()=>goToCheckOut()}>GO TO CHECKOUT</CustomButton>
  </div>
)};

const mapStateToProps = createStructuredSelector ({
  cartItems : selectCartItems
});



export default connect(mapStateToProps)(CartDropdown);
