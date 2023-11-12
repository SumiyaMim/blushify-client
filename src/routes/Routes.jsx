import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Error from "../pages/Error";
import PrivateRoute from "./PrivateRoute";
import UpdateProduct from "../pages/UpdateProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/brand.json')
            },
            {
                path: '/brand/:brand_name', 
                element: <Products></Products>,
                loader: () => fetch('/brand.json'),           
            },
            {
                path: '/product-details/:id', 
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: () => fetch('https://blushify-server-n4u453k6t-sumiya-islams-projects.vercel.app/products')
            },
            {
                path: '/add-product',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/update-product/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({params}) => fetch(`https://blushify-server-n4u453k6t-sumiya-islams-projects.vercel.app/products/${params.id}`)
            },
            {
                path: '/my-cart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('https://blushify-server-n4u453k6t-sumiya-islams-projects.vercel.app/cart')
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
        ]
    }
])

export default router;
