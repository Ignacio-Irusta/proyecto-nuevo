import React from 'react';
import { useContext } from "react";
import CartContext from './CartContext';
import { Link } from 'react-router-dom';


function CartView() {
    const {itemCart, clear, deletItemInCart, TotalPrice} = useContext(CartContext);
    
    if ( itemCart.length === 0){
    return (
        <div className="container">
            <h2>No HAY Juegos en su Carrito.</h2>
            <Link type="button" className="btn btn-primary" to="/"> Ir al Catalogo de juegos</Link>
        </div>
    );
    } else {
        return (
            <div className="container">
                <table className="table al">
                    <thead>
                        <tr>
                            <th>Juego</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        {itemCart.map(game => {
                            return <tr key={game.id}>
                                <td>{game.GameName}</td>
                                <td>{game.Price}</td>
                                <td>{game.cant}</td>
                                <td>$ {(game.cant * game.Price).toFixed(2)}</td>
                                <td><button onClick={() => deletItemInCart(game.id) } className="bg-danger container mb-3 mt-3">Eliminar producto</button> </td>
                            </tr>

                            })}
                        </tr>
                    </tbody>
                </table>
                <button onClick={ clear } className="bg-info container mb-3 mt-3">Vaciar Carrito de Compra</button>
            </div>
        );
    }
}

export default CartView;