import logo from '../assets/hvac-icon-02.webp';
import { Link } from 'react-router-dom';

const Navbar = () =>
      <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <Link to="/" className="navbar-brand">
          <img className="logo" src={logo} alt="nav logo" />
        </Link>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item" key="li1">
              <Link className="nav-link" to="#">
                Nosotros<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item nav-dot"><span className="nav-link ndot"></span></li>
            <li className="nav-item" key="li1">
              <Link className="nav-link" to="#">
                Proyectos<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item nav-dot"><span className="nav-link ndot"></span></li>
            <li className="nav-item dropdown" key="li2">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Nuestros Servicios
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="#">Flujo Laminar</Link>
                <Link className="dropdown-item" to="#">Extracción</Link>
                <Link className="dropdown-item" to="#">Chillers</Link>
                <Link className="dropdown-item" to="#">Aire Acondicionado</Link>
                <Link className="dropdown-item" to="#">Equipos de Precisión</Link>
              </div>
            </li>
            <li className="nav-item nav-dot"><span className="nav-link ndot"></span></li>
            <li className="nav-item" key="li3">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>;

export default Navbar;
