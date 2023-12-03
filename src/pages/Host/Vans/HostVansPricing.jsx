import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const HostVansDetailsPricing = () => {
  const [price, setPrice] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setPrice(data.vans));
  }, [params.id]);

  return (
    <>
      {price
        ? price.map((van) => {
            return (
              <div
                key={van.id}
                style={{ display: "flex", alignItems: "center" }}
              >
                <p style={{ fontWeight: "bold" }}>${van.price}</p>
                <p>/day</p>
              </div>
            );
          })
        : null}
    </>
  );
};
export default HostVansDetailsPricing;
