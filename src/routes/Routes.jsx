import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BlogDetail from "../pages/BlogDetail/BlogDetail";
import AddBlog from "../pages/AddBlog/AddBlog";
import WishList from "../pages/WishList/WishList";
import PrivateRoute from "./PrivateRoute";
import AllBlog from "../pages/AllBlog/AllBlog";
import FeaturedBlogs from "../pages/FeaturedBlogs/FeaturedBlogs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
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
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/blogdetail/:id',
          element: <PrivateRoute><BlogDetail></BlogDetail></PrivateRoute>,
          loader: () => fetch(`${import.meta.env.VITE_API_URL}/recentBlog`)
        },
        {
          path: '/addblog',
          element: <AddBlog></AddBlog>
        },
        {
          path: '/wishlist',
          element: <PrivateRoute><WishList></WishList></PrivateRoute>,
          // loader: () => fetch(`${import.meta.env.VITE_API_URL}/recentBlog`)
          
        },
        {
          path: '/allblog',
          element: <AllBlog></AllBlog>,
          loader: () => fetch(`${import.meta.env.VITE_API_URL}/recentBlog`)
        },
        {
          path: '/featureblog',
          element: <FeaturedBlogs></FeaturedBlogs>,
          loader: () => fetch(`${import.meta.env.VITE_API_URL}/recentBlog`)
          
          
        }
      ]
    },
  ]);

  export default router;