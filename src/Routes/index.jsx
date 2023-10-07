import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>
    }
])