import { Outlet, Link } from "react-router-dom";
const HostLayout = () => {
  return (
    <>
      <div className="nav-links">
        <Link to="/host/dashboard">Dashboard</Link>
        <Link to="/host/income">Income</Link>
        <Link to="/host/vans">Vans</Link>
        <Link to="/host/reviews">Reviews</Link>
      </div>
      <Outlet />
    </>
  );
};
export default HostLayout;
