import React, { useState } from "react";
import { LoginAPI } from "../api/AuthApi";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";
import { useAuth } from "../AuthContext"; // Import the useAuth hook

export default function LoginComponent() {
  let navigate = useNavigate();
  const { setCredentials } = useAuth(); // Use the useAuth hook
  const [credentials, setLocalCredentials] = useState({}); // Local state for login form

  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      toast.success("Signed In to Galaxify!");
      localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error("Please Check your Credentials");
    }
  };

  return (
    <div className="login-wrapper">
      <img src={logo} className="Logo" />

      <div className="login-wrapper-inner">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Ready to Explore the Cosmos?</p>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setLocalCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
          />
          <input
            onChange={(event) =>
              setLocalCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password"
          />
        </div>
        <button onClick={login} className="login-btn">
          Sign in
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <p className="go-to-signup">
          New to Galaxify?{" "}
          <span className="join-now" onClick={() => navigate("/register")}>
            Join now
          </span>
        </p>
      </div>
    </div>
  );
}
