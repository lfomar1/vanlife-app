import { useEffect, useState } from "react";
import "../../server";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState();
  const [selectedFilter, setSelectedFilter] = useState();

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  const chooseFilter = (type) => {
    setSelectedFilter(type);
  };
  const clearFilter = () => {
    setSelectedFilter(null);
  };
  const filteredVans = vans
    ? selectedFilter
      ? vans.filter((van) => van.type === selectedFilter)
      : vans
    : [];
  return (
    <div className="vans">
      <div className="vans-explore">
        <h1>Explore our vans options</h1>
        <button className="simple-btn" onClick={() => chooseFilter("simple")}>
          Simple
        </button>
        <button className="luxury-btn" onClick={() => chooseFilter("luxury")}>
          Luxury
        </button>
        <button className="rugged-btn" onClick={() => chooseFilter("rugged")}>
          Rugged
        </button>
        <button className="clear-filters" onClick={() => clearFilter()}>
          Clear Filters
        </button>
      </div>
      <div className="vans-category">
        {vans &&
          filteredVans.map((van) => {
            return (
              <div key={van.id}>
                <Link to={`/vans/${van.id}`}>
                  <img src={van.imageUrl} alt="van-img" className="vans-img" />
                  <h2>{van.name}</h2>
                  <p>${van.price}</p>
                  <p>{van.type}</p>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Vans;
