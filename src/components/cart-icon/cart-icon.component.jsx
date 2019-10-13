import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../asserts/shopping-bag.svg';
import './cart-icon.styles.scss';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { dispatch } from '../../../../../Library/Caches/typescript/3.6/node_modules/rxjs/internal/observable/range';

const CartIcon = ({ toggleCartHidden }) => (
    <div className = 'cart-icon' onClick = {toggleCartHidden}>
        <ShoppingIcon className = 'shopping-icon' />
        <span className = 'item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);