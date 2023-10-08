import './itemDetailContainer.css';
import { useState, useEffect } from 'react';
import ItemDetail from '../itemDetail/itemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, 'products', itemId);

    getDoc(docRef)
      .then((response) => {
        if (response.exists()) {
          const data = response.data();
          setProduct({ id: response.id, ...data });
          console.log(itemId)
        } else {
          console.error('El producto no existe.');
          console.log(itemId)
        }
      })
      .catch((error) => {
        console.error('Error al obtener el producto:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div className='itemDetailContainer'>
      {loading ? (
        <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      
      ) : product ? (
        <ItemDetail {...product} />
      ) : (
        <p>No se encontro el producto</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
