import header from '../assets/AC-Repair3.jpg';
import us01 from '../assets/AC-04.jpg';
import us02 from '../assets/hvac-team-02.jpg';
import icon1 from '../assets/rocket-launch.png';
import icon2 from '../assets/telescope_sm.png';
import icon3 from '../assets/heart.png';
import '../styles/about-us.scss';
import 'animate.css';
import { Link } from 'react-router-dom';

const AboutUs = () => <>
  <div className="contact px-5 about-us">
    <div className="section-header contact-h">
      <h2 className="prods-title text-center mb-5 pt-4">
        <b>Nosotros</b>
      </h2>
    </div>
    <section className="container mb-5 pb-3 px-lg-5">
      <div className="cont-div col-xl-10 text-justify">
        <article id="AcercaDe" className="ad d-md-flex mb-5">
          <div className="ad-left col-md-6 d-flex flex-column justify-content-center">
            <h2>Acerca de Nosotros</h2>
            <p>Enfriando tu mundo desde 2006</p>
            <p>En Alarci, nos apasiona crear ambientes frescos y confortables para nuestros clientes. Somos una empresa familiar con 18 años de experiencia en la industria de la climatización, comprometida con brindar un servicio de excelencia y productos de alta calidad.</p>
          </div>
          <div className="ad-right col-md-6 d-flex">
            <img className="ad-right-img" src={us02} alt="" />
          </div>
        </article>

        <article className="MVV d-md-flex text-center justify-content-between">
          <div className="mision p-4 col-md-4- mb-3 mb-md-0 animate__animated animate__fadeInLeft">
            <h3>Nuestra Misión</h3>
            <img src={icon1} alt="" />
            <p>Brindar soluciones integrales de aire acondicionado a través de un servicio personalizado, eficiente y profesional, superando las expectativas de nuestros clientes y contribuyendo al bienestar de las personas y el medio ambiente.</p>
          </div>
          <div className="vision p-4 col-md-4- mb-3 mb-md-0 animate__animated animate__fadeInUp">
            <h3>Nuestra Visión</h3>
            <img src={icon2} alt="" />
            <p>Ser la empresa líder en climatización en México y el área metropolitana, reconocida por la calidad de nuestros productos y servicios, la satisfacción de nuestros clientes y nuestro compromiso con la sostenibilidad.</p>
          </div>
          <div className="valores p-4 col-md-4- mb-3 mb-md-0 animate__animated animate__fadeInRight">
            <h3>Nuestros Valores</h3>
            <img src={icon3} alt="" />
            <details>
              <summary>Respeto:</summary>
              <p>Tratamos a nuestros clientes, empleados, proveedores y al medio ambiente con respeto y consideración.</p>
            </details>
            <details>
              <summary>Compromiso:</summary>
              <p>Nos comprometemos a brindar un servicio de excelencia y productos de alta calidad, cumpliendo con nuestros plazos y promesas.</p>
            </details>
            <details>
              <summary>Honestidad:</summary>
              <p>Actuamos con honestidad e integridad en todas nuestras relaciones.</p>
            </details>
            <details>
              <summary>Innovación:</summary>
              <p>Buscamos constantemente nuevas y mejores soluciones para satisfacer las necesidades de nuestros clientes.</p>
            </details>
            <details>
              <summary>Trabajo en equipo:</summary>
              <p>Valoramos el trabajo en equipo y la colaboración para lograr objetivos comunes.</p>
            </details>
          </div>
        </article>

        <article className="NSyC us3 d-md-flex- flex-md-row-rev-">
          <div className="NSyC-right col-md-6- py-3">
            <h3>Nuestros Servicios</h3>
            <p>Ofrecemos una amplia gama de servicios de aire acondicionado para satisfacer las necesidades de nuestros clientes residenciales, comerciales e industriales:</p>
            <ul>
              <li>Venta e instalación de equipos de aire acondicionado: Contamos con una amplia variedad de equipos de las mejores marcas para satisfacer las necesidades de cada cliente.</li>
              <li>Mantenimiento preventivo y correctivo: Realizamos mantenimientos preventivos para asegurar el buen funcionamiento de los equipos y mantenemos un servicio de atención inmediata para reparaciones.</li>
              <li>Asesoría especializada: Nuestro equipo de expertos te brindará asesoría personalizada para elegir el equipo de aire acondicionado ideal para tus necesidades.</li>
              <li>Soluciones integrales: Ofrecemos soluciones integrales de climatización, incluyendo diseño, instalación y mantenimiento de sistemas de aire acondicionado.</li>
            </ul>

            <h3>Nuestro Compromiso con la Sostenibilidad</h3>
            <p>En Alarci, estamos comprometidos con la sostenibilidad y el cuidado del medio ambiente. Por ello, promovemos el uso de equipos de aire acondicionado eficientes energéticamente y trabajamos con prácticas responsables para reducir nuestro impacto ambiental.</p>

          </div>
          <div className="NSyC-left col-md-6-">
            <div className="NSyC-left-img"></div>
          </div>
        </article>

        <article className="contactus text-center p-4">
          <h3>Contáctanos</h3>
          <p>Si estás buscando soluciones de aire acondicionado confiables y de alta calidad, no dudes en contactarnos. Nuestro equipo de expertos estará encantado de atenderte y brindarte la asesoría que necesitas.</p>
          {/*<a href="/contacto" className="btn btn-warning btn-lg align-self-center" role="button" aria-pressed="true">Ponte en contacto</a>*/}
          <Link className="btn btn-warning btn-lg align-self-center mb-3" to="/contacto">
            Contacto
          </Link>
          <p className="article-footer font-italic">¡Permítenos crear un ambiente fresco y confortable para ti!</p>
        </article>
      </div>
    </section>
  </div>
</>;

export default AboutUs;
