
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { currentUserSelector } from '../../reduxs/user/user.selectors';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon.component.jsx';
import CartDropdown from '../cart-dropdown/Dropdown';
import { cartHiddenSelector } from '../../reduxs/cart/cartSelector';
import { ReactComponent as Logo } from '../../assest/crown.svg';

import "./Header.styles.scss";



const Header = ({ currentUser, hidden }) => (
  <div className='header'>
  <Link className='logo-container' to='/'>
    <Logo className='logo' />
  </Link>
  <div className='options'>
    <Link className='option' to='/shop'>
      SHOP
    </Link>
    <Link className='option' to='/contact'>
      CONTACT
    </Link>
    {currentUser ? (
      <div className='option' onClick={() => auth.signOut()}>
        SIGN OUT
      </div>
    ) : (
      <Link className='option' to='/signin'>
        SIGN IN
      </Link>
    )}
    <CartIcon />
  </div>
  {hidden ? null : <CartDropdown /> }
</div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  hidden : cartHiddenSelector
});

export default connect(mapStateToProps)(Header);
