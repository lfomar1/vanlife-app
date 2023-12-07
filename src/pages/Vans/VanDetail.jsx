import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const VanDetail = () => {
  const params = useParams();
  const [vanInfo, setVanInfo] = useState([]);
  const location = useLocation();

  const linkStyle = {
    display: "flex",
    alignItems: "center",
  };

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanInfo(data.vans));
  }, [params.id]);

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
