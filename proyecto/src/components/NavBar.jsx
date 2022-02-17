import milogo from '../Imagenes/Logo.png'
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div class="container-fluid">
                <img src={milogo} alt="imagen" height="30"></img>
              <a class="navbar-brand" href="#">GameARG</a>
              <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Productos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contactos</a>
                  </li>
                  <li class="nav-item">
                    <CartWidget/>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    );
}

export default NavBar;