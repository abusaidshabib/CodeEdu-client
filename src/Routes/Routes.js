import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:
            [
                {
                    path: '/courses',
                    element: <Courses></Courses>

                },
                {
                    path: '/home',
                    element: <Home></Home>
                },
                {
                    path: '/blog',
                    element: <Blog></Blog>
                },
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/faq',
                    element: <Faq></Faq>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                }
            ]
    }
])