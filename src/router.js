import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import NotFound from "./app/NotFound";
import Page from "./Page";
import InformationTicket from "./app/InformationTicket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Page />,
      },
      {
        path: "information",
        element: <Root />,
        children: [{ path: "", element: <InformationTicket /> }],
      },
    ],
  },
]);

export default router;
