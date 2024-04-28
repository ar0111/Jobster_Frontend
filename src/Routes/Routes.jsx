import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Landing from "../Pages/Landing";
import Dashboard from "../Pages/Dashboard";
import Register from "../Pages/Register";
import Error from "../Pages/Error";

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
                path:'*',
                element:<Error></Error>
            }
        ]
    }
])

export default router;