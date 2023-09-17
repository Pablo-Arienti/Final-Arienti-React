import { Link } from "react-router-dom";
import "./navBar.css"
const ItemListLink = (props) => {
  return (
    <ul className="navContainer">
      {props.categories.map((category, index) => (
        <li key={index} className="btn__nav">
          <Link to={`/categoria/${category}`}>{category}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ItemListLink;
