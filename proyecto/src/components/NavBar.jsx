import milogo from '../Imagenes/Logo.png'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark mb-5 px-5">
            <div class="container-fluid">
                <img src={milogo} alt="imagen" height="30"></img>
              <Link class="navbar-brand al" to="/">GameARG</Link>
              <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link class="nav-Link al" to="/category/Shooter">Shooter</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-Link al" to="/category/Deportes">Deportes</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-Link al" to="/category/Survival">Survival</Link>
                  </li>
                  <li class="nav-item al">
                    <CartWidget/>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    );
}

export default NavBar;