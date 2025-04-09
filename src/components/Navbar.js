import logo from '../assets/hvac-icon-02.webp';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

const Navbar = () => {
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && (!dropdownRef.current.contains(event.target))
        || event.target.className == "nav-link"
        || event.target.className == "dropdown-item"
        || event.target.className == "logo") {
      let navbttn = document.querySelector('.navbar-toggler')
      navbttn.className = "navbar-toggler collapsed"
      navbttn.setAttribute('aria-expanded', 'false')

      let toggler = document.getElementById('navbarTogglerDemo03')
      toggler.className = "navbar-collapse flex-grow-0 collapse"
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [dropdownRef]);

  return (
      <nav ref={dropdownRef} className="navbar navbar-expand-lg navbar-light justify-content-between">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <Link to="/" className="navbar-brand">
          <img className="logo" src={logo} alt="nav logo" />
        </Link>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item" key="li1">
              <Link className="nav-link" to="/nosotros">
                Nosotros<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item nav-dot"><span className="nav-link ndot"></span></li>
            <li className="nav-item" key="li2">
              <Link className="nav-link" to="/proyectos">
                Proyectos<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item nav-dot"><span className="nav-link ndot"></span></li>
            <li className="nav-item dropdown" key="li3">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Nuestros Servicios
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="#Section1">Flujo Laminar</Link>
                <Link className="dropdown-item" to="#Section2">Extracción</Link>
                <Link className="dropdown-item" to="#Section3">Chillers</Link>
                <Link className="dropdown-item" to="#Section4">Aire Acondicionado</Link>
                <Link className="dropdown-item" to="#Section5">Equipos de Precisión</Link>
              </div>
            </li>
            <li className="nav-item nav-dot"><span className="nav-link ndot"></span></li>
            <li className="nav-item" key="li4">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
