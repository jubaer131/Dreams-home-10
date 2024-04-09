import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import CardDetails from "../pages/CardDetails";
import ErrorPage from "../pages/ErrorPage";




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
            }
        ]
    },
]);

export default router