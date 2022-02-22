//Ignore mis comentarios jaja son para acordarme cosas. posdata, carece de CSS pero bueno, ya le vamos a meter brillitos luego xd

import React, {useState, useEffect } from 'react'; // React.useState ponerlo en la funcion  mientras importo react es lo mismo
import Itemslist from './Itemslist';


const ApDatos = [{
    "id": 1,
    "Price": 999,
    "GameName": "Call of Duty: Black Ops 3",
    "Stock": 49,
    "Imagen": "/Imagenes/call-of-duty.webp",
  }, {
    "id": 2,
    "Price": 759,
    "GameName": "Counter Strike: Global Ofensive",
    "Stock": 71,
    "Imagen": "/Imagenes/counter.webp",
  }, {
    "id": 3,
    "Price": 2499,
    "GameName": "Red Dead Redemption II",
    "Stock": 30,
    "Imagen": "/Imagenes/red-dead.jpg",
  }, {
    "id": 4,
    "Price": 1999,
    "GameName": "Day Z",
    "Stock": 80,
    "Imagen": "/Imagenes/day-z.jpg",
  }, {
    "id": 5,
    "Price": 224,
    "GameName": "The Forest",
    "Stock": 68,
    "Imagen": "/Imagenes/forest.webp",
  }, {
    "id": 6,
    "Price": 2440,
    "GameName": "Rust",
    "Stock": 3,
    "Imagen": "/Imagenes/rust.webp",
  }, {
    "id": 7,
    "Price": 5499,
    "GameName": "Fife 2022",
    "Stock": 21,
    "Imagen": "/Imagenes/fifa.jpg",
  }, {
    "id": 8,
    "Price": 4019,
    "GameName": "NBA2K 2022",
    "Stock": 67,
    "Imagen": "/Imagenes/nba.webp",
  }, {
    "id": 9,
    "Price": 3599,
    "GameName": "Forza Horizon 5",
    "Stock": 85,
    "Imagen": "/Imagenes/forzahorizon.jpg",
  }] //Con mockaroo una app para construir items.

function datos() {
    return new Promise((resolve, reject) => {
        let error = false;

        setTimeout( () => {
            if(error) {
                reject(new Error("Error en los datos"))
            } else {
                resolve(ApDatos);
            }
        }, 2000);
    })
}// Promesa flecha


function ItemsListContainer() {
    const [game, setGame] = useState([]);  //Asi guardo un array vacio.

    useEffect( () =>{
        let solicitud = datos();

        solicitud.then( (datosRespuesta) => {
            setGame(datosRespuesta);
        }).catch((errorReject) =>{
            console.log(errorReject);
        })

    },[]); // Con el useEffect evito que se cree un bucle infinito la mayoria de las veces.

    return (
        <div>
            
            <Itemslist game = {game} />
        </div> // game es distinto al game que guarde en la variable const, solo que se puede usar el mismo nombre.
    );
}

export default ItemsListContainer;