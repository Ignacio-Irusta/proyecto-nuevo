import React from 'react'
import { Link } from 'react-router-dom';

function Item({GameName, Price, Stock, Imagen, id}) {
    return (
        <div className="col-md-3 Es">
            <div class="shadow p-3 mb-5 bg-body rounded card mx-2">
                <img src={Imagen} alt={GameName} class="card-img-top"/>
                <div class="card-body">
                    <h3 class="card-title">{GameName}</h3>
                    <h2 class="text-muted"> Stocks: {Stock}</h2>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <p className="fs-4 badge bg-danger text-wrap">
                            $ {Price}
                        </p>
                    </li>
                </ul>
                <Link className="btn btn-success" to={`/item/${id}`}> Ver mas </Link>
            </div>
           
        </div>
    );
}

export default Item;