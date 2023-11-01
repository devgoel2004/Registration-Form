import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data);
        navigate("/login");
      });
      // alert("posted");
    } else {
      alert("Invalid Input");
    }
  };
  return (
    <div>
      <div className="register">
        <h1>Register</h1>
        <input
          name="name"
          value={user.name}
          type="text"
          placeholder="Your Name"
          onChange={handleChange}
        />
        <input
          name="email"
          value={user.email}
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          name="password"
          value={user.password}
          type="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          name="reEnterPassword"
          value={user.reEnterPassword}
          type="password"
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        <div className="button" onClick={register}>
          Register
        </div>
        <div>or</div>
        <div className="button" onClick={() => navigate("/login")}>
          Login
        </div>
      </div>
    </div>
  );
};

export default Register;
