import { createBrowserRouter } from "react-router-dom";
import CreateEvent from "../components/CreateEvent";
import EventCard from "../components/EventCard";
import Events from "../components/Events";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import UpdateEvent from "../components/UpdateEvent";
import Volunteers from "../components/Volunteers";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/volunteers",
        element: <Volunteers></Volunteers>,
      },
      {
        path: "/events",
        loader: () => fetch(`http://localhost:5000/events`),
        element: <Events></Events>,
        children: [
          {
            path: "/events",
            element: <EventCard></EventCard>,
          },
          { path: "createevent", element: <CreateEvent></CreateEvent> },
          {
            path: "updateevent/:id",
            loader: ({ params }) =>
              fetch(`http://localhost:5000/events/${params?.id}`),
            element: <UpdateEvent></UpdateEvent>,
          },
        ],
      },
      {
        path: "/events/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/events/${params.id}`),
        element: <Events></Events>,
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
