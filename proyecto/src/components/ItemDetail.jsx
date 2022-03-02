import React from 'react'

function ItemDetail({game}) {
    return (
        <div className="col-md-3 Es">
            <div class="shadow p-3 mb-5 bg-body rounded card mx-2">
                <img src={game.Imagen} alt={game.GameName} class="card-img-top"/>
                <div class="card-body">
                    <h3 class="card-title">{game.GameName}</h3>
                    <h2 class="text-muted"> Stocks: {game.Stock}</h2>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
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