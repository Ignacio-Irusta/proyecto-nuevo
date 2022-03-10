import { useState, createContext  } from 'react';

const CartContext = createContext();

export function CartContextProvider({children}) {
    const [itemCart, setItemCart] = useState([]);

    function addItem(game, cant){
        if (isItemInCart(game.id)) { 
            let index = itemCart.findIndex(i => i.id === game.id);
            let copyCarts = [...itemCart];
            copyCarts[index].cant += cant;
            setItemCart(copyCarts);
        } else {
            const itemToAdd = {...game, cant};
            setItemCart([...itemCart, itemToAdd]);
        }
    }
    function isItemInCart(id){
        itemCart.some(CI => CI.id === id);
    }

    function getItemInCart(id){
        itemCart.find(CI => CI.id === id);
    }

    function clear(){
        setItemCart([]);
    }

    return (
        <CartContext.Provider value={ {addItem, itemCart, clear, getItemInCart} }>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;