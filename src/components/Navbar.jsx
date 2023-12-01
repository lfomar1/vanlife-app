import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h1 className="brand-name">
          <Link to="/">#VAN LIFE</Link>
        </h1>

        <div className="nav-links">
          <Link to="/host">Host</Link>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navbar;
