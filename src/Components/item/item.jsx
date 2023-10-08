import './item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, title, imageProduct, type, price, alt }) => {
  return (
    <div className='product'>
      <h2>{title}</h2>
      <img src={imageProduct} alt={alt} className='product__Img' />
      <p className='product__Price'>Precio: $ {price}</p>
      <p>Categoría: {type}</p>

      <div>
        <Link to={`/item/${id}`} className='detalle'>
          Ver Detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
