import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <div className="error-404">
      <h1>Sorry, the page you were looking for was not found </h1>
      <Link className="return-home-btn" to="/">
        Return to home
      </Link>
    </div>
  );
};
export default Error404;
