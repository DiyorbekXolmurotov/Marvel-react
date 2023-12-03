import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Characters from "../pages/characters/Characters";
import Products from "../pages/products/Products";
import Character from "../pages/characters/Character";
import Stories from "../pages/stories/Stories";
import Series from "../pages/series/Series";
import Comics from "../pages/comics/Comics";
import Creators from "../pages/Creators/Creators";
import Events from "../pages/events/Events";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/characters",
                element: <Characters />
            },
            {
                path: "/characters/:id",
                element: <Character />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/stories",
                element: <Stories />
            },
            {
                path: "/series",
                element: <Series />
            },
            {
                path: "/comics",
                element: <Comics />
            },
            {
                path: "/creators",
                element: <Creators />
            },
            {
                path: "/events",
                element: <Events />
            },
        ],
    },
]);

export default router;