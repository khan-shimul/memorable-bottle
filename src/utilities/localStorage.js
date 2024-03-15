const getStoreCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return [];
};

const saveToLocalStorage = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addToLocalStorage = id => {
    const cart = getStoreCart();
    cart.push(id);
    // Save to Local Storage
    saveToLocalStorage(cart)
};

const removeFromLs = id => {
    const cart = getStoreCart();
    const remaining = cart.filter(idx => idx !== id);
    saveToLocalStorage(remaining);
}

export {addToLocalStorage, getStoreCart, removeFromLs}