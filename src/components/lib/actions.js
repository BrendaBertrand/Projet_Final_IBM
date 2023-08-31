// Action types

export const actions = {
    GET_ITEMS: 'GET_ITEMS',
    ADD_TO_CART: 'ADD_TO_CART',
    UPDATE_CART: 'UPDATE_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    SAVE_CART: 'SAVE_CART', 
    RESET_CART : 'RESET_CART'
};

// Action creators

export const addToCart = (item) => {
    
    return {
        type: actions.ADD_TO_CART,
        payload: { quantity: 1, details: item }
    }
};

export const updateCart = (item, quantity) => {
    return {
        type: actions.UPDATE_CART,
        payload: { item: item, quantity: quantity }
    }
};

export const removeFromCart = (item) => {
    return {
        type: actions.REMOVE_FROM_CART,
        payload: item
    }
};

export const saveCart= (items) => {
    return {
        type: actions.SAVE_CART,
        payload : {items: items}
    }
}
export const resetCart = () => {
    return {
        type : actions.RESET_CART
    }
}