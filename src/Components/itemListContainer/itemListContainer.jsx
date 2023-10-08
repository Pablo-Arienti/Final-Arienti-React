import './itemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../itemList/itemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemListContainer = ({ categories }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);

    let collectionRef;
    if (categoriaId) {
      collectionRef = query(
        collection(db, 'products'),
        where('type', '==', categoriaId)
      );
    } else {
      collectionRef = collection(db, 'products');
    }

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoriaId]);

  return (
    
    <div>
    <h1 className='saludo'>Bienvenidos a la tienda de H4rd-Store</h1>
    <h2 className='h2Product'>Estos son los productos:</h2>
    <section className='products__section d-flex justify-content-center'>
      {loading ? ( 
         <div class="spinner-border text-success" role="status">
         <span class="visually-hidden">Cargando...</span>
       </div>
      ) : (
        <div>
          <ItemList products={products} />
        </div>
      )}
    </section>
  </div>
);
}


export default ItemListContainer;
