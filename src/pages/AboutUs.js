import header from '../assets/AC-Repair3.jpg';
import us01 from '../assets/AC-04.jpg';
import us02 from '../assets/hvac-team-02.jpg';
import '../styles/about-us.scss';
import { Link } from 'react-router-dom';

const AboutUs = () => <>
  <div className="contact px-5 about-us">
    <div className="section-header contact-h">
      <h2 className="prods-title text-center mb-5 pt-4">
        <b>Nosotros</b>
      </h2>
    </div>
    <section className="container mb-5 pb-3 px-lg-5">
      <article className="col-lg-8 text-justify">
        <div className="us1">
          <h2>Acerca de Nosotros</h2>
          <p>Enfriando tu mundo desde 2006</p>
          <p>En Alarci, nos apasiona crear ambientes frescos y confortables para nuestros clientes. Somos una empresa familiar con 18 años de experiencia en la industria de la climatización, comprometida con brindar un servicio de excelencia y productos de alta calidad.</p>
        </div>
        <div className="us2">
          <div className="us-left">
            <h3>Nuestra Misión</h3>
            <p>Brindar soluciones integrales de aire acondicionado a través de un servicio personalizado, eficiente y profesional, superando las expectativas de nuestros clientes y contribuyendo al bienestar de las personas y el medio ambiente.</p>

            <h3>Nuestra Visión</h3>
            <p>Ser la empresa líder en climatización en México y el área metropolitana, reconocida por la calidad de nuestros productos y servicios, la satisfacción de nuestros clientes y nuestro compromiso con la sostenibilidad.</p>

            <h3>Nuestros Valores</h3>
            <ul>
              <li>Respeto: Tratamos a nuestros clientes, empleados, proveedores y al medio ambiente con respeto y consideración.</li>
              <li>Compromiso: Nos comprometemos a brindar un servicio de excelencia y productos de alta calidad, cumpliendo con nuestros plazos y promesas.</li>
              <li>Honestidad: Actuamos con honestidad e integridad en todas nuestras relaciones.</li>
              <li>Innovación: Buscamos constantemente nuevas y mejores soluciones para satisfacer las necesidades de nuestros clientes.</li>
              <li>Trabajo en equipo: Valoramos el trabajo en equipo y la colaboración para lograr objetivos comunes.</li>
            </ul>
          </div>
          <div className="us-right">
            <img className="w-100" src={us01} alt="" />
          </div>
        </div>
        <div className="us3">
          <div className="us-left">
            <img className="" src={us02} alt="" />
          </div>
          <div className="us-right">
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

            <h3>Contáctanos</h3>
            <p>Si estás buscando soluciones de aire acondicionado confiables y de alta calidad, no dudes en contactarnos. Nuestro equipo de expertos estará encantado de atenderte y brindarte la asesoría que necesitas.</p>
            {/*<a href="/contacto" className="btn btn-warning btn-lg align-self-center" role="button" aria-pressed="true">Ponte en contacto</a>*/}
            <Link className="btn btn-warning btn-lg align-self-center mb-3" to="/contacto">
              Contacto
            </Link>
          </div>
        </div>
        <p className="article-footer">¡Permítenos crear un ambiente fresco y confortable para ti!</p>
      </article>
    </section>
  </div>
</>;

export default AboutUs;
