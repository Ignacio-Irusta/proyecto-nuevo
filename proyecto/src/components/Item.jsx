import React from 'react'

function Item({GameName, Price, Stock, Imagen}) {
    return (
        <>
           <h2>{GameName}</h2>
           <p>{Price}</p>
           <img src={Imagen} alt={GameName}></img>
           <p><small>Cantidad disponible: {Stock}</small></p>
           <hr/>
        </>
    );
}

export default Item;