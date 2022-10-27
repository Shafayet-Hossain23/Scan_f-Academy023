import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import ReactToPdf from "../Pages/CourseDetails/ReactToPdf";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PremiumAccess from "../Pages/PremiumAccess/PremiumAccess";
import Register from "../Pages/Register/Register";
import LeftSide from "../SharedPage/LeftSideNav/LeftSide";
import PrivateRoute from "./PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>
            },

            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',

                element: <Login></Login>
            },
            {
                path: '/register',

                element: <Register></Register>
            },
            {
                path: '/pdf',


                element: <ReactToPdf></ReactToPdf>
            },
            {
                path: '/details/:id',
                loader: ({ params }) => {
                    return fetch(`https://learning-platform-server-side-lime.vercel.app/details/${params.id}`)
                },
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/details/premium/:id',
                loader: ({ params }) => {
                    return fetch(`https://learning-platform-server-side-lime.vercel.app/details/premium/${params.id}`)
                },
                element: <PrivateRoute><PremiumAccess></PremiumAccess></PrivateRoute>
            },
        ]
    },
    {
        path: '*',
        element: <div className="text-center my-5">Error! Not found the route (404)</div>
    }

])