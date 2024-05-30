import logo from '../assets/hvac-icon-02.webp';
import facebook from '../assets/facebook-ico.png';
import instagram from '../assets/instagram-ico.png';
import youtube from '../assets/youtube-ico.png';
import { Link } from 'react-router-dom';

const Home = () =>
  <>
    {/* ----- Section 1 - Carousel ----- */}
    <section id="Section1">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to={0} className="active" />
          <li data-target="#myCarousel" data-slide-to={1} className="" />
          <li data-target="#myCarousel" data-slide-to={2} className="" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="cr-img cr-1 d-block w-100" />
            <div className="container">
              <div className="carousel-caption text-left">
                <h1>Empresa líder en equipos de A/C</h1>
                <p>Diseño, fabricación e instalación</p>
                <p><a className="btn btn-lg btn-primary" href="#" role="button">Conoce más</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cr-img cr-2 d-block w-100" />
            <div className="container">
              <div className="carousel-caption">
                <h1 className="h-c-3">Equipos de la más álta calidad</h1>
                <p></p>
                <p><a className="btn btn-lg btn-success" href="#" role="button">Ver proveedores</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cr-img cr-3 d-block w-100" />
            <div className="container">
              <div className="carousel-caption text-right">
                <h1 className="h-c-3">Servicio de excelencia a nivel industrial</h1>
                <p className="b-c-3">Certificados y regidos por normas gubernamentales</p>
                <p><a className="btn btn-lg bg-org" href="#" role="button">Nuestros proyectos</a></p>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
    {/* ----- Section 2 - Contactanos ----- */}
    <section id="Section2" className="container">
      <div className="d-md-flex text-md-left text-center justify-content-md-between">
        <h2 className="h2-contact-btn">Cuéntenos de su proyecto y con gusto le asistiremos.</h2>
        <a href="#" className="btn btn-primary btn-lg align-self-center" role="button" aria-pressed="true">Ponte en contacto</a>
      </div>
    </section>
    {/* ----- Section 3 - Nosotros ----- */}
    <section id="Section3" className="container">
      <h2 className="pb-4">¿Quienes somos?</h2>
      <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </section>
    {/* ----- Section 3 - Testimonios ----- */}
    <section id="Section4" className="container vh-100 d-flex flex-column px-5">
      <h1 className="sec3-h text-center">
        <b>Cat</b><b className="h-line">egor</b><b>ías</b>
      </h1>
      <div className="row align-content-between justify-content-between">
        <Link className="cs c1 card col-12" to="/jabones">
            <div className="card-body v-center">
              <h3 className="card-title h2 text-center">Jabones</h3>
            </div>
        </Link>
        <Link className="cs c2 card" to="/shampoos">
          <div className="card-body v-center">
            <h3 className="card-title h2 text-center">Shampoos</h3>
          </div>
        </Link>
        <Link className="cs c3 card" to="/velas">
          <div className="card-body v-center">
            <h3 className="card-title h2 text-center">Velas</h3>
          </div>
        </Link>
        <Link className="cs c4 card" to="/balsamos">
          <div className="card-body v-center">
            <h3 className="card-title h2 text-center">Cremas &amp; Balsamos</h3>
          </div>
        </Link>
        <Link className="cs c5 card" to="/materiales">
          <div className="card-body v-center">
            <h3 className="card-title h2 text-center">Materiales</h3>
          </div>
        </Link>
      </div>
    </section>
    {/* ----- Section 4 - Nuestros Servicios ----- */}
    <section id="Section5" className="">
      <h1 className="pb-4">
        <b>Ca</b><b className="h-line">tálo</b><b>go</b>
      </h1>
      <div className="rt">
        <p className="">Si deseas descargar nuestro catálogo de productos da clic en el siguiente botón</p>
        <button type="button" className="dwnld btn btn-warning pb-2 mb-3">
          Descargar Catálogo
        </button>
        <p className="">o si solo quieres visualizarlo te lo mostramos a continuación(próximamente)</p>
      </div>
    </section>
    {/* ----- Section 5 - Contacto ----- */}
    <section id="Section6">
      <div className="contact-text card col-5 p-5">
        <img src={logo} className="sec-img-5 card-img-top" alt="logo" />
        <p className="card-text pt-3 text-muted">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="contacto card col-sm-7 col-12 text-muted">
        <div className="card-body">
          <h4 className="card-title text-primary">Contacto</h4>
          <h6 className="card-title text-muted">Dirección:</h6>
          <p className="card-text">Calle de las Rosas #48, Col. Santa Isabel Tola, Delegación Gustavo A. Madero, CDMX</p>
          <h6 className="card-title text-muted">Teléfonos:</h6>
          <p className="card-text mb-1">55 5458 8637</p>
          <p className="card-text mb-1">55 9240 1958</p>
          <p className="card-text mb-1">55 4271 7127</p>
          <p className="card-text">55 4206 3240</p>
          <h6 className="card-title text-muted">Horario de Atención:</h6>
          <p className="card-text">De Lunes a Viernes de 09:00 a 18:00 horas</p>
        </div>
        <div className="row mt-4">
          <ul className="social list-unstyled d-flex w-75">
            <li><a className="facebook social-link" title="Facebook" href="#" target="_blank" rel="noreferrer noopener">
                <img className="social-ico" src={facebook} alt="facebook link" />
              </a></li>
            <li><a className="instagram social-link" title="Instagram" href="#" target="_blank" rel="noreferrer noopener">
                <img className="social-ico" src={instagram} alt="instagram link" />
              </a></li>
            <li data-toggle="tooltip" data-placement="top" title="Próximamente">
              <a className="youtube social-link pending-link" title="Youtube" href="#" target="_blank" rel="noreferrer noopener">
                <img className="social-ico pending-ico" src={youtube} alt="youtube link" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </>;

export default Home;