import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import NotFound from "./app/NotFound";
import Page from "./Page";
import InformationTicket from "./app/InformationTicket";
import RentalNotice from "./app/RentalNotice";
import RentalNoticeWrite from "./app/RentalNoticeWrite";

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
      {
        path: "rental",
        element: <Root />,
        children: [
          { path: "", element: <RentalNotice /> },
          { path: "notice-write", element: <RentalNoticeWrite /> },
        ],
      },
    ],
  },
]);

export default router;
