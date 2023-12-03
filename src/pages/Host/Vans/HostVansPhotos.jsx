import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const HostVansDetailsPhotos = () => {
  const [photo, setPhoto] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setPhoto(data.vans));
  }, [params.id]);
  return (
    <>
      {photo
        ? photo.map((van) => {
            return (
              <div key={van.id}>
                <img
                  src={van.imageUrl}
                  alt="van-picture"
                  style={{ width: "100px", borderRadius: "10px" }}
                />
              </div>
            );
          })
        : null}
    </>
  );
};
export default HostVansDetailsPhotos;
