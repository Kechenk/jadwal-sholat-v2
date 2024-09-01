import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// import Playground from "../components/Playground";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
    ],
  },
]);

export default router;
