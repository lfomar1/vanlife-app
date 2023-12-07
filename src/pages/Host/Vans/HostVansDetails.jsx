import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const HostVansDetails = () => {
  const [details, setDetails] = useState([]);
  const params = useParams();
  const detailStyling = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };
  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data.vans));
  }, [params.id]);
  return (
    <>
      {details
        ? details.map((van) => {
            return (
              <div key={van.id} style={detailStyling}>
                <div
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  <h3>Name: </h3>
                  <p>{van.name}</p>
                </div>
                <div
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  <h3>Category: </h3>
                  <p>{van.type}</p>
                </div>
                <div style={{ display: "flex", gap: "5px" }}>
                  <h3>Description: </h3>
                  <p>{van.description}</p>
                </div>
                <div
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  <h3>Visibilty: </h3>
                  <p>Public</p>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
};
export default HostVansDetails;
