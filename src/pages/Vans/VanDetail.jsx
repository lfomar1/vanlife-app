import { getVans } from "../../api";

import { useLoaderData, useLocation, Link } from "react-router-dom";

export const loader = ({ params }) => {
  return getVans(params.id);
};

const VanDetail = () => {
  const linkStyle = {
    display: "flex",
    alignItems: "center",
  };

  const location = useLocation();
  const vanInfo = useLoaderData();
  console.log(vanInfo);
  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-info">
      <Link style={linkStyle} to={`..${search}`} relative="path">
        <span className="material-symbols-outlined">arrow_back</span>{" "}
        <p className="back-to-vans"> {`Back to ${type} vans`} </p>
      </Link>
      <img src={vanInfo.imageUrl} alt="van-image" />
      <h2>{vanInfo.type}</h2>
      <h1>{vanInfo.name}</h1>
      <div className="van-info-price">
        <h2>${vanInfo.price}</h2>
        <h3>/day</h3>
      </div>
      <p>{vanInfo.description}</p>
      <button>Rent this van</button>
    </div>
  );
};
export default VanDetail;
