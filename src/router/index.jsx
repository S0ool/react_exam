import {createBrowserRouter} from "react-router-dom";
import {Basket} from "../pages/Basket.jsx";
import {HomePage} from "../pages/HomePage.jsx";

export const router = createBrowserRouter(
    [
        {
            path: "*",
            element: <HomePage />
        },
        {
            path: "/Basket",
            element: <Basket />
        },

    ]

)