import { actions } from "./actions";
// const { ADD_TO_CART, SAVE_CART, UPDATE_CART, REMOVE_FROM_CART } = actions;

export const saveToLocaleStorage = object => {
    localStorage.setItem("items", JSON.stringify(object));
}



const initialState = {
    items:
        JSON.parse(localStorage.getItem("items")) != null
            ? JSON.parse(localStorage.getItem("items"))
            : [],
};

export default function onlineStoreApp(state = initialState, action) {
    switch (action.type) {
        case actions.ADD_TO_CART:
            // Première version qui ne tient pas compte de ce qui est déjà dans le panier 
            // return Object.assign({}, state, { items: [...state.items, action.payload] })

            // Deuxième version qui tient compte de ce qui est déjà dans le panier et se base sur UPDATE_CART
            // if (state.items.some(item => item.details.ref === action.payload.details.ref)) {
            //     return Object.assign({}, state, {
            //         items: state.items.map(item => {
            //             return item.details.ref === action.payload.details.ref ? Object.assign({}, item, {
            //                 quantity: action.payload.quantity + item.quantity
            //             }) : item
            //         })
            //     })
            // } else {
            //     return Object.assign({}, state, { items: [...state.items, action.payload] })
            // }

            // Troisième version optimisée pour ne parcourir le caddie qu'une seule fois pour chercher l'index
            let newState = {...state};
            const idx =  newState.items.findIndex( item => item.details.ref === action.payload.details.ref);

            idx >-1 ? newState.items[idx].quantity = action.payload.quantity + newState.items[idx].quantity 
            : newState.items.push(action.payload);

            console.log(newState)

            return Object.assign({}, state, {items: [...newState.items]})
            


        case actions.UPDATE_CART:
            return Object.assign({}, state, {
                items: state.items.map(item => {
                    return item.details.ref === action.payload.item.details.ref ? Object.assign({}, item, {
                        quantity: action.payload.quantity
                    }) : item
                })
            })

        case actions.REMOVE_FROM_CART:
            return Object.assign({}, state, {
                items: state.items.filter(item => {
                    return item.details.ref !== action.payload.details.ref
                })
            })


        case actions.SAVE_CART:
            saveToLocaleStorage(action.payload.items);
            return state//Object.assign({}, state, { items: action.payload.items })

        case actions.RESET_CART: 
            saveToLocaleStorage([]);
            return Object.assign({}, state, {items : []})
            
        default:
            return state
    }
}