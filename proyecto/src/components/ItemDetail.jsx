import React, {useState} from 'react'
import ItemCount from './ItemCount';
import { useContext } from "react";
import CartContext from './CartContext';

function ItemDetail({game}) {
    let [lim, setLim] = useState(false);
    const { addItem, clear, getItemInCart } = useContext(CartContext);
    let stocksNuevos = game.Stock;

    function onAddCar(count, cant){
        setLim(true);
        addItem(game, cant);
    }
    let itemInCar = getItemInCart(game.id);
    if(itemInCar){
        stocksNuevos = game.Stock - itemInCar.cant;
    }


    return (
        <div className="col-md-3 Es">
            <div className="shadow p-3 mb-5 bg-body rounded card mx-2">
                <img src={game.Imagen} alt={game.GameName} className="card-img-top"/>
                <div className="card-body">
                    <h3 className="card-title">{game.GameName}</h3>
                    { lim? 
                                (<button className="fs-4 badge bg-danger text-wrap">
                                    Terminar Compra
                                </button>
                            )
                    :       (
                                <ItemCount
                                initial = {1}
                                stocks = {stocksNuevos}
                                onAddCar={onAddCar}   
                                />
                            )
                    }
                    <button onClick={ clear } className="bg-info container mb-3 mt-3">Vaciar Carrito de Compra</button>  
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <p className="fs-4 badge bg-danger text-wrap">
                            $ {game.Price}
                        </p>
                    </li>
                </ul>
            </div>
            
        </div>
    );
}

export default ItemDetail;