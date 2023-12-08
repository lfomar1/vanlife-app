import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h1 className="brand-name">
          <Link to="/">#VAN LIFE</Link>
        </h1>

        <div className="nav-links">
          <NavLink
            to="/host"
            className={({ isActive }) => {
              return isActive ? "active-style" : null;
            }}
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return isActive ? "active-style" : null;
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) => {
              return isActive ? "active-style" : null;
            }}
          >
            Vans
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => {
              return isActive ? "active-style" : null;
            }}
          >
            <span className="material-symbols-outlined">login</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Navbar;
