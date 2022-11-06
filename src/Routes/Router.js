import { createBrowserRouter } from "react-router-dom";
import CreateCategory from "../components/CreateCategory";
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
        loader: () => fetch(`http://localhost:5000/categories`),
        element: <Home></Home>,
      },
      {
        path: "/volunteers",
        element: <Volunteers></Volunteers>,
      },
      {
        path: "/createCategory",
        loader: () => fetch(`http://localhost:5000/categories`),
        element: <CreateCategory></CreateCategory>,
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
