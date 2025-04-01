import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
  return (
    <ul id="ul">
      <img src="https://img.freepik.com/premium-vector/craft-purple-tour-bus-icon-suitable-travel-sightseeing-concepts-icon_1076610-19911.jpg" alt="none"/>
      <div className="items">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/services">services</Link></li>
      </div>
    </ul>
  );
};

export default Navbar;