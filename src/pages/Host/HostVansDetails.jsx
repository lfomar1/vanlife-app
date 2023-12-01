import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const HostVansDetails = () => {
  const params = useParams();

  const linkStyle = {
    display: "flex",
    alignItems: "center",
    textDecoration: "underline",
  };
  const [hostVanDetail, setHostVanDetail] = useState([]);
  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setHostVanDetail(data.vans));
  });
  return (
    <>
      <Link to="/host/vans" style={linkStyle}>
        <span className="material-symbols-outlined">arrow_back</span>{" "}
        <p className="nav-links"> To all vans </p>
      </Link>
      <div className="vans-detail-list">
        {hostVanDetail.map((van) => {
          return (
            <header
              key={van.id}
              style={{
                display: "flex",
                justifyContent: "center",
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
    </>
  );
};
export default HostVansDetails;
