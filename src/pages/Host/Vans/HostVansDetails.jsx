import { useLoaderData } from "react-router-dom";
import { getHostVans } from "../../../api";
export const loader = ({ params }) => {
  return getHostVans(params.id);
};
const HostVansDetails = () => {
  const van = useLoaderData();

  const detailStyling = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  return (
    <>
      {
        <div key={van.id} style={detailStyling}>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <h3>Name: </h3>
            <p>{van.name}</p>
          </div>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <h3>Category: </h3>
            <p>{van.type}</p>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <h3>Description: </h3>
            <p>{van.description}</p>
          </div>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <h3>Visibilty: </h3>
            <p>Public</p>
          </div>
        </div>
      }
    </>
  );
};
export default HostVansDetails;
