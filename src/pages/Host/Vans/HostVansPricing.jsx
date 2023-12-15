import { useLoaderData } from "react-router-dom";
import { getHostVans } from "../../../api";

export const loader = ({ params }) => {
  return getHostVans(params.id);
};
const HostVansDetailsPricing = () => {
  const van = useLoaderData();

  return (
    <>
      <div key={van.id} style={{ display: "flex", alignItems: "center" }}>
        <p style={{ fontWeight: "bold" }}>${van.price}</p>
        <p>/day</p>
      </div>
    </>
  );
};
export default HostVansDetailsPricing;
