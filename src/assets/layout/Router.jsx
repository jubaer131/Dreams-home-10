import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import CardDetails from "../pages/CardDetails";
import ErrorPage from "../pages/ErrorPage";
import Login from "../loginForm/Login";
import Register from "../loginForm/Register";
import UpdatedProfile from "../pages/UpdatedProfile";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/card/:id",
                element: <CardDetails></CardDetails>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/profile",
                element: <UpdatedProfile></UpdatedProfile>,
            }
        ]
    },
]);

export default router