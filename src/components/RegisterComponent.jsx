import React, { useState } from "react";
import { RegisterAPI } from "../api/AuthApi";
import { postUserData } from "../api/FirestoreAPI";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { getUniqueID } from "../helpers/getUniqueId";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";
import { useAuth } from "../AuthContext"; // Import the useAuth hook

export default function RegisterComponent() {
  let navigate = useNavigate();
  const { credentials, setCredentials, setUser } = useAuth(); // Use the useAuth hook

  const register = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      toast.success("Account Created!");
      postUserData({
        userID: getUniqueID(),
        name: credentials.name,
        email: credentials.email,
        imageLink:
          "https://www.nicepng.com/png/full/933-9332131_profile-picture-default-png.png",
      });
      setUser(res.user); // Set the user in your context
      navigate("/home");
      localStorage.setItem("userEmail", res.user.email);
    } catch (err) {
      console.log(err);
      toast.error("Cannot Create your Account");
    }
  };

  return (
    <div className="login-wrapper">
      <img src={logo} className="Logo" />

      <div className="login-wrapper-inner">
        <h1 className="heading">Ready to Explore the Cosmos?</h1>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, name: event.target.value })
            }
            type="text"
            className="common-input"
            placeholder="Your Name"
            required
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or phone number"
            required
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password (6 or more characters)"
            required
          />
        </div>
        <button onClick={register} className="login-btn">
          Agree & Join
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <p className="go-to-signup">
          Already on Galaxify?{" "}
          <span className="join-now" onClick={() => navigate("/")}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
