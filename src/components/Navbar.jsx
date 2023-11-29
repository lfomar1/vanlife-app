import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="brand-name">
        <Link to="/">#VAN LIFE</Link>
      </h1>

      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </div>
    </div>
  );
};
export default Navbar;
