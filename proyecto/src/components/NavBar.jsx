import milogo from '../Imagenes/Logo.png'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-5 px-5">
            <div className="container-fluid">
                <img src={milogo} alt="imagen" height="30"></img>
              <Link className="navbar-brand al" to="/">GameARG</Link>
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-Link al" to="/category/Shooter">Shooter</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-Link al" to="/category/Deportes">Deportes</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-Link al" to="/category/Survival">Survival</Link>
                  </li>
                  <li className="nav-item al">
                    <CartWidget/>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    );
}

export default NavBar;