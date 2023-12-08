import { useState } from "react";
const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginFormData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="login">
        <h1>Sign in to your account</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="Email address"
            value={loginFormData.email}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={loginFormData.password}
          />
          <input type="submit" value="Submit" className="submit"></input>
        </form>
      </div>
    </>
  );
};
export default Login;
