import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../../custom-button/custom-button.component';
import CartItem from '../../cart-item/cart-item.components'; 
import { selectCartItems } from '../../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../../redux/cart/cart.actions.js';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className = 'cart-dropdown'>
        <div className = 'cart-items'>
        {
            cartItems.length > 0 
            ?
            cartItems.map(cartItem => (
                <CartItem key = {CartItem.id} item = { cartItem }/>
            ))
            :
            <span className = 'empty-message'>your cart is empty</span>
        }
        </div>
        <CustomButton onClick = {() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

