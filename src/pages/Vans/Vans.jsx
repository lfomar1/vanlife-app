import "../../server";
import { getVans } from "../../api";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
export const loader = () => {
  return getVans();
};
const Vans = () => {
  const vans = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  return (
    <div className="vans">
      <div className="vans-explore">
        <h1>Explore our vans options</h1>
        <button
          onClick={() => setSearchParams({ type: "simple" })}
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => setSearchParams({ type: "luxury" })}
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
        >
          Luxury
        </button>
        <button
          onClick={() => setSearchParams({ type: "rugged" })}
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
        >
          Rugged
        </button>
        {typeFilter ? (
          <button
            onClick={() => setSearchParams({})}
            className={`van-type clear-filter`}
          >
            Clear Filters
          </button>
        ) : null}
      </div>
      <div className="vans-category">
        {displayedVans &&
          displayedVans.map((van) => {
            return (
              <div key={van.id}>
                <Link
                  to={van.id}
                  state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter,
                  }}
                >
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
