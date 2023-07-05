import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import NotFound from "./app/NotFound";
import Page from "./Page";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Page />
            }
        ]
    },
]);

export default router;