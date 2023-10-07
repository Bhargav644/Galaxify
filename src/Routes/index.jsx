import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home.jsx";
import LandingModule from "../Pages/landing";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingModule/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/home",
        element: <Register/>
    }
]);