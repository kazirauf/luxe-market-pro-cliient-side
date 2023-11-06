import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import AddJobs from "../Page/AddJobs/AddJobs";
import JobDetails from "../Page/JobsDetails/JobDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: '/addJobs',
                element: <AddJobs></AddJobs>
            },
            {
                path: '/jobsDetails/:id',
                element: <JobDetails></JobDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/alljobs/${params.id}`)
            }
           
        ]
    }
])

export default router;