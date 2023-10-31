import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              user[0] && user[0]._id ? (
                <HomePage setLoginUser={setLoginUser} />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }></Route>

          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route
            path="/register"
            element={<Register />}
            setLoginUser={setLoginUser}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
