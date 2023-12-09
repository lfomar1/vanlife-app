import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
export const loader = () => {
  return getHostVans();
};
const HostVans = () => {
  const hostVans = useLoaderData();

  return (
    <>
      <h1>Your Listed Vans</h1>
      <div className="host-vans">
        {hostVans &&
          hostVans.map((van) => {
            return (
              <Link className="vans-host-list" key={van.id} to={van.id}>
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
