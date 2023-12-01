import { Outlet } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <Outlet />
      <div className="footer">
        <p>Ⓒ 2022 #VANLIFE</p>
      </div>
    </>
  );
};
export default Footer;
