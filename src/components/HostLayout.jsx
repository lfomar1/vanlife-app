import { Outlet, NavLink } from "react-router-dom";
const HostLayout = () => {
  return (
    <>
      <div className="nav-links">
        <NavLink
          to="."
          end
          className={({ isActive }) => {
            return isActive ? "active-style" : null;
          }}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) => {
            return isActive ? "active-style" : null;
          }}
        >
          Income
        </NavLink>

        <NavLink
          to="reviews"
          className={({ isActive }) => {
            return isActive ? "active-style" : null;
          }}
        >
          Reviews
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) => {
            return isActive ? "active-style" : null;
          }}
        >
          Vans
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};
export default HostLayout;
