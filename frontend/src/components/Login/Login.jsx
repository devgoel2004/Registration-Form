import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const login = () => {
    axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.messsage);
      setLoginUser(res.data.user);
      navigate("/");
    });
  };
  return (
    <div>
      <div className="login">
        <h1>Login</h1>
        <input
          name="email"
          value={user.email}
          type="email"
          onChange={handleChange}
          placeholder="Enter Your Email"
        />
        <input
          name="password"
          value={user.password}
          type="password"
          onChange={handleChange}
          placeholder="Enter Your Password"
        />
        <div className="button" onClick={login}>
          Login
        </div>
        <div className="">or</div>
        <div className="button" onClick={() => navigate("/register")}>
          Register
        </div>
      </div>
    </div>
  );
};

export default Login;
