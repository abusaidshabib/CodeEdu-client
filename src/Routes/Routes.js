import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Lesson from "../Pages/Lesson/Lesson";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:
            [
                {
                    path: '/courses',
                    loader: async() => fetch('http://localhost:5000/topics'),
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
                },
                {
                    path: '*',
                    element: <NotFound></NotFound>
                },
                {
                    path: '/lesson/:id',
                    element: <PrivateRoute><Lesson></Lesson></PrivateRoute>,
                    loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
                }
            ]
    }
])