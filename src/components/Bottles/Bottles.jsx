import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './bottles.css';
import { addToLocalStorage, getStoreCart, removeFromLs } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=> {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    useEffect(()=>{
        if(bottles.length > 0){
            const storedCart = getStoreCart();
            const savedCart = [];
            for(const id of storedCart){
                const bottle = bottles.find(bottle => bottle.id === id);
                savedCart.push(bottle)
            }
            setCart(savedCart)
        }
    },[bottles])

    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLocalStorage(bottle.id);
    };

    const handleRemoveFromCart = id => {
        // Visual Cart Remove ui
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart)
        // Remove from LS
        removeFromLs(id);
    }

    return (
        <div>
            <h3>Bottles Available: {bottles.length}</h3>
            
            <Cart cart = {cart} handleRemoveFromCart={handleRemoveFromCart}/>

            <div className="bottle-container">
            {
                bottles.map(bottle => <Bottle
                key={bottle.id}
                bottle={bottle}
                handleAddToCart={handleAddToCart}
                />)
            }
            </div>
        </div>
    );
};

export default Bottles;