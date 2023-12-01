import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const HostVans = () => {
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans));
  });
  return (
    <>
      <h1>Your Listed Vans</h1>
      <div className="host-vans">
        {hostVans &&
          hostVans.map((van) => {
            return (
              <Link
                className="vans-host-list"
                key={van.id}
                to={`/host/vans/${van.id}`}
              >
                <img src={van.imageUrl} alt="van-image" />
                <div>
                  <h2>{van.name}</h2>
                  <p>{van.price}$/day</p>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};
export default HostVans;
