import React from 'react';
import './cart.css';
import PropTypes from 'prop-types';

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div className='cart-container'>
            <h4>Cart: {cart.length}</h4>
            {cart.map(bottle => <div>
                <img src={bottle.img}/>
                <button onClick={()=> handleRemoveFromCart(bottle.id)}>Remove</button>
            </div>)}
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;