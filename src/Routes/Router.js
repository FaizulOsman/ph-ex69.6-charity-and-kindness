import { createBrowserRouter } from "react-router-dom";
import CreateEvent from "../components/CreateEvent";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Volunteers from "../components/Volunteers";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch(`http://localhost:5000/events`),
        element: <Home></Home>,
      },
      {
        path: "/volunteers",
        element: <Volunteers></Volunteers>,
      },
      {
        path: "/createEvent",
        loader: () => fetch(`http://localhost:5000/events`),
        element: <CreateEvent></CreateEvent>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
