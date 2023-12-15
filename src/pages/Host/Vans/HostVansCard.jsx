import { useLoaderData, Link, NavLink, Outlet } from "react-router-dom";
import { getHostVans } from "../../../api";
export const loader = ({ params }) => {
  return getHostVans(params.id);
};
const HostVansCard = () => {
  const linkStyle = {
    display: "flex",
    alignItems: "center",
  };
  const hostVanDetail = useLoaderData();

  return (
    <>
      <Link to=".." relative="path" style={linkStyle}>
        <span className="material-symbols-outlined">arrow_back</span>{" "}
        <p className="back-to-vans"> To all vans </p>
      </Link>
      <div className="vans-detail-list">
        <div>
          {
            <header
              key={hostVanDetail.id}
              style={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <img
                src={hostVanDetail.imageUrl}
                alt="van-image"
                style={{ width: "200px", borderRadius: "10px" }}
              />
              <div>
                <p>{hostVanDetail.type}</p>
                <h2>{hostVanDetail.name}</h2>
                <p>${hostVanDetail.price}/day</p>
              </div>
            </header>
          }
        </div>
        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            end
            className={({ isActive }) => (isActive ? "active-style" : null)}
          >
            Detail
          </NavLink>
          <NavLink
            to="pricing"
            className={({ isActive }) => (isActive ? "active-style" : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            className={({ isActive }) => (isActive ? "active-style" : null)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </>
  );
};
export default HostVansCard;
