import ItemListLink from '../ItemListLink/ItemListLink';
import CardWid from '../cardWidget/cardWidget';
import './navBar.css';
import { Link, useLocation } from 'react-router-dom';

const NavBar = ({ categories }) => {
  const location = useLocation();

  return (
    <nav className='headertotal'>
      <div className='navContainer'>
        <Link to='/' className='linkLogo'>
          <h3 className='titleNav'>H4rdWare-Store</h3>
        </Link>

        <ItemListLink categories={categories} location={location} />

        <CardWid className='Card' />
      </div>
    </nav>
  );
};

export default NavBar;
