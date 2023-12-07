import { NavLink, Link, useParams, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
const HostVansCard = () => {
  const params = useParams();

  const linkStyle = {
    display: "flex",
    alignItems: "center",
  };
  const [hostVanDetail, setHostVanDetail] = useState([]);
  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setHostVanDetail(data.vans));
  });
  return (
    <>
      <Link to=".." relative="path" style={linkStyle}>
        <span className="material-symbols-outlined">arrow_back</span>{" "}
        <p className="back-to-vans"> To all vans </p>
      </Link>
      <div className="vans-detail-list">
        <div>
          {hostVanDetail.map((van) => {
            return (
              <header
                key={van.id}
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <img
                  src={van.imageUrl}
                  alt="van-image"
                  style={{ width: "200px", borderRadius: "10px" }}
                />
                <div>
                  <p>{van.type}</p>
                  <h2>{van.name}</h2>
                  <p>${van.price}/day</p>
                </div>
              </header>
            );
          })}
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
