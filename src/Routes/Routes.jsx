import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Bookings from "../Pages/Bookings/Bookings";
import Catagory from "../Pages/Home/Catagory/Catagory";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import SignUp from "../Pages/Home/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/book/:id',
                element: <Catagory></Catagory>,
                loader: ({ params }) => fetch(`http://localhost:4000/services/${params.id}`)
            }, {
                path: '/myBooking',
                element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
            }
        ]
    },
]);

export default router;