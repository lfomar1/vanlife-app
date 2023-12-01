import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const VanDetail = () => {
  const params = useParams();
  const [vanInfo, setVanInfo] = useState([]);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanInfo(data.vans));
  }, [params.id]);
  return (
    <div className="van-info">
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
