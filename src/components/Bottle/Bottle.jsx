import React from 'react';
import './bottle.css';
import PropTypes from 'prop-types';

const Bottle = ({bottle, handleAddToCart}) => {
    const {name, img, price} = bottle;
    return (
        <div className='bottle'>
            <h4>{name}</h4>
            <img src={img} alt="" />
            <p>${price}</p>
            <button onClick={()=> handleAddToCart(bottle)}>Purchase Now</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle : PropTypes.object.isRequired,
    handleAddToCart : PropTypes.func.isRequired
}

export default Bottle;