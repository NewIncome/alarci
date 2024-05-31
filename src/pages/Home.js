import logo from '../assets/hvac-icon-02.webp';
//import team from '../assets/hvac-team-01.jpg';
import case1 from '../assets/hvac-case-01.webp';
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
        <h2 className="h2-contact-btn">Cuéntanos de tu proyecto y con gusto te asistiremos.</h2>
        <a href="#" className="btn btn-warning btn-lg align-self-center" role="button" aria-pressed="true">Ponte en contacto</a>
      </div>
    </section>
    {/* ----- Section 3 - Nosotros ----- */}
    <section id="Section3" className="container px-0 pt-0 rounded">
      {/*<div className="card flex-row-reverse w-100 border-0">
        <div className="card-body card-left rounded text-white text-left ml-3 p-5">
          <h5 className="card-title"><b className="h-line">Hacemos de tus espacios un lugar más cómodo</b></h5>
          <div className="c-l-p card-text pt-3">
            <p className="ct-p">¿Tienes un proyecto de aire acondicionado?</p>
            <p className="ct-p">En Tecnoclima podemos ayudarte, ya que somos una empresa con más de 35 años de experiencia en la elaboración de proyectos de ingeniería de climatización para aplicaciones residenciales, comerciales e industriales.</p>
            <p className="ct-p">Brindamos el servicio de suministro, instalación, mantenimiento y reparación de equipos de aire acondicionado, ductos de aire acondicionado, sistemas de extracción, sistemas de y ventilación y/o sistemas de refrigeración.</p>
          </div>
        </div>
        <div className="card-img-top card-right">
          <div className="c-r-text card-body rounded">
            <h5 className="card-title">Aire Acondicionado con Alarci</h5>
            <p className="card-text">Conoce las soluciones en aire acondicionado y climatización que tenemos para tu empresa, industria, hogar u oficina.</p>
          </div>
          <img className="c-r-img card-img-top rounded" src={team} alt="Card image cap"/>
        </div>
      </div>*/}
      <div class="jumbotron">
        <h1 class="display-4 mb-5">¿Tienes un proyecto de aire acondicionado?</h1>
        <p class="lead">En Tecnoclima podemos ayudarte, ya que somos una empresa con más de 35 años de experiencia en la elaboración de proyectos de ingeniería de climatización para aplicaciones residenciales, comerciales e industriales.</p>
        <hr class="my-5" />
        <p>Brindamos el servicio de suministro, instalación, mantenimiento y reparación de equipos de aire acondicionado, ductos de aire acondicionado, sistemas de extracción, sistemas de y ventilación y/o sistemas de refrigeración.</p>
        <p class="lead my-4">
          <a class="btn btn-danger btn-lg" href="#" role="button">Conocenos</a>
        </p>
      </div>
    </section>
    {/* ----- Section 4 - Testimonios ----- */}
    <section id="Section4" className="pt-5">
      <div className="container vh-100">
        <div className="header text-center py-4">
          <h1 className="sec3-h">
            <b>Nue</b><b className="h-line">stros clien</b><b>tes</b>
          </h1>
          <p className="sec4-p">Los siguientes son algunos de nuestros proyectos terminados</p>
        </div>
        <div className="cards row w-100 align-content-between justify-content-between">
          <div className="card">
            <img className="card-img-top" src={case1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Proyecto X</h5>
              <h6 className="card-subtitle mb-2 text-muted">Fecha o referencia</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={case1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Proyecto Y</h5>
              <h6 className="card-subtitle mb-2 text-muted">Fecha o referencia</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={case1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Proyecto Z</h5>
              <h6 className="card-subtitle mb-2 text-muted">Fecha o referencia</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ----- Section 5 - Nuestros Servicios ----- */}
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
    {/* ----- Section 6 - Contacto ----- */}
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
