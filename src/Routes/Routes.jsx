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
        element:<Main></Main>,
        children:[
            {
                path:'/',
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
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><SharedLayout></SharedLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<Stats></Stats>
            },
            {
                path:'all-jobs',
                element:<AllJobs></AllJobs>
            },
            {
                path:'add-jobs',
                element:<AddJob></AddJob>
            },
            {
                path:'profile',
                element:<Profile></Profile>
            }
        ]
        
    }
])

export default router;