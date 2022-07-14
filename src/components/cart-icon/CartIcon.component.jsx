
import React from 'react';
import './CartIcon.styles.scss';
import { ReactComponent as ShoppingIcon } from './../../assest/shopping-bag.svg';

import { selectCartItemsCount } from './../../reduxs/cart/cartSelector'
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../reduxs/cart/cart.actions'
// import CartItem from '../cart-item/cart-item.component';

const CartIcon = ({toggleCartHidden , itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );


  const mapDispatchToProps = dispatch =>({
    toggleCartHidden : () => dispatch(toggleCartHidden())
  })
  
  const mapStateToProps = createStructuredSelector(
    {
    itemCount: selectCartItemsCount
  });
export default connect(mapStateToProps, mapDispatchToProps )(CartIcon)
