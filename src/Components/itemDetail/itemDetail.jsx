import './itemDetail.css';
import ItemCount from '../itemCount/itemCount';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';


const ItemDetail = ({ id, title, imageProduct, type, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleAddToCart = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      title, 
      price,
    };

    addItem(item, quantity);
  };

  return (
    <div className='product'>
      <h2>{title}</h2>
      <img src={imageProduct} alt={title} className='product__Img' />
      <p className='product__Price'>Precio: $ {price}</p>
      <p>Categoría: {type}</p>
      <p>Stock disponible: {stock}</p>

      <div>
        {quantityAdded > 0 ? (
          <Link to='/cart' className='carrito'>
            Terminar compra
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleAddToCart} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
