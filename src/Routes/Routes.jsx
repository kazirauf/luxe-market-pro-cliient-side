import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import AddJobs from "../Page/AddJobs/AddJobs";
import JobDetails from "../Page/JobsDetails/JobDetails";
import MyBids from "../Page/MyBids/MyBids";
import MyPosted from "../Page/MyPosted/MyPosted";
import UpdateJobs from "../Page/MyPosted/UpdateJobs";
import BidRequests from "../Page/BidRequests/BidRequests";


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
            },
            {
                path: '/myBids',
                element: <MyBids></MyBids>
            },
            {
                path: '/myPosted',
                element: <MyPosted></MyPosted>
            },
            {
                path: '/updateJobs/:id',
                element: <UpdateJobs></UpdateJobs>,
                loader: ({params}) => fetch(`http://localhost:5000/alljobs/${params.id}`)
            },
            {
                path: '/bidRequests',
                element: <BidRequests></BidRequests>
            }
           
        ]
    }
])

export default router;