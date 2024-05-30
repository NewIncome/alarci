import { Link } from 'react-router-dom';
import { caps_first_letter } from '../utils';
import { useEffect } from 'react';

const Products = props => {
  const [products, title] = [props.products, props.title];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [products]);
  
  return (
    <>
    <div className="heading">
      <h2 className="prods-title text-center mb-5 pt-4">
        <b>MÁS DE 35 AÑOS DE EXPERIENCIA EN SERVICIOS DE AIRE ACONDICIONADO</b>
      </h2>
    </div>
    <div className="products d-flex justify-content-center">
      <ul className="ul-box d-flex flex-wrap p-0">
        {products.map(prod => (
          <li className="product card" key={`key-${prod.name}`}>
            <Link
              to={`/${title}/${prod.path}`}
              className="product-link card-body pb-0"
            >
              <div className="prod-frame d-flex justify-content-center">
                <img src={prod.img} alt="" className="prod-img w-100" />
              </div>
              <div className="prod-info text-center">
                <h5 className="prod-name">{prod.name}<span className='p-line'>&#x2015;</span><span className="price">$ {prod.price}</span></h5>
              </div>
            </Link>
          </li>
          ))}
      </ul>
    </div>
    </>
  );
}

export default Products;
