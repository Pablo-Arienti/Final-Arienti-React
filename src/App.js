import './App.css';
import ItemDetailContainer from './Components/itemDetailContainer/itemDetailContainer';
import ItemListContainer from './Components/itemListContainer/itemListContainer';
import NavBar from './Components/navBar/navBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/cartContext';
import { Cart } from './Components/cart/cart';
import CheckOut from './Components/checkOut/checkOut';



function App() {
  const categories = ["Procesador", "Motherboard", "Almacenamiento", "RAM", "Placa-de-video"];
  return (

    <div className='app'>

    <CartProvider>

        <BrowserRouter>

              <NavBar categories={categories}/>

              <Routes>

                  <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a H4rd-Store'}/>}></Route>
                  <Route path='/categoria/:categoriaId' element={<ItemListContainer />}></Route>
                  <Route path='/item/:itemId' element={<ItemDetailContainer />}></Route>
                  <Route path='/cart' element={<Cart />}></Route>
                  <Route path='/checkout' element={<CheckOut />}></Route>
                  <Route path='*' element={<h1>404 NOT FOUND</h1>}></Route>
                  

              </Routes>

        </BrowserRouter>

    </CartProvider>
      
    </div>

  );
}

export default App;
