import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/contactus',
                element: <ContactUs></ContactUs>
            },
        ]
    }
])

export default router;