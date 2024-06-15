import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Landing from "../Pages/Landing";
import Register from "../Pages/Register";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import { SharedLayout } from "../Pages/Dashboard";
import { Stats } from "../Pages/Dashboard";
import { AllJobs } from "../Pages/Dashboard";
import { AddJob } from "../Pages/Dashboard";
import { Profile } from "../Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<PrivateRoute><SharedLayout></SharedLayout></PrivateRoute>,
        children:[
            {
                path:'/',
                element:<Stats></Stats>
            },
            {
                path:'/all-jobs',
                element:<AllJobs></AllJobs>
            },
            {
                path:'/add-job',
                element:<AddJob></AddJob>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            }
        ]
    },
    {
        path:'/landing',
        element:<Landing></Landing>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'*',
        element:<Error></Error>
    }
])

export default router;