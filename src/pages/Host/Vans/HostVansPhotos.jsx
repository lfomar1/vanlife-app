import { useLoaderData } from "react-router-dom";
import { getHostVans } from "../../../api";
export const loader = ({ params }) => {
  return getHostVans(params.id);
};
const HostVansDetailsPhotos = () => {
  const photo = useLoaderData();
  console.log(photo);
  return (
    <>
      {
        <div key={photo.id}>
          <img
            src={photo.imageUrl}
            alt="van-picture"
            style={{ width: "100px", borderRadius: "10px" }}
          />
        </div>
      }
    </>
  );
};
export default HostVansDetailsPhotos;
