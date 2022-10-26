import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PremiumAccess from "../Pages/PremiumAccess/PremiumAccess";
import Register from "../Pages/Register/Register";
import LeftSide from "../SharedPage/LeftSideNav/LeftSide";


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
                path: '/details/:id',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/details/${params.id}`)
                },
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/details/premium/:id',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/details/premium/${params.id}`)
                },
                element: <PremiumAccess></PremiumAccess>
            },
        ]
    }

])