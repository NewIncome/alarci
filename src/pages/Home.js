import logo from '../assets/hvac-icon-02.webp';
//import team from '../assets/hvac-team-01.jpg';
import case1 from '../assets/hvac-case-01.webp';
import prj1 from '../assets/prj-01.jpg';
import prj2 from '../assets/prj-02.jpg';
import prj3 from '../assets/prj-03.jpg';
import prj4 from '../assets/prj-04.jpg';
import prj5 from '../assets/prj-05.jpg';
import facebook from '../assets/facebook-ico.png';
import instagram from '../assets/instagram-ico.png';
import youtube from '../assets/youtube-ico.png';
import ico01 from '../assets/icon-01.png';
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
    <section id="Section2" className="container px-3 px-md-5">
      <div className="d-md-flex text-md-left text-center justify-content-md-between">
        <h2 className="h2-contact-btn">Cuéntanos de tu proyecto y con gusto te asistiremos.</h2>
        <Link className="btn btn-warning btn-lg align-self-center" to="/contacto">
          Ponte en contacto
        </Link>
      </div>
    </section>
    {/* ----- Section 3 - Nosotros ----- */}
    <section id="Section3" className="container px-0 pt-0 rounded">
      <div class="jumbotron">
        <h1 class="display-4 mb-5">¿Tienes un proyecto de aire acondicionado?</h1>
        <p class="lead">En Alarci podemos ayudarte, ya que somos una empresa con más de 35 años de experiencia en la elaboración de proyectos de ingeniería de climatización para aplicaciones residenciales, comerciales e industriales.</p>
        <hr class="my-5" />
        <p>Brindamos el servicio de suministro, instalación, mantenimiento y reparación de equipos de aire acondicionado, ductos de aire acondicionado, sistemas de extracción, sistemas de calefacción y ventilación, así como sistemas de refrigeración.</p>
        <p class="lead my-4">
          <a class="btn btn-danger btn-lg" href="#" role="button">Conocenos</a>
        </p>
      </div>
    </section>
    {/* ----- Section 4 - Testimonios ----- */}
    <section id="Section4" className="pt-5 px-md-5">
      <div className="container pb-5">
        <div className="header text-center pb-4">
          <h1 className="sec3-h">
            <b>Nue</b><b className="h-line">stros clien</b><b>tes</b>
          </h1>
          <p className="sec4-p pt-3">Los siguientes son algunos de nuestros proyectos terminados</p>
        </div>
        <div className="cards d-md-flex flex-wrap w-100 align-content-between justify-content-between pb-4">
          <div className="card mb-3">
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
        <b>Nue</b><b className="h-line">stros Servic</b><b>ios</b>
      </h1>
      <div className="row">
        <div className="project" id="prj1">
          <div className="prj-left">
            <img src={prj1} alt="" />
            <span className="blur"></span>
          </div>
          <div className="prj-right">
          <h3 className="h3 prj-title">Flujo Laminar</h3><i>Comercial • Industrial</i>
            <p className="p prj-text">El flujo laminar es esencial en proyectos de aire acondicionado y salas limpias. Se caracteriza por un movimiento ordenado y suave del fluido, con partículas siguiendo líneas de corriente paralelas. Las salas blancas utilizan flujos unidireccionales (flujos laminares) para proteger procesos críticos, y las velocidades recomendadas varían según normativas. En resumen, el flujo laminar garantiza áreas de trabajo libres de partículas y contaminación, protegiendo productos durante la manipulación y aislando el entorno circundante.</p>
            <div className="prj-codes">
              <a href="" className="bttn-l" target="_blank" rel="noreferrer noopener">
                <span>Más información </span>
                <img src={ico01} alt="" className="s-ico" />
              </a>
            </div>
            {/*<div className="co-op">Detalle addicional</div>*/}
          </div>
        </div>

        <div className="project"  id="prj2">
          <div className="prj-right">
            <h3 className="h3 prj-title">Extracción</h3><i>Residencial • Comercial • Industrial</i>
            <p className="p prj-text">La extracción en proyectos de aire acondicionado es esencial para mantener la calidad del aire interior, eliminando el aire viciado y reemplazándolo con aire fresco. Los sistemas de extracción, que pueden incluir ventiladores y ductos, deben diseñarse considerando el tamaño del espacio, la cantidad de personas y las fuentes de contaminación, cumpliendo con las normativas locales. Un buen mantenimiento, como la limpieza regular de los ductos, es vital para su funcionamiento óptimo.</p>
            <div className="prj-codes">
              <a href="" className="bttn-l" target="_blank" rel="noreferrer noopener">
                <span>Más información </span>
                <img src={ico01} alt="" className="s-ico" />
              </a>
            </div>
            {/*<div className="co-op">Detalle addicional</div>*/}
          </div>
          <div className="prj-left">
            <span className="blur"></span>
            <img src={prj2} alt="" />
          </div>
        </div>

        <div className="project" id="prj1">
          <div className="prj-left">
            <img src={prj3} alt="" />
            <span className="blur"></span>
          </div>
          <div className="prj-right">
          <h3 className="h3 prj-title">Chillers</h3><i>Comercial • Industrial</i>
            <p className="p prj-text">Los chillers son sistemas de aire acondicionado que enfrían agua para distribuir aire frío a través de una Unidad Manejadora de Aire (UMA) en espacios grandes como oficinas y hospitales. Funcionan enfriando el agua hasta aproximadamente 6°C y utilizan componentes como compresor, condensador, evaporador y válvula de expansión. Existen dos tipos principales: enfriados por aire y enfriados por agua, siendo estos últimos más eficientes energéticamente. Son ideales para proyectos de gran escala debido a su capacidad y eficiencia.</p>
            <div className="prj-codes">
              <a href="" className="bttn-l" target="_blank" rel="noreferrer noopener">
                <span>Más información </span>
                <img src={ico01} alt="" className="s-ico" />
              </a>
            </div>
            {/*<div className="co-op">Detalle addicional</div>*/}
          </div>
        </div>

        <div className="project"  id="prj2">
          <div className="prj-right">
            <h3 className="h3 prj-title">Aire Acondicionado</h3><i>Residencial • Comercial • Industrial</i>
            <p className="p prj-text">○ Los proyectos de aire acondicionado y calefacción en aplicaciones residenciales buscan proporcionar confort térmico en los hogares mediante sistemas como unidades split, calefacción central y bombas de calor, considerando la eficiencia energética y la integración estética.
            <br/>○ En el ámbito comercial, se utilizan sistemas como VRV, UMA y chillers para mantener un ambiente confortable y saludable en oficinas y tiendas, enfriando grandes áreas con control zonal y eficiencia energética.
            <br/>○ En aplicaciones industriales, estos proyectos controlan la temperatura y humedad en procesos industriales y protegen equipos sensibles mediante sistemas HVAC a gran escala, chillers industriales y enfriamiento por evaporación. Estos proyectos requieren alta capacidad de enfriamiento, robustez y eficiencia operativa, asegurando un ambiente adecuado y eficiente en cada aplicación.</p>
            <div className="prj-codes">
              <a href="" className="bttn-l" target="_blank" rel="noreferrer noopener">
                <span>Más información </span>
                <img src={ico01} alt="" className="s-ico" />
              </a>
            </div>
            {/*<div className="co-op">Detalle addicional</div>*/}
          </div>
          <div className="prj-left">
            <span className="blur"></span>
            <img src={prj4} alt="" />
          </div>
        </div>

        <div className="project" id="prj1">
          <div className="prj-left">
            <img src={prj5} alt="" />
            <span className="blur"></span>
          </div>
          <div className="prj-right">
          <h3 className="h3 prj-title">Equipos de Precisión</h3><i>Comercial • Industrial</i>
            <p className="p prj-text">Los proyectos de aire acondicionado para equipos de precisión son esenciales para mantener condiciones óptimas de temperatura y humedad en entornos críticos como centros de datos, laboratorios, y salas de telecomunicaciones. Estos sistemas ofrecen control preciso de temperatura y humedad, alta eficiencia energética y son aplicables en diversos entornos como data centers, laboratorios y hospitales, asegurando la protección de equipos sensibles y optimizando el uso de recursos.</p>
            <div className="prj-codes">
              <a href="" className="bttn-l" target="_blank" rel="noreferrer noopener">
                <span>Más información </span>
                <img src={ico01} alt="" className="s-ico" />
              </a>
            </div>
            {/*<div className="co-op">Detalle addicional</div>*/}
          </div>
        </div>

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
